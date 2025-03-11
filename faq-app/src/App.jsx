import FaqContainer from "./components/FaqContainer";
import "./styles/App.css";

const App = () => {
  // FAQ data
  const faqData = [
    {
      id: 1,
      title: "What did the ocean say to the beach?",
      text: "Nothing, it just waved.",
    },
    {
      id: 2,
      title: "Why don't scientists trust atoms?",
      text: "Because they make up everything.",
    },
    {
      id: 3,
      title: "How do you organize a space party?",
      text: "You planet.",
    },
    {
      id: 4,
      title: "Why did the scarecrow win an award?",
      text: "Because he was outstanding in his field.",
    },
    {
      id: 5,
      title: "What's the best thing about Switzerland?",
      text: "I don't know, but the flag is a big plus.",
    },
  ];

  return (
    <div className="container">
      <h1>Frequently Asked Questions</h1>
      <FaqContainer faqs={faqData} />
    </div>
  );
};

export default App;
