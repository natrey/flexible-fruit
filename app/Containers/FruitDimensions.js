import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../icons/styles.css';

class FruitDimensions extends Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        // let fruitDiameter = Math.cbrt(this.props.finalWeight/(Math.PI*4/3))*2 + 'px';
        let fruitDiameter = this.props.finalWeight*4 + 'px';
        let middleDiameter = (this.props.waterPercentage - 10)/100  + 'em';        
        return (
            <div style={{...styles.borderContainer,
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
    borderContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,    
        margin: 'auto',
        background: '#4CAF50',
        borderRadius: '100%',
        width: '100px',
        height: '100px',
        fontSize: '100px'
    },
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
