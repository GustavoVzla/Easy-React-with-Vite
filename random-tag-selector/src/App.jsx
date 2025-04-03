import { useState } from "react";
import TagList from "./components/TagList";
import "./styles/App.css";

const App = () => {
  const [input, setInput] = useState("");
  const [tags, setTags] = useState([]);

  // Manejar cambios en el textarea
  const handleInputChange = (e) => {
    setInput(e.target.value);
    const tagsArray = e.target.value
      .split(",")
      .filter((tag) => tag.trim() !== "")
      .map((tag) => tag.trim());
    setTags(tagsArray);
  };

  // Manejar la selección aleatoria
  const handleRandomSelect = () => {
    if (tags.length === 0) return;

    const times = 30;
    let interval = null;

    interval = setInterval(() => {
      const randomTag = pickRandomTag();
      highlightTag(randomTag);

      setTimeout(() => {
        unHighlightTag(randomTag);
      }, 100);
    }, 100);

    setTimeout(() => {
      clearInterval(interval);

      setTimeout(() => {
        const randomTag = pickRandomTag();
        highlightTag(randomTag);
      }, 100);
    }, times * 100);
  };

  // Seleccionar una etiqueta aleatoria
  const pickRandomTag = () => {
    return tags[Math.floor(Math.random() * tags.length)];
  };

  // Resaltar una etiqueta
  const highlightTag = (tag) => {
    const tagElement = document.querySelector(`[data-tag="${tag}"]`);
    if (tagElement) tagElement.classList.add("highlight");
  };

  // Quitar el resaltado de una etiqueta
  const unHighlightTag = (tag) => {
    const tagElement = document.querySelector(`[data-tag="${tag}"]`);
    if (tagElement) tagElement.classList.remove("highlight");
  };

  return (
    <div className="container">
      <h3>
        Enter all of the choices divided by a comma (','). <br /> Press enter
        when you're done
      </h3>
      <textarea
        placeholder="Enter choices here..."
        value={input}
        onChange={handleInputChange}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            setInput("");
            handleRandomSelect();
          }
        }}
      />
      <TagList tags={tags} />
    </div>
  );
};

export default App;
