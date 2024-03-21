import React from 'react';
import { useState } from 'react';
import SelectPercentage from './SelectPercentage';
import Output from './Output';
import Reset from './Reset';
import BillInput from './BillInput';

export default function TipCalulator() {

  const [bill, setBill] = useState("");
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  const tip = bill * ((percentage1 + percentage2) / 2 / 100);
  // console.log(percentage1);
  // console.log(percentage2);
  // console.log((percentage1 + percentage2) /2);
  // console.log(tip);
  function handleReset() {
    setBill("");
    setPercentage1(0);
    setPercentage2(0);
  }
  return (
    <div>
      <BillInput bill={bill} onSetBill={setBill} />
      <SelectPercentage percentage={percentage1} onSelect={setPercentage1}>
        How did you like the servive?
      </SelectPercentage>
      <SelectPercentage percentage={percentage2} onSelect={setPercentage2}>
        How did your friend like the servive?
      </SelectPercentage>

      {bill > 0  && (
        <React.Fragment>
          <Output bill={bill} tip={tip} />
          <Reset onReset={handleReset} />
        </React.Fragment>
      )}
    </div>
  );
}
