import React from "react";
import {InputItem, List} from "antd-mobile";
import 'antd-mobile/dist/antd-mobile.css'
import {Component} from "react";

//input point light attribute
class AttributeInputComponent extends Component{

    constructor(props) {
        super(props);
        this.val = this.props.defaultValue;
        this.state = {
            type: 'digit',
            xValue: -10.0,
            yValue: 0.0,
            zValue: -15.0

        }
    }

    render() {
        const { getFieldProps } = this.props.form;
        const { type } = this.state;
        return (
            <div>
                <List>
                    <InputItem
                        step={0.1}
                        type={type}
                        labelNumber={7}
                        clear
                        onChange={(v) => { this.props.parent.getXFromAttribInput(this, v); }}
                        defaultValue={-10.0}
                    >-  LightSourceX</InputItem>
                    <InputItem
                        step={0.1}
                        type={type}
                        labelNumber={7}
                        clear
                        onChange={(v) => { this.props.parent.getYFromAttribInput(this, v); }}
                        defaultValue={0.0}
                    >-  LightSourceY</InputItem>
                    <InputItem
                        step={0.1}
                        type={type}
                        labelNumber={7}
                        clear
                        onChange={(v) => { this.props.parent.getZFromAttribInput(this, v); }}
                        defaultValue={-15.0}
                    >-  LightSourceZ</InputItem>
                </List>
            </div>
        );
    }

}

export default AttributeInputComponent;

