import { STORE_RESULT, DELETE_RESULT } from "../actions/actionsTypes";

const initialState =  {
    results: []
}

const reducer = (state = initialState, action) => {
    switch( action.type ) {
        case STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({id: new Date().getTime(), value: action.payload})
            }
        case DELETE_RESULT:
        console.log('delete ', action.payload);
            return {
                ...state,
                results: state.results.filter( (storedResult) => storedResult.id != action.payload)
            }
    }
    return state;
}

export default reducer;