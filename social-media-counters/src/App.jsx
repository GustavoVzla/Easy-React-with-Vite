import Counter from "./components/Counter";
import "./styles/App.css";

const countersData = [
  { icon: "fab fa-twitter", target: 12000, label: "Twitter Followers" },
  { icon: "fab fa-youtube", target: 5000, label: "YouTube Subscribers" },
  { icon: "fab fa-facebook", target: 7500, label: "Facebook Fans" },
];

const App = () => {
  return (
    <div className="container">
      {countersData.map((counter, index) => (
        <Counter
          key={index}
          icon={counter.icon}
          target={counter.target}
          label={counter.label}
        />
      ))}
    </div>
  );
};

export default App;
