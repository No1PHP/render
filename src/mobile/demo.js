import React from "react";
import {List, Accordion, Switch} from "antd-mobile";
import {Radio} from "antd";
import 'antd-mobile/dist/antd-mobile.css'
import {Component} from "react";
import SlideComponent from "./SlideComponent";
import AttributeInputComponent from "./AttributeInputComponent";
import {createForm} from 'rc-form'
import UploadCropBox from "./UploadCropBox";
import Render from "../Render/Render";

const AttributeInput = createForm()(AttributeInputComponent);

// Main web page
class MobilePage extends Component{

    constructor(props) {
        super(props);

        this.state = {
            reloadCanvas: false,

            restoreDefault: false,

            resolution: 128,
            shouldRender : false,

            depth : [],
            albedo : [],
            env_light : [],
            diffuse_light : [],
            indices : [],
            normals : [],

            leftRight : 0,
            topDown : 0,
            zRotation : 180,
            horizontalRotation : 180,
            flatRotation : 0,
            pDistance : -0.3,
            lightSwitchValue :true,
            shinySwitchValue : false,
            pointLightX : -10.1,
            pointLightY : 4.1,
            pointLightZ : -20.1,

            enableRotation: false

        }


        this.getXFromAttribInput = this.getXFromAttribInput.bind(this);
        this.getYFromAttribInput = this.getYFromAttribInput.bind(this);
        this.getZFromAttribInput = this.getZFromAttribInput.bind(this);

        this.getLeftRightSlider = this.getLeftRightSlider.bind(this);
        this.getTopDownSlider = this.getTopDownSlider.bind(this);
        this.getZaxisSlider = this.getZaxisSlider.bind(this);
        this.getHorizontalSlider = this.getHorizontalSlider.bind(this);
        this.getFlatSlider = this.getFlatSlider.bind(this);
        this.getDistanceSlider = this.getDistanceSlider.bind(this);
        this.getRenderStatus = this.getRenderStatus.bind(this);
        this.getRenderInfo = this.getRenderInfo.bind(this);
    }


    getXFromAttribInput = (result, x) =>{
        //this.pointLightX = x;
        this.setState({pointLightX: x})
    }
    getYFromAttribInput = (result, y) =>{
        //this.pointLightY = y;
        this.setState({pointLightY: y})
    }
    getZFromAttribInput = (result, z) =>{
        //this.pointLightZ = z;
        this.setState({pointLightZ: z})
    }

    getLeftRightSlider = (result, data) =>{
        //this.leftRight = data;
        this.setState({leftRight: data})
    }
    getTopDownSlider = (result, data) =>{
        //this.topDown = data;
        this.setState({topDown: data})
    }
    getZaxisSlider = (result, data) =>{
        // this.zRotation = data;
        this.setState({zRotation: data})
    }
    getHorizontalSlider = (result, data) =>{
        //this.horizontalRotation = data;
        this.setState({horizontalRotation: data})
    }
    getFlatSlider = (result, data) =>{
        // this.flatRotation = data;
        this.setState({flatRotation: data})
    }
    getDistanceSlider = (result, data) =>{
        // this.pDistance = data;
        this.setState({pDistance: data})
    }


    getRenderStatus = (data) =>{
        this.setState({shouldRender: data})
    }

    getRenderInfo = (depth, albedo, env_light, diffuse_light, indices, normals)=>{
        this.setState({
            depth: depth,
            albedo: albedo,
            env_light: env_light,
            diffuse_light: diffuse_light,
            indices: indices,
            normals: normals
        })
    }

    onRadioChange = e => {
        this.setState({
            resolution: e.target.value,
        });
        if(this.options) {
            this.child.uploadImage(this.options, e.target.value);
        }
    };

    removeCanvas = () =>{
        this.setState({shouldRender: false})
    };
    restoreCanvas = () =>{
        this.setState({
            shouldRender: true
        })
    }

    onRef = (ref) =>{
        this.child = ref;
    };

    getOptionsFromUpload = (options) =>{
        this.options = options;
    }


