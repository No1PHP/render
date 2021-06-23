import React, {useState, useEffect, useImperativeHandle, forwardRef, Component} from "react";
import { render } from "react-dom";
import "antd/dist/antd.css";
import axios from "axios";
import { Upload } from "antd";
import ImgCrop from "antd-img-crop";

//Image Cropper Dialogue
class UploadCropBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            defaultFileList : []
        }
    }

    componentDidMount() {
        this.props.onRef(this);
    }

    setDefaultFileList = (fileList) =>{
        this.setState({
            defaultFileList: fileList
        })
    }



    uploadImage = async (options, resolution) => {

        let shouldRender = false;
        const { onSuccess, file } = options;
        const formData = new FormData();
        const config = {
            headers: { "content-type": "multipart/form-data" },
        };
        formData.append("image", file);
        axios.defaults.timeout = 30000;
        try {
            // const res = await axios.post(
            //     'http://60.205.169.15:28934?meta_data={"image_size":64}',
            //     formData,
            //     config
            // );
            let url = 'http://60.205.169.15:28934?meta_data={"image_size":'+resolution.toString()+'}';
            console.log("request to : "+ url);
            const res = await axios.post(
                url,
                formData,
                config
            );
            // const res = await axios.post(
            //     'http://localhost.charlesproxy.com:3000/api/mock',
            // )

            onSuccess("Ok");


            let depth = res.data.depth;
            let albedo = res.data.albedo;
            let env_light = res.data.env_light;
            let diffuse_light = res.data.diffuse_light;
            let indices = res.data.index;
            let normals = res.data.normals;

            this.props.parent.getRenderInfo(depth, albedo, env_light, diffuse_light, indices, normals);


            shouldRender = true;
            this.props.parent.getRenderStatus(shouldRender);
            console.log("Rcv response after upload");

            this.props.parent.removeCanvas();
            this.props.parent.restoreCanvas();


            //console.log("res: ", res.data);
        } catch (err) {
            console.log("Error: ", err);
        }
    };

    handleOnChange = ({ file, fileList, event }) => {
        this.setDefaultFileList(fileList);
    };

    onRemove = () =>{
        this.props.parent.removeCanvas();
    };

    render() {
        return (
            <div style={{display: "block", marginLeft: 20, marginRight: "auto", width: "40%"}}>
                <ImgCrop
                    rotate
                    modalTitle="Please clip the image to maximize the facial part, and exclude hair"
                    grid={true}
                    quality={0.8}
                    modalOk={"Submit"}
                >
                    <Upload
                        style={{marginLeft: 20}}
                        accept="image/*"
                        customRequest= {options => {
                            this.uploadImage(options, this.props.parent.state.resolution);
                            this.props.parent.getOptionsFromUpload(options);
                        }}
                        onRemove={this.onRemove}
                        onChange={this.handleOnChange}
                        listType="picture-card"
                        defaultFileList={this.state.defaultFileList}
                        className="image-upload-grid"
                    >
                        {this.state.defaultFileList.length >= 1 ? null : <div>+ Upload</div>}
                    </Upload>
                </ImgCrop>
            </div>
        );
    }
};
export default UploadCropBox;
