import { useState } from "react";
import "../styles/FaqItem.css";

const FaqItem = ({ faq }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleFAQ = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`faq ${isActive ? "active" : ""}`}>
      <h3 className="faq-title">{faq.title}</h3>
      <p className="faq-text">{faq.text}</p>
      <button className="faq-toggle" onClick={toggleFAQ}>
        <i className="fas fa-chevron-down"></i>
        <i className="fas fa-times"></i>
      </button>
    </div>
  );
};

export default FaqItem;
