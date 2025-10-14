import React, { useState } from 'react';
import { Counter } from './Counter';

export const Hello = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <button onClick={increment}>Click Me</button>
      <Counter counter={counter}/>
    </div>
  );
};
