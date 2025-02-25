import { useState } from "react";
import "../styles/ProgressSteps.css";

const ProgressSteps = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;

  const updateStep = (value) => {
    setCurrentStep((currentStep) => {
      let newStep = currentStep + value;
      return Math.max(1, Math.min(newStep, totalSteps));
    });
  };

  return (
    <main className="container">
      <ul className="progress-container">
        <li
          className="progress"
          style={{ width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%` }}
        ></li>

        {Array.from({ length: totalSteps }, (_, i) => (
          <li key={i} className={`circle ${i < currentStep ? "active" : ""}`}>
            {i + 1}
          </li>
        ))}
      </ul>

      <button
        className={`btn ${currentStep === 1 ? "disabled" : ""}`}
        onClick={() => updateStep(-1)}
        disabled={currentStep === 1}
      >
        Prev
      </button>

      <button
        className={`btn ${currentStep === totalSteps ? "disabled" : ""}`}
        onClick={() => updateStep(1)}
        disabled={currentStep === totalSteps}
      >
        Next
      </button>
    </main>
  );
};

export default ProgressSteps;
