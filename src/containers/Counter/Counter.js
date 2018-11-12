import React, { Component } from 'react';
import {connect} from 'react-redux'

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import { INCREMENT, DECREMENT, ADD, SUBSTRACT, STORE_RESULT, DELETE_RESULT } from '../../store/actions/actionsTypes';
import { storeResult, deleteResult, increment,decrement,add } from '../../store/actions/index';

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.crt} />
                <CounterControl label="Increment" clicked={() => this.props.onIncrementCounter()} />
                <CounterControl label="Decrement" clicked={() => this.props.onDecrementCounter()}  />
                <CounterControl label="Add 5" clicked={() => this.props.onAddCounter()}  />
                <CounterControl label="Subtract 8" clicked={() => this.props.onSubstractCounter()}  />
                <hr />
                <button onClick={() => this.props.onStoreResult(this.props.crt)}>Store Result</button>
                <ul>
                    {
                        this.props.storedResults
                            .map( (currrentCounter) => 
                                    <li key={currrentCounter.id} onClick={ () => this.props.onDeleteResult(currrentCounter.id)}>{currrentCounter.value}</li>
                            )
                    }
                </ul>
            </div>
        );
    }
}

const mapStatetoProps   = (state) => {
    console.log(state);
    return {
        crt: state.counter.counter, 
        storedResults: state.store.results
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onIncrementCounter: () => dispatch(increment()),
        onDecrementCounter: () => dispatch({type:   DECREMENT}),
        onAddCounter: () => dispatch(add()),
        onSubstractCounter: () => dispatch({type:   SUBSTRACT, payload:8}),
        onStoreResult: ( result ) => dispatch(storeResult(result)),
        onDeleteResult: (id) => dispatch({type:     DELETE_RESULT, payload: id})
    }
}

export default connect( mapStatetoProps, mapDispatchToProps )(Counter);