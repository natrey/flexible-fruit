import React, { Component } from 'react'
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'

class RangeSlider extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            volume: 0
        };
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange(value) {
        this.setState({
            volume: value
        })
    }

    render() {
        let { volume } = this.state;
        return (
            <Slider
                min={5}
                max={20}
                step={1}
                value={volume}
                orientation="vertical"
                onChange={this.handleOnChange}
            />
        )
    }
}

export default RangeSlider;