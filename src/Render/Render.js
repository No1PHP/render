import React, {Component} from "react";
import "antd/dist/antd.css";
import {okMat4Trans, okMat4Proj} from "../Oak3D_v_0_5.js"

//fragment shader source code
    const fsSource = `
    precision mediump float;

    varying vec3 vTransformedNormal;
    varying vec3 vAlbedo;
    varying vec4 vPosition;

    uniform float uMaterialShininess;

    uniform bool uUseHighlight;
    uniform bool uUseLighting;

    uniform vec3 uAmbientColor;

    uniform vec3 uPointLightingLocation;
    uniform vec3 uPointLightingSpecularColor;
    uniform vec3 uPointLightingDiffuseColor;

    uniform float uEnvLightLuminance;
    uniform float uDiffuseLightLuminance;

    void main(void) {

        vec3 lightWeighting;
        //Whether to turn on the lighting effect
        if (!uUseLighting) {
            lightWeighting = vec3(1.0, 1.0, 1.0);
        } else {
            //Calculate the direction of lighting
            vec3 lightDirection = normalize(uPointLightingLocation - vPosition.xyz);
            vec3 normal = normalize(vTransformedNormal);

            //store the luminance of specular light
            float specularLightWeighting = 0.0;
            
            //whether to turn on the specular light effect
            if (uUseHighlight) {
                //get the perspective unit vector of the viewer 
                vec3 eyeDirection = normalize(-vPosition.xyz);
                //calculate the reflect direction of light
                vec3 reflectionDirection = reflect(-lightDirection, normal);
                specularLightWeighting = pow(max(dot(reflectionDirection, eyeDirection), 0.0), uMaterialShininess);
            }

            float directLightWeighting = max(dot(normal, lightDirection), 0.0);
            //lightWeighting = uAmbientColor
            //  + uPointLightingSpecularColor * specularLightWeighting
            //  + uPointLightingDiffuseColor * diffuseLightWeighting;


            lightWeighting = uAmbientColor * uEnvLightLuminance
                + uPointLightingSpecularColor * specularLightWeighting
                + uPointLightingDiffuseColor * uDiffuseLightLuminance * directLightWeighting;
        }

        vec4 fragmentColor;
        fragmentColor = vec4((vAlbedo.r + 1.0) / 2.0, (vAlbedo.g + 1.0) / 2.0, (vAlbedo.b + 1.0) / 2.0, 1.0);

        gl_FragColor = (vec4(lightWeighting * fragmentColor.rgb, fragmentColor.a));
    }
`;

//vertex shader source code
    const vsSource = `
    attribute vec3 aVertexPosition;
    attribute vec3 aVertexNormal;
    attribute vec3 aVertexAlbedo;

    uniform mat4 uModelViewVMatrix;
    uniform mat4 uProjectionMatrix;
    uniform mat4 uNormalMatrix;

    varying vec3 vTransformedNormal;
    varying vec4 vPosition;
    varying vec3 vAlbedo;

    void main(void) {
        vPosition = uModelViewVMatrix * vec4(aVertexPosition, 1.0);
        gl_Position = uProjectionMatrix * vPosition;
        vTransformedNormal = (uNormalMatrix * vec4(aVertexNormal , 1.0)).xyz;
        vAlbedo = aVertexAlbedo;
    }
`;

    function degToRad(degrees) {
        return degrees * Math.PI / 180;
    }


class Render extends Component{


    constructor(props) {

        super(props);
        this.canvas = React.createRef();

        this.state = {
            shouldBeginRendering: this.props.shouldRender,

            pointLightX : this.props.pX,
            pointLightY : this.props.pY,
            pointLightZ : this.props.pZ,

            depth : this.props.depth,
            albedo : this.props.albedo,
            env_light : this.props.env_light,
            diffuse_light : this.props.diffuse_light,
            normals : this.props.normals,
            indices : this.props.indices,

            useLight : this.props.useLight,
            useSpecular : this.props.useSpecular,

            leftRight : this.props.leftRight,
            topDown : this.props.topDown,
            zRotation : this.props.zRotation,
            horizonR : this.props.horizonR,
            flatR : this.props.flatR,
            distance : this.props.distance,

            enableRotation: this.props.enableRotation
        }


        //response data
        this.shaderProgram = null;
        this.resVertexPositionBuffer = null;
        this.resVertexNormalBuffer = null;
        this.resAlbedoBuffer = null;
        this.gl = null;  //webgl context

        this.lastTime = 0;
        this.rotAngle = 180;


    }

