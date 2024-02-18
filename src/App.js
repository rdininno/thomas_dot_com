import "./App.css";
import { useState } from "react";
import MenuItem from "./components/MenuItem.js";
import About from "./components/About.js";
import Design from "./components/Design.js";

function App() {
  const [activeComponent, setActiveComponent] = useState("");
  const [activeDesignContent, setActiveDesignContent] = useState("");

  const handleDesignClick = () => {
    setActiveComponent("Design");
    setActiveDesignContent("");
  };

  return (
    <div className="App">
      <div className="header">
        <img src="./images/Freak_Heat_Waves.jpg" alt="header" />
      </div>

      <div className="main-page">
        <div className="menu">
          <MenuItem name="Design" color="#2ebe36" onClick={handleDesignClick} />
          <MenuItem
            name="About"
            color="blue"
            onClick={() => setActiveComponent("About")}
          />
        </div>

        <div className="main-content">
          {activeComponent === "About" && <About />}
          {activeComponent === "Design" && (
            <Design
              setActiveContent={setActiveDesignContent}
              activeContent={activeDesignContent}
            />
          )}{" "}
        </div>
      </div>
    </div>
  );
}

export default App;
