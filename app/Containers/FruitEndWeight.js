import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../actions/fruitWeightActions';


class FruitEndWeight extends Component {
    constructor(props) {
        super(props);        
    }

    componentWillReceiveProps(nextProps){        
        let currentWeight = nextProps.finalWeight/(100 - nextProps.waterPercentage);        
        currentWeight = Math.round(currentWeight*100)/100;
        
        if(nextProps.finalWeight !== this.props.finalWeight){
            let {updateFinalFruitWeight} = this.props;
            updateFinalFruitWeight(currentWeight);
        }        
    }
    
    render() {
        let currentWeight = (this.props.finalWeight/(100 - this.props.waterPercentage)).toFixed(2);        
        
        return (
            <div>
                <div style={styles.title}>Вес после усыхания: {currentWeight} кг.</div>
            </div>
        )
    }
}

FruitEndWeight.propTypes = {
    finalWeight: PropTypes.number.isRequired,
    waterPercentage: PropTypes.number.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        finalWeight: state.fruitWeight.weight,
        waterPercentage: state.waterPercentage.waterPercentage
    };
}

const styles = {
    title: {
        textAlign: 'center',
        fontWeight: 'bold'
    }
};

export default connect(mapStateToProps, actions)(FruitEndWeight);