import React, { Component, Fragment } from 'react'
import RangeSlider from '../Components/RangeSlider'

import store from '../store.js';
import { connect } from 'react-redux';
import * as actions from '../actions/fruitWeightActions';

let weight = store.getState().fruitWeight.weight;

class WeightSlider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            volume: weight
        }
    }
    onUpdate = (val) => {
        this.setState({
            volume: val
        });
        const {updateFruitWeight} = this.props;
        updateFruitWeight(val);
    };           
    
    render (){        
        return (
            <RangeSlider
                title="Начальный вес арбуза"
                metric="кг"
                min={10}
                max={100}
                initialValue={weight}
                orientation="vertical"
                onUpdate={this.onUpdate}                
            />    
        )
        
    }
}

export default connect(null, actions)(WeightSlider);