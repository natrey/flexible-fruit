import React, { Component, Fragment } from 'react'
import RangeSlider from '../Components/RangeSlider'

import store from '../store.js';
import { connect } from 'react-redux';
import * as actions from '../actions/fruitWeightActions';

let waterPercentage = store.getState().waterPercentage.waterPercentage;

class VolumeSlider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            volume: waterPercentage
        }
    }
    onUpdate = (val) => {
        this.setState({
            volume: val
        });
        const {updateWaterPercentage} = this.props;
        updateWaterPercentage(val);
    };

    render (){
        return (            
            <RangeSlider
                title="Процент воды после усыхания"
                metric="%"
                min={50}
                max={99}
                initialValue={waterPercentage}
                orientation="horizontal"
                onUpdate={this.onUpdate}
            />
        )

    }
}

export default connect(null, actions)(VolumeSlider);