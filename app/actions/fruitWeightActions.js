export const UPDATE_FRUIT_WEIGHT = 'UPDATE_FRUIT_WEIGHT';
export const UPDATE_WATER_PERCENTAGE = 'UPDATE_WATER_PERCENTAGE';

export function updateFruitWeight(weight) {
    return {
        type: UPDATE_FRUIT_WEIGHT,
        payload: {            
            weight
        }
    }
}

export function updateWaterPercentage(waterPercentage) {
    return {
        type: UPDATE_WATER_PERCENTAGE,
        payload: { 
            waterPercentage
        }
    }
}
