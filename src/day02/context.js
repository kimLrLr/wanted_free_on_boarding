import { createContext, useContext, useReducer } from "react";

const CounterContext = createContext();

const initialState = {count: 0};

function reducer(state, action){
    switch (action.type){
        case 'increment':
            return {count: state.count + 1};
        case 'decrement':
            return {count: state.count - 1};
        default:
            throw new Error();
    }
}

export const CounterProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <CounterContext.Provider value={{state, dispatch}}>
            {children}
        </CounterContext.Provider>
    );
};

export const useCounter = () => useContext(CounterContext);

const Counter = () => {
    const {state, dispatch} = useCounter();

    return(
        <div>
            <h1>Counter: {state.count}</h1>
            <button onClick={() => dispatch({type: 'increment'})}>+</button>
            <button onClick={() => dispatch({type: 'decrement'})}>-</button>
        </div>
    );
};

const AnotherComponent = () => {
    const {state, dispatch} = useCounter();

    return(
        <div>
            <h2>Another Component Count: {state.count}</h2>
            <button onClick={() => dispatch({type:'increment'})}>Increment from Another Component</button>
        </div>
    );
};