import React, {Fragment} from 'react';
import FruitEndWeight from './FruitEndWeight';
import WeightSlider from './WeightSlider';
import VolumeSlider from './VolumeSlider'
import FruitDimensions from './FruitDimensions';
import "./App.css";

import { connect } from 'react-redux';

const App = () => (        
        <Fragment>
            <h1 className="title">Flexible Fruit</h1>
            <FruitEndWeight />
            <div className="params-wrapper">
                <div className="params-wrapper__row">
                    <aside className="params-wrapper__aside">
                        <WeightSlider />  
                    </aside>
                    <div className="params-wrapper__column">
                        <FruitDimensions />
                    </div>                    
                </div> 
                <VolumeSlider /> 
            </div>            
        </Fragment>
);

export default connect()(App);