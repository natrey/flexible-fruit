import React, {Fragment} from 'react';
import RangeSlider from '../Components/RangeSlider';
const App = () => (
    <Fragment>        
        <RangeSlider 
            title="Начальный вес арбуза" 
            metric="кг" 
            min={5} 
            max={20} 
            initialValue={5} 
            orientation="vertical"/>
        <RangeSlider 
            title="Процент воды после усыхания" 
            metric="%" 
            min={50} 
            max={99} 
            initialValue={99} 
            orientation="horizontal"/>
    </Fragment>
);

export default App