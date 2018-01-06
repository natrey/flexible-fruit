import React, {Fragment} from 'react';
import FruitEndWeight from '../Components/FruitEndWeight';
import WeightSlider from './WeightSlider';
import VolumeSlider from './VolumeSlider'

import { connect } from 'react-redux';

const App = () => (        
        <Fragment>
            <FruitEndWeight />
            <WeightSlider />
            <VolumeSlider />
        </Fragment>
);

export default connect()(App);