import React, { Component, Fragment } from 'react'
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'

class RangeSlider extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            volume: props.initialValue
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
        let Title = null;
        let hasTitle = this.props.title;
        
        if(hasTitle){
            Title = <div style={styles.title}>{this.props.title}: {volume}{this.props.metric}</div>
        }
        
        return (
            <Fragment>
                {Title}                
                <Slider
                    min={this.props.min}
                    max={this.props.max}
                    step={1}
                    value={volume}
                    orientation={this.props.orientation}
                    onChange={this.handleOnChange}
                />
            </Fragment>
            
        )
    }
}

const styles = {
    title: {
        textAlign: 'center'
    }
}

export default RangeSlider;