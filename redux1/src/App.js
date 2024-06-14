import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const count = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
      <div className="App">
        <h1>Counter: {count}</h1>
        <button onClick={() => dispatch({ type: 'PLUS' })}>+1</button>
        <button onClick={() => dispatch({ type: 'MINUS' })}>-1</button>
        <button onClick={() => dispatch({ type: 'POLO' })}>+10</button>
        <button onClick={() => dispatch({ type: 'RALFH' })}>-10</button>
      </div>
  );
}

export default App;
