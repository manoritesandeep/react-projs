import React from 'react';
import { useState } from 'react';
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Date Counter Ver2.0</h1>
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0); 

  const date = new Date("October 23, 1995");
  date.setDate(date.getDate() + count);

  function handleReset() {
    setCount(0);
    setStep(1);
  }

  return (
    <div>
      <div>
        <input 
          type="range" 
          min="0" 
          max="10" 
          value={step} 
          onChange={(e) => setStep(Number(e.target.value))}>
        </input>
        {/* <button onClick={() => setStep((s) => s-1)}>-</button> */}
        <span> Step: {step} </span>
        {/* <button onClick={() => setStep((s) => s+1)}>+</button> */}
      </div>

      <div>
      <button onClick={() => setCount((c) => c-step)}>-</button>
      {/* <span> Count: {count} </span> */}
      <input type='text' value={count} onChange={(e) => setCount(Number(e.target.value))}>
      </input>
      <button onClick={() => setCount((c) => c+step)}>+</button>
      </div>

      <p>
        <span> 
          {
            count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `
          }
        </span>
        <span>{date.toDateString()}</span>
      </p>

      {count !==0 || step !== 1 ? <div>
        <button onClick={handleReset}> Reset </button>
      </div> : null}
    </div>
  );
}