    render() {
        //console.log("main render");
        console.log("mobile page received :", this.state);
        return <>

            {this.state.shouldRender?
                <Render
                    pX={this.state.pointLightX}
                    pY={this.state.pointLightY}
                    pZ={this.state.pointLightZ}
                    depth={this.state.depth}
                    albedo={this.state.albedo}
                    env_light={this.state.env_light}
                    diffuse_light={this.state.diffuse_light}
                    indices={this.state.indices}
                    normals={this.state.normals}

                    useLight={this.state.lightSwitchValue}
                    useSpecular={this.state.shinySwitchValue}

                    leftRight={this.state.leftRight}
                    topDown={this.state.topDown}
                    zRotation={this.state.zRotation}
                    horizonR={this.state.horizontalRotation}
                    flatR={this.state.flatRotation}
                    distance={this.state.pDistance}

                    shouldRender={this.state.shouldRender}

                    enableRotation = {this.state.enableRotation}
                    reload = {this.state.reloadCanvas}
                />:
                <div className="loadingText" style={{
                    width: 300,
                    height: 300,
                    position:"absolute",
                    top:150,
                    left:120,
                    fontSize:20,
                    color: "blue"
                }}> </div>

            }

            <UploadCropBox parent={this} onRef={this.onRef}/>

            <Accordion defaultActiveKey="0" className="transform-accordion"
                       onChange={this.onChange}>
                <Accordion.Panel header="Rotation Configuration">

                    <List>
                        <List.Item><div style={{ padding: 3.5 }}>
                            <SlideComponent
                                step = {0.01}
                                name = "ZaxisRotation"
                                min={0}
                                max={360}
                                defaultValue={180}
                                parent={this}
                            /></div></List.Item>
                        <List.Item><div style={{ padding: 3.5 }}>
                            <SlideComponent
                                step = {0.01}
                                name = "HorizontalRotate"
                                min={0}
                                max={360}
                                defaultValue={180}
                                parent={this}
                            /></div></List.Item>
                        <List.Item><div style={{ padding: 3.5 }}>
                            <SlideComponent
                                step = {0.01}
                                name = "FlatRotation"
                                min={0}
                                max={360}
                                defaultValue={0}
                                parent={this}
                            /></div></List.Item>
                        <List.Item><div style={{ padding: 3.5 }}>
                            <SlideComponent
                                step = {0.0001}
                                name = "PerspectiveDistance"
                                min={-2}
                                max={-0.001}
                                defaultValue={-0.4}
                                parent={this}
                            /></div></List.Item>

                    </List>
                </Accordion.Panel>

            </Accordion>


            <div style={{ marginTop: 10, marginBottom: 10 }}>

                <Accordion defaultActiveKey={['0','1','2','3']} className="my-accordion"
                           onChange={this.onChange}>
                    <Accordion.Panel header="Resolution">
                            <Radio.Group onChange={this.onRadioChange} value={this.state.resolution} size={"large"} style={{height:50}}>
                                <div style={{height:15}}></div>
                                <Radio value={64} style={{marginLeft:15}}>64</Radio>
                                <Radio value={128} style={{marginLeft:25}}>128</Radio>
                                <Radio value={256} style={{marginLeft:30}}>256</Radio>
                                <Radio value={512} style={{marginLeft:35}}>512</Radio>
                                <div style={{height:5}}></div>
                            </Radio.Group>
                    </Accordion.Panel>
                    <Accordion.Panel header="Point LightSource Attribute">
                        <List className="attrib-list">
                            <AttributeInput parent={this} />
                        </List>
                    </Accordion.Panel>
                    <Accordion.Panel header="Effect Option">
                        <List className="effect-list">
                            <List.Item
                                extra={<Switch checked={this.state.lightSwitchValue} onChange={()=>this.setState({lightSwitchValue: !this.state.lightSwitchValue})}/>}
                            >-  Lighting Effect</List.Item>
                            <List.Item
                                extra={<Switch checked={this.state.shinySwitchValue} onChange={()=>this.setState({shinySwitchValue: !this.state.shinySwitchValue})}/>}
                            >-  Specular Effect</List.Item>
                            <List.Item
                                extra={<Switch checked={this.state.enableRotation} onChange={()=>this.setState({enableRotation: !this.state.enableRotation})}/>}
                            >-  Auto Rotation</List.Item>
                        </List>
                    </Accordion.Panel>
                </Accordion>
            </div>


        </>
    }

}

export default MobilePage;
