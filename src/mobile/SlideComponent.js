import React from "react";
import {Slider, WhiteSpace} from "antd-mobile";
import 'antd-mobile/dist/antd-mobile.css'
import {Component} from "react";

//slider (for rotate and distance)
class SlideComponent extends Component{

    constructor(props) {
        super(props);
        this.val = this.props.defaultValue
    }



    render() {
        return(
            <>
            <Slider
                style={{ marginLeft: 30, marginRight: 30 }}
                min={this.props.min}
                max={this.props.max}
                step={this.props.step}
                defaultValue={this.props.defaultValue}
                onChange={(value) => {
                    this.val = value;
                    this.forceUpdate();
                    switch (this.props.name) {
                        case "LeftRight": this.props.parent.getLeftRightSlider(this, value);break;
                        case "TopDown": this.props.parent.getTopDownSlider(this, value); break;
                        case "ZaxisRotation": this.props.parent.getZaxisSlider(this, value);break;
                        case "HorizontalRotate": this.props.parent.getHorizontalSlider(this, value);break;
                        case "FlatRotation": this.props.parent.getFlatSlider(this, value);break;
                        case "PerspectiveDistance": this.props.parent.getDistanceSlider(this, value);break;

                    }
                }}
            ><WhiteSpace/>{this.props.name} {this.val} </Slider>
            </>
        )
    }

}

export default SlideComponent;

