import { useState } from "react";
import "../styles/FormInput.css";

const FormInput = ({ label, type }) => {
  const [isFocused, setIsfcused] = useState(false);

  const handleFocus = () => setIsfcused(true);
  const handleBlur = (e) => {
    if (!e.target.value) setIsfcused(false);
  };

  const animatedLabel = label.split("").map((letter, idx) => (
    <span key={idx} style={{ transitionDelay: `${idx * 50}ms` }}>
      {letter}
    </span>
  ));

  return (
    <div className="form-control">
      <input type={type} onFocus={handleFocus} onBlur={handleBlur} required />
      <label>{animatedLabel}</label>
    </div>
  );
};

export default FormInput;
