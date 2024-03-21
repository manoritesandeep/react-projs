import {useState} from 'react';

export default function App() {
  return (
    <div>
      <h1>Calc4Tips</h1>
      <TipCalulator />
    </div>
  );
}

function TipCalulator() {

  const [bill, setBill] = useState("");
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  const tip = bill * ((percentage1 + percentage2) /2 / 100);
  // console.log(percentage1);
  // console.log(percentage2);
  // console.log((percentage1 + percentage2) /2);
  // console.log(tip);
  function handleReset(){
    setBill("");
    setPercentage1(0);
    setPercentage2(0);
  }
  return (
    <div>
      <BillInput bill={bill} onSetBill={setBill} />
      <SelectPercentage percentage={percentage1} onSelect={setPercentage1} >
        How did you like the servive? 
      </SelectPercentage>
      <SelectPercentage percentage={percentage2} onSelect={setPercentage2}>
        How did your friend like the servive? 
      </SelectPercentage>

      <Output bill={bill} tip={tip}/>
      <Reset onReset={handleReset}/>
    </div>
  
  )

}

function BillInput({ bill, onSetBill }) {
  return (
    <div>
      <label>How much was the bill? </label>
      <input 
      type='text' 
      placeholder="Enter bill amount." 
      value={bill}
      onChange={(e) => onSetBill(Number(e.target.value))}
      >
      </input>
    </div>
    )  
}

function SelectPercentage({ children, percentage, onSelect }) {
  return (
    <div>
      <label>{children}</label>
      <select value={percentage} onChange={(e) => onSelect(Number(e.target.value))}>
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </div>
    
  )
}

function Output({ bill, tip }){
  return (
    <div>
      <h3>Your total bill is: ${bill + tip} (${bill} + ${tip} tip) </h3>
    </div>
  )
}

function Reset({ onReset }){
  return (
    <button onClick={onReset}>Reset</button>
  )
}