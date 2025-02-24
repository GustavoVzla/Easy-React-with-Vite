import { useEffect, useState } from "react";
import Panel from "./components/Panel";
import { getPanels } from "./services/apiService";
import "./styles/App.css";

const App = () => {
  const [panels, setPanels] = useState([]);
  const [activePanel, setActivePanel] = useState(null);

  useEffect(() => {
    const fetchPanels = async () => {
      const data = await getPanels();
      setPanels(data);
      if (data.length > 0) {
        setActivePanel(data[0].id);
      }
    };
    fetchPanels();
  }, []);

  return (
    <div className="container">
      {panels.map((panel) => (
        <Panel
          key={panel.id}
          title={panel.title}
          background={panel.background}
          isActive={activePanel === panel.id}
          onClick={() => setActivePanel(panel.id)}
        />
      ))}
    </div>
  );
};

export default App;
