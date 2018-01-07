import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../actions/fruitWeightActions';


class FruitEndWeight extends Component {
    constructor(props) {
        super(props);
        this.state={
            weight: this.props.finalWeight
        }
    }

    componentWillReceiveProps(nextProps){   
        // Конечный вес после усыхания.
        let currentWeight = nextProps.finalWeight/(100 - nextProps.waterPercentage); 
        
        // Округляю число до 2-х знаков после запятой.
        currentWeight = Math.round(currentWeight*100)/100;
        
        if(nextProps.finalWeight !== this.props.finalWeight || nextProps.waterPercentage !== this.props.waterPercentage){
            this.setState({weight: currentWeight});
            let {updateFinalFruitWeight} = this.props;
            updateFinalFruitWeight(currentWeight);
        }        
    }
    
    render() {   
        return (
            <div>
                <div style={styles.title}>Вес после усыхания: {this.state.weight} кг.</div>
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