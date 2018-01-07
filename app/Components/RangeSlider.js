import React, { Component, Fragment } from 'react'
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'
import './RangeSlider.css'

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
            Title = <div style={styles.title}>
                        <span style={styles.titleText}>
                            {this.props.title}:
                        </span> {status} {this.props.metric}
                    </div>
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
    },
    titleText: {
        display: 'block',
        marginBottom: '10px'
    }
};

export default RangeSlider;