    //to be called(rerender) in configured period
    tick(state){
        this.drawScene(state);
        this.animate();
    }


    //Receive parameters from parent component
    componentWillReceiveProps(nextProps, nextContext) {

        this.setState(
            {
            shouldBeginRendering: this.props.shouldRender,

            pointLightX : this.props.pX,
            pointLightY : this.props.pY,
            pointLightZ : this.props.pZ,

            depth : this.props.depth,
            albedo : this.props.albedo,
            env_light : this.props.env_light,
            diffuse_light : this.props.diffuse_light,
            normals : this.props.normals,
            indices : this.props.indices,

            useLight : this.props.useLight,
            useSpecular : this.props.useSpecular,

            leftRight : this.props.leftRight,
            topDown : this.props.topDown,
            zRotation : this.props.zRotation,
            horizonR : this.props.horizonR,
            flatR : this.props.flatR,
            distance : this.props.distance,
            enableRotation: this.props.enableRotation
        }
        )

    }

    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     if(this.state.shouldBeginRendering){
    //         console.log("should begin rendering")
    //         this.WebGLStart(this.state);
    //         this.setState({glAlreadyInitialized: true})
    //         return true;
    //     }else return false;
    // }

    //Receive parameters before mounting components
    componentWillMount() {
        // console.log("componentWillMount-props.shouldRender : ",this.props.shouldRender );
        this.setState(
            {
                shouldBeginRendering: this.props.shouldRender,

                pointLightX : this.props.pX,
                pointLightY : this.props.pY,
                pointLightZ : this.props.pZ,

                depth : this.props.depth,
                albedo : this.props.albedo,
                env_light : this.props.env_light,
                diffuse_light : this.props.diffuse_light,
                normals : this.props.normals,
                indices : this.props.indices,

                useLight : this.props.lightSwitchValue,
                useSpecular : this.props.shinySwitchValue,

                leftRight : this.props.leftRight,
                topDown : this.props.topDown,
                zRotation : this.props.zRotation,
                horizonR : this.props.horizonR,
                flatR : this.props.flatR,
                distance : this.props.distance
            }
        )


    }

    //initiliaze WebGL context after mounting
    componentDidMount() {
        //console.log("componentDidMount-props.shouldRender : ",this.props.shouldRender );
        //console.log(this.props.depth)

        if(this.props.shouldRender){
            //console.log("1- Enter WebGL initialization")
            this.WebGLStart(this.props);
            //console.log(this.state)
        }

        if (this.gl) {
            this.timerID = setInterval(
                () => this.tick(this.state),
                1000 / 60
            );
            //console.log("2- tick triggered");
        }
        //console.log(this.gl)
    }

    //When deciding to reload the WebGL canvas in the parent components
    componentWillUpdate(nextProps, nextState, nextContext) {
        //
        // console.log("componentWillUpdate-props.shouldRender : ",this.props.shouldRender );
        // console.log(this.state)
        if(this.props.reload){
            this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
            this.gl.clearColor(0.1, 0.1, 0.1, 1.0);
        }
    }


    //Initialize WebGL (get context, set view height width)
    initGL = () =>{
        try {
            //console.log("4- entered initGL");
            var canvas = document.getElementsByClassName("RENDER");
            // console.log(canvas[0]);
            //console.log("Get canvas element : ", canvas);
            this.gl = canvas[0].getContext("experimental-webgl");
            this.gl.viewportWidth = canvas[0].width;
            this.gl.viewportHeight = canvas[0].height;

        } catch (e) {
            console.log(e);
        }
        if (!this.gl) {
            alert("Could not initialise WebGL");
        }
    }

    WebGLStart = ()=>{
        //console.log("3- Has entered webgl start");
        //console.log("state before gl init", this.state);
        this.initGL();
        this.initShaders();

        this.parseResponseData(this.state);


        this.gl.clearColor(0.1, 0.1, 0.1, 1.0);
        this.gl.enable(this.gl.DEPTH_TEST); //开启z深度检测

        //console.log("7- GL fully initialized")

        //tick(state);
    }

    //Initilize shader
    getShader = (gl, sourceString, type) =>{

        var shader;
        if(type === "fragment_shader"){
            shader = gl.createShader(gl.FRAGMENT_SHADER);
        }else if(type === "vertex_shader"){
            shader = gl.createShader(gl.VERTEX_SHADER);
        }else{
            return null;
        }

        gl.shaderSource(shader, sourceString);
        // console.log(type)
        // console.log(shader)
        gl.compileShader(shader);

        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
            alert(gl.getShaderInfoLog(shader));
            // console.log(type)
            // console.log(shader)
            return null;
        }

        return shader;

    }

