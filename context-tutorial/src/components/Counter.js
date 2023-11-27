import React from 'react';
import { UseAnother } from '../contexts/another';

const Counter = ({ number, increment}) => {
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={increment}>더하기</button>
    </div>
  );
};

//export default UseAnother(Counter);
export default UseAnother(
    ({state, actions}) => ({
        number: state.number,
        increment: actions.increment
    })
)(Counter);