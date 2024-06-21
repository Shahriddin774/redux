import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { plus1,plus10,minus10,minus1 } from './counterSlice';

const Counter = () => {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={() => dispatch(plus1())}>+1</button>
            <button onClick={() => dispatch(plus10())}>+10</button>
            <button onClick={() => dispatch(minus1())}>-1</button>
            <button onClick={() => dispatch(minus10())}>-10</button>
        </div>
    );
};

export default Counter;
