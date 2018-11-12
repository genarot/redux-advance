const  {createStore} = require( 'redux' );
const   initialState = {
    counter:0
};

//Actions Const
const INCREMENT_COUNTER = 'INCREMENT_COUNTER',
        ADD_COUNTER = 'ADD_COUNTER';

//Reducer
const rootReducer = ( state = initialState, action ) => {
    switch( action.type ) {
        case INCREMENT_COUNTER:
            return {
                ...state,
                counter: ++state.counter
            }
        case ADD_COUNTER:
            return {
                ...state,
                counter: state.counter + action.payload
            }
        default:
            return state;
    }
}
//Store
const store = createStore(rootReducer);

console.log(store.getState());


//Subscriptor
store.subscribe(()=> {
    console.log('[Subscription]', store.getState());
    
})
//Dispatcher
store.dispatch({type:INCREMENT_COUNTER})
store.dispatch({type:ADD_COUNTER, payload:10})

console.log(store.getState());