    //attach FS & VS source code, pass the control parameters to the corresponding shader's variable
    initShaders = () =>{
        //console.log("5- initShaders");

        var fragmentShader = this.getShader(this.gl, fsSource, "fragment_shader");
        var vertexShader = this.getShader(this.gl, vsSource, "vertex_shader");

        this.shaderProgram = this.gl.createProgram();
        this.gl.attachShader(this.shaderProgram, vertexShader);
        this.gl.attachShader(this.shaderProgram, fragmentShader);
        this.gl.linkProgram(this.shaderProgram);

        if (!this.gl.getProgramParameter(this.shaderProgram, this.gl.LINK_STATUS)) {
            alert("Could not initialise shaders");
        }

        this.gl.useProgram(this.shaderProgram);

        this.shaderProgram.vertexPositionAttribute = this.gl.getAttribLocation(this.shaderProgram, "aVertexPosition");
        this.gl.enableVertexAttribArray(this.shaderProgram.vertexPositionAttribute);

        this.shaderProgram.vertexNormalAttribute = this.gl.getAttribLocation(this.shaderProgram, "aVertexNormal");
        this.gl.enableVertexAttribArray(this.shaderProgram.vertexNormalAttribute);

        this.shaderProgram.vertexAlbedoAttribute = this.gl.getAttribLocation(this.shaderProgram, "aVertexAlbedo");
        this.gl.enableVertexAttribArray(this.shaderProgram.vertexAlbedoAttribute);

        this.shaderProgram.pMatrixUniform = this.gl.getUniformLocation(this.shaderProgram, "uProjectionMatrix");
        this.shaderProgram.mvMatrixUniform = this.gl.getUniformLocation(this.shaderProgram, "uModelViewVMatrix");
        this.shaderProgram.nMatrixUniform = this.gl.getUniformLocation(this.shaderProgram, "uNormalMatrix");
        this.shaderProgram.materialShininessUniform = this.gl.getUniformLocation(this.shaderProgram, "uMaterialShininess");
        this.shaderProgram.showSpecularHighlightsUniform = this.gl.getUniformLocation(this.shaderProgram, "uUseHighlight");
        this.shaderProgram.useLightingUniform = this.gl.getUniformLocation(this.shaderProgram, "uUseLighting");
        this.shaderProgram.ambientColorUniform = this.gl.getUniformLocation(this.shaderProgram, "uAmbientColor");
        this.shaderProgram.pointLightingLocationUniform = this.gl.getUniformLocation(this.shaderProgram, "uPointLightingLocation");
        this.shaderProgram.pointLightingSpecularColorUniform = this.gl.getUniformLocation(this.shaderProgram, "uPointLightingSpecularColor");
        this.shaderProgram.pointLightingDiffuseColorUniform = this.gl.getUniformLocation(this.shaderProgram, "uPointLightingDiffuseColor");

        this.shaderProgram.envLightLuminance = this.gl.getUniformLocation(this.shaderProgram, "uEnvLightLuminance");
        this.shaderProgram.diffuseLightluminance = this.gl.getUniformLocation(this.shaderProgram, "uDiffuseLightLuminance");

    }

