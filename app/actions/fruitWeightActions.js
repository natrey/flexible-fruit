export const UPDATE_FRUIT_WEIGHT = 'UPDATE_FRUIT_WEIGHT';
export const UPDATE_FINAL_FRUIT_WEIGHT = 'UPDATE_FINAL_FRUIT_WEIGHT';
export const UPDATE_WATER_PERCENTAGE = 'UPDATE_WATER_PERCENTAGE';

export function updateFruitWeight(weight) {
    return {
        type: UPDATE_FRUIT_WEIGHT,                   
        weight        
    }
}

export function updateFinalFruitWeight(finalWeight) {
    return {
        type: UPDATE_FINAL_FRUIT_WEIGHT,                   
        finalWeight        
    }
}



export function updateWaterPercentage(waterPercentage) {
    return {
        type: UPDATE_WATER_PERCENTAGE,        
        waterPercentage        
    }
}
