import * as React from "react";

enum ActionType {
    INCREMENT_COUNTER = "INCREMENT_COUNTER",
    DECREMENT_COUNTER = "DECREMENT_COUNTER"
}

interface IReducer {
    type: ActionType;
    count: number;
}

interface ICounter {
    result: number;
}

const initialState: ICounter = {
    result: 0
};

const countValue: number = 1;

const reducer: React.Reducer<ICounter, IReducer> = (state, action) => {
    switch (action.type) {
        case ActionType.INCREMENT_COUNTER:
            return { result: state.result + action.count };
        case ActionType.DECREMENT_COUNTER:
            return { result: state.result - action.count };
        default:
            return state;
    }
};

const ReducerExample = () => {
    const [state, dispatch] = React.useReducer<React.Reducer<ICounter, IReducer>>(
        reducer,
        initialState
    );

    return (
        <div className="App">
            <h1>Result: {state.result}</h1>
            <button
                onClick={() =>
                    dispatch({ type: ActionType.INCREMENT_COUNTER, count: countValue })
                }> +
            </button>
            <button
                onClick={() =>
                    dispatch({ type: ActionType.DECREMENT_COUNTER, count: countValue })
                }> -
            </button>
        </div>
    );
}
export default ReducerExample;