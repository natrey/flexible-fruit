import React, { Component, Fragment } from 'react'
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'


class RangeSlider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: this.props.initialValue
        };       
    }

    handleUpdate = (value) => {
        this.setState({
            status: value
        });
        this.props.onUpdate(value);             
    }    

    render() {                
        let {status} = this.state;
        let Title = null;
        let hasTitle = this.props.title;
        
        if(hasTitle){
            Title = <div style={styles.title}>{this.props.title}: {status} {this.props.metric}</div>
        }
        
        return (
            <Fragment>
                {Title}                
                <Slider
                    min={this.props.min}
                    max={this.props.max}
                    step={1}
                    value={status}
                    orientation={this.props.orientation}
                    onChange={this.handleUpdate} 
                />
            </Fragment>            
        )
    }
};

const styles = {
    title: {
        textAlign: 'center'
    }
};

export default RangeSlider;