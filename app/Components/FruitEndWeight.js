import React, { Component } from 'react'

class FruitEndWeight extends Component {
    render() {
        return (
            <div>
                <div style={styles.title}>Вес после усыхания: кг.</div>
            </div>
        )
    }
}

const styles = {
    title: {
        textAlign: 'center'
    }
};

export default FruitEndWeight;