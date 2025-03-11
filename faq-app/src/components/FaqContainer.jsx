import FaqItem from "./FaqItem";
import "../styles/FaqContainer.css";

const FaqContainer = ({ faqs }) => {
  return (
    <div className="faq-container">
      {faqs.map((faq) => (
        <FaqItem key={faq.id} faq={faq} />
      ))}
    </div>
  );
};

export default FaqContainer;
