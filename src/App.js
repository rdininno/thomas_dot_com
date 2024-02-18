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

  const resetComponentClick = () => {
    setActiveComponent("");
  };

  const imageStyle = {
    maxWidth: "100%",
    maxHeight: "auto",
  };

  return (
    <div className="App">
      <div className="main-page">
        <header>
          <div className="header-left" onClick={resetComponentClick}>
            <div className="logo">
              <img src="./images/thomas-logo.png" alt="Thomas Logo"></img>
            </div>
            <div className="title monoton-regular">Thomas Dot Com</div>
          </div>
          <div className="menu">
            <MenuItem
              name="Design"
              color="yellow"
              onClick={handleDesignClick}
            />
            <MenuItem
              name="About"
              color="blue"
              onClick={() => setActiveComponent("About")}
            />
          </div>
        </header>

        <div className="main-content">
          {activeComponent === "About" && <About />}
          {activeComponent === "Design" && (
            <Design
              setActiveContent={setActiveDesignContent}
              activeContent={activeDesignContent}
            />
          )}{" "}
          {activeComponent === "" && (
            <div>
              <img
                src="./images/Freak_Heat_Waves.jpg"
                alt="Freak Heat Waves"
                style={imageStyle}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
