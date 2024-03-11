import React from 'react';
import { useState } from 'react';
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
    
  );
}

function Counter() {
// export default function App() {
  // const date = new Date().toDateString();
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date("june 21 2024");
  date.setDate(date.getDate() + count);

  // function handleStep() { setStep((step) => step + 1) }

  // function handleCount() { if (step === 0) { setCount(count);
  //   } else { setCount((count) => count + step);}}

  return (
    <div>
      <div>
        <button onClick={() => setStep((s) => s - 1)}>-</button>
        <span> Step: {step} </span>
        <button onClick={() => setStep((s) => s + 1)}>+</button>
      </div>

      <div>
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <span> Count: {count} </span>
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>

      {/* <div className="App">
        <h1>Today is {today}</h1>
        <h2> {count} days from today is {today}</h2>
      </div> */}
      <p>
        <span>
          { count ===0 
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `
          }
        </span>
        <span>{date.toDateString()}</span>
      </p>
    </div>
  );
}

