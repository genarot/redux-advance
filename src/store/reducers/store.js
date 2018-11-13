import { STORE_RESULT, DELETE_RESULT } from "../actions/actionsTypes";
import { updateObject } from "../utility";

const initialState =  {
    results: []
}

const deleteResult = ( state, action) =>{
    console.log('delete ', action.payload);
    const updatedArray = state.results.filter( (storedResult) => storedResult.id != action.payload)
    return updateObject(    state,  { results: updatedArray })
}

const reducer = (state = initialState, action) => {
    switch( action.type ) {
        case STORE_RESULT:
            return updateObject(
                 state,
                {
                    results: state.results.concat({id: new Date().getTime(), value: action.payload})
                }
            )
        case DELETE_RESULT:
                return deleteResult(state, action);
    }
    return state;
}

export default reducer;