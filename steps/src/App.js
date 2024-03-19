import {useState} from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <div>
      <Steps />
      {/* <Steps /> */}
      <StepMessage step={1}>
        <p>Pass content here</p>
        <p>😊</p>
      </StepMessage>
    </div>
  );
}

function Steps() {

  const [step, setStep] = useState(1);
  // const step = 1;
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    // better to use callback when we are updating the state based on the previous state
    // if (step > 1) setStep(step -1);
    if (step > 1) setStep((step) => step - 1)
  };

  function handleNext() {
    // if (step < 3) setStep(step + 1);
    // updating to callback
    if (step < 3) {
      setStep((step) => step + 1);
      // setStep((step) => step + 1)  // this updates the step twice.. skip 2 and go to 3
    }
  };

  return (
    <div>
      <button className="close" onClick={() => setIsOpen((isopen) => !isopen)}>
        &times;
      </button>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={ step >= 1 ? "active": "" } >1</div>
            <div className={ step >= 2 ? "active": "" } >2</div>
            <div className={ step >= 3 ? "active": "" } >3</div>
          </div>

          <StepMessage step={step}>
            {messages[step - 1]}
            <Button 
              textColor="#fff"
              bgColor="#7950f2"
              onClick={() => alert(`Learn how to ${messages[step - 1]}`)}>
              Click to learn how
            </Button>
          </StepMessage>

          <div className="buttons">
            <Button 
              textColor="#fff"
              bgColor="#7950f2"
              onClick={handlePrevious}>
              <span>👈</span> Previous
            </Button>
            <Button 
              textColor="#fff"
              bgColor="#7950f2"
              onClick={handleNext}>
              Next <span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};


function StepMessage({ step, children}) {
  return (
    <div className="message">
      <h3>Step {step}: </h3>
      {children}
    </div> 
  )
}

function Button({ textColor, bgColor, onClick, children}) {
  return (
    <button 
      style={{ backgroundColor: bgColor, color:textColor}}
      onClick={onClick}>
      {children}
    </button>
  );
}