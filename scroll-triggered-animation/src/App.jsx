import Box from "./components/Box";
import "./styles/App.css";

const App = () => {
  const boxes = Array.from(
    { length: 20 },
    (_, index) => `Content ${index + 1}`
  );

  return (
    <div>
      <h1>Scroll to see the animation</h1>
      {boxes.map((content, index) => (
        <Box key={index} content={content} index={index} />
      ))}
    </div>
  );
};

export default App;
