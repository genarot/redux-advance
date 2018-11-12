import { DELETE_RESULT, STORE_RESULT } from "./actionsTypes";

const saveResult = (res ) => ({
    type: STORE_RESULT,
    payload: res
})
export const storeResult = (res) => {
    return (dispatch, getState) => {
            setTimeout(() => {
                const oldCounter = getState().counter;
                console.log('oldCounter', oldCounter);
                dispatch(saveResult(res))    
            }, 2000);
    }
}

export const deleteResult = ( resId ) => {
    return {
            type: DELETE_RESULT,
            payload: resId
    }
}