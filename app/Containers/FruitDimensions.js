import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './FruitDimensions.css';

class FruitDimensions extends Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        // Диаметр арбуза вычисляется по формуле объёма шара (в см), 
        // затем умножается на 80 для визуализации в пикселях (1 см = 80 пикселей).
        let fruitDiameter = Math.cbrt(this.props.finalWeight/(Math.PI*4/3))*80 + 'px';
        
        // Диаметр мякоти соответствует проценту воды после усыхания. 
        // Уменьшается на 10 для наглядности (иначе корка может быть слишком тонкой). 
        let middleDiameter = (this.props.waterPercentage - 10)/100  + 'em';        
        return (
            <div className="fruit-container" style={{
                width: fruitDiameter,
                height: fruitDiameter,
                fontSize: fruitDiameter
            }}>
                <div className="watermelon-icon" style={{...styles.middleContainer, 
                    width: middleDiameter,
                    height: middleDiameter
                }}></div>
            </div>
        )
    }
}

const styles = {    
    middleContainer: {
        position: 'absolute',
        backgroundColor: '#ff6767',
        backgroundSize: 'cover',
        borderRadius: '100%',
        width: '.99em',
        height: '.99em'
    }
};

FruitDimensions.propTypes = {
    finalWeight: PropTypes.number.isRequired,
    waterPercentage: PropTypes.number.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        finalWeight: state.finalFruitWeight.finalWeight,
        waterPercentage: state.waterPercentage.waterPercentage
    };
}

export default connect(mapStateToProps)(FruitDimensions);
