import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


class FruitEndWeight extends Component {
    constructor(props, context) {
        super(props, context);
    }
    
    render() {
        let currentWeight = (this.props.weight/(100 - this.props.waterPercentage)).toFixed(2);
        return (
            <div>
                <div style={styles.title}>Вес после усыхания: {currentWeight} кг.</div>
            </div>
        )
    }
}

FruitEndWeight.propTypes = {
    weight: PropTypes.number.isRequired,
    waterPercentage: PropTypes.number.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        weight: state.fruitWeight.weight,
        waterPercentage: state.waterPercentage.waterPercentage
    };
}

const styles = {
    title: {
        textAlign: 'center'
    }
};

export default connect(mapStateToProps)(FruitEndWeight);