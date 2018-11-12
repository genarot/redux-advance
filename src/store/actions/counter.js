import { INCREMENT,DECREMENT, ADD, SUBSTRACT } from "./actionsTypes";

export const increment = () => {
    return {
            type: INCREMENT
    }
}

export const drecement = () => {
    return {
            type: DECREMENT
    }
}

export const add = () => {
    return {
            type: ADD, 
            payload: 5
    }
}

export const substract = ( value ) => {
    return {
            type: SUBSTRACT,
            payload: value
    }
}