    //parse the response from server to the control parameters and object data
    parseResponseData = (responseData) =>{
        //console.log("6- parseResponseData")
        //console.log("data in the parser: ", responseData)

        // Create a buffer for vertex normals
        this.resVertexNormalBuffer = this.gl.createBuffer();
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.resVertexNormalBuffer);
        //Pass the normals as arrays and bind with the destined buffer
        this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(responseData.normals), this.gl.STATIC_DRAW);
        this.resVertexNormalBuffer.itemSize = 3;
        this.resVertexNormalBuffer.numItems = responseData.normals.length / 3;


        this.resVertexPositionBuffer = this.gl.createBuffer();
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.resVertexPositionBuffer);
        this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(responseData.depth), this.gl.STATIC_DRAW);
        this.resVertexPositionBuffer.itemSize = 3;
        this.resVertexPositionBuffer.numItems = responseData.depth.length / 3;

        this.resAlbedoBuffer = this.gl.createBuffer();
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.resAlbedoBuffer);
        this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(responseData.albedo), this.gl.STATIC_DRAW);
        this.resAlbedoBuffer.itemSize = 3;
        this.resAlbedoBuffer.numItems = responseData.albedo.length / 3;


        this.resVertexIndexBuffer = this.gl.createBuffer();
        this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.resVertexIndexBuffer);
        this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(responseData.indices), this.gl.STATIC_DRAW);
        this.resVertexIndexBuffer.itemSize = 1;
        this.resVertexIndexBuffer.numItems = responseData.indices.length;
        //console.log("resVertexIndexBuffer", this.resVertexIndexBuffer);
        //console.log("resVertexPositionBuffer", this.resVertexPositionBuffer);


        this.gl.uniform1f(
            this.shaderProgram.envLightLuminance,
            parseFloat(responseData.env_light)
        );

        this.gl.uniform1f(
            this.shaderProgram.diffuseLightluminance,
            parseFloat(responseData.diffuse_light)
        );

        // console.log(document.getElementsByClassName("loadingText"));
    }



    //draw the object after response parsing, according to the control parameters and object data
    drawScene = (renderState) =>{

        let mvMatrix = okMat4Trans(0, 0, renderState.distance); //model view matrix
        let pMatrix = okMat4Proj(45, this.gl.viewportWidth / this.gl.viewportHeight, 0.1, 100.0); //projection matrix

        //let print = mvMatrix.valueOf();
        //console.log("initialized as :", print);

        this.gl.viewport(0, 0, this.gl.viewportWidth, this.gl.viewportHeight);
        // clear color and the depth(z) buffer
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);

        if (this.resVertexPositionBuffer == null || this.resVertexNormalBuffer == null || this.resVertexIndexBuffer == null || this.resAlbedoBuffer == null) {
            return;
        }

        let specularHighlights = this.props.useSpecular;
        this.gl.uniform1i(this.shaderProgram.showSpecularHighlightsUniform, specularHighlights);


        // whether to turn on the lighting effect
        let lighting = this.props.useLight;
        this.gl.uniform1i(this.shaderProgram.useLightingUniform, lighting);
        if (lighting) {
            //environmental light RGB
            this.gl.uniform3f(
                this.shaderProgram.ambientColorUniform,
                1.0, 1.0, 1.0
            );

            // point light source's location
            this.gl.uniform3f(
                this.shaderProgram.pointLightingLocationUniform,
                this.props.pX,
                this.props.pY,
                this.props.pZ
            );

            // point light source's specular reflection RGB
            this.gl.uniform3f(
                this.shaderProgram.pointLightingSpecularColorUniform,
                1.0, 1.0, 1.0
            );

            // point light source's diffuse reflection RGB
            this.gl.uniform3f(
                this.shaderProgram.pointLightingDiffuseColorUniform,
                1.0, 1.0, 1.0
            );
        }

        //view point from the vertex
        // mat4.translate(mvMatrix, mvMatrix, [0, 0, state.distance])
        //////mat4.translate(mvMatrix, mvMatrix, [0.0, 0.0, parseFloat(renderState.distance)])
        //transMat4(mvMatrix, 0, 0, state.distance)
        //console.log("after translate:", mvMatrix)

        //水平horizon- 20 degree slide
        //mat4.rotate(mvMatrix, mvMatrix, parseFloat(degToRad(renderState.flatR)), [1, 0, 0]);
        mvMatrix.rot(1, renderState.flatR, 1, 0, 1, true);

        //rotation degree Y-axis
        //////mat4.rotate(mvMatrix, mvMatrix, parseFloat(degToRad(renderState.horizonR)), [0, 1, 0]);

        //whether to enable to auto rotation of facial model
        if(this.props.enableRotation){
            mvMatrix.rotY(1, this.rotAngle, true);
        }else{
            mvMatrix.rotY(1, renderState.horizonR, true);
        }

        mvMatrix.rotZ(1, renderState.zRotation, true);
        //mat4.rotate(mvMatrix, mvMatrix, parseFloat(degToRad(renderState.zRotation)), [0, 0, 1]);

        //mat4.translate(mvMatrix, mvMatrix, [parseFloat(renderState.leftRight), parseFloat(renderState.topDown), parseFloat(renderState.distance)]);

        mvMatrix.translate(2, renderState.leftRight, renderState.topDown, 0, true);

        this.gl.uniform1f(this.shaderProgram.materialShininessUniform, 2.0);

        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.resVertexPositionBuffer);

        //binds the buffer currently bound to gl.ARRAY_BUFFER to a vertex attribute of the current vertex buffer
        this.gl.vertexAttribPointer(this.shaderProgram.vertexPositionAttribute, this.resVertexPositionBuffer.itemSize, this.gl.FLOAT, false, 0, 0);

        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.resVertexNormalBuffer);
        this.gl.vertexAttribPointer(this.shaderProgram.vertexNormalAttribute, this.resVertexNormalBuffer.itemSize, this.gl.FLOAT, false, 0, 0);

        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.resAlbedoBuffer);
        this.gl.vertexAttribPointer(this.shaderProgram.vertexAlbedoAttribute, this.resAlbedoBuffer.itemSize, this.gl.FLOAT, false, 0, 0);

        this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.resVertexIndexBuffer);


        this.gl.uniformMatrix4fv(this.shaderProgram.pMatrixUniform, false, pMatrix.toArray());
        this.gl.uniformMatrix4fv(this.shaderProgram.mvMatrixUniform, false, mvMatrix.toArray());

        //////let normalMatrix = mat4.clone(mvMatrix);
        //console.log(normalMatrix);
        //////mat4.invert(normalMatrix, normalMatrix);
        //////mat4.transpose(normalMatrix, normalMatrix);

        var normalMatrix = mvMatrix.inverse().transpose();


        this.gl.uniformMatrix4fv(this.shaderProgram.nMatrixUniform, false, normalMatrix.toArray());


        this.gl.drawElements(this.gl.TRIANGLES, this.resVertexIndexBuffer.numItems, this.gl.UNSIGNED_SHORT, 0);
        // console.log(this.gl?.ELEMENT_ARRAY_BUFFER_BINDING)
        // console.log(this.gl?.getParameter(this.gl?.ELEMENT_ARRAY_BUFFER_BINDING))
        //console.log(resVertexIndexBuffer.numItems);
        //this.gl.drawArrays(this.gl.LINE_STRIP, 0, this.resVertexPositionBuffer.numItems);

        //console.log("end up as : ", mvMatrix);

    }


    render() {

        //console.log("Canvas_Render rendered")
        //document.body.onload = this.WebGLStart
        return (
                <div style={{marginLeft: 10, marginTop: 10}}>

                    <canvas ref={this.canvas} className={"RENDER"} width={380} height={380} ></canvas>
                    {/*<div className="loadingText" style={{*/}
                    {/*    position:"absolute",*/}
                    {/*    top:150,*/}
                    {/*    left:120,*/}
                    {/*    fontSize:20,*/}
                    {/*    color: "blue"*/}
                    {/*}}> Loading ...</div>*/}


                </div>
        );
    }

    //auto rotation's animation of the object
    animate = ()=>{

        var timeNow = new Date().getTime();
        if (this.lastTime != 0) {
            var elapsed = timeNow - this.lastTime;

            this.rotAngle += 0.05 * elapsed;
        }
        this.lastTime = timeNow;

    }

}

export default Render;
