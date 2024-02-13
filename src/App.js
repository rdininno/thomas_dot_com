import "./App.css";
import { useState } from "react";
import Header from "./components/Header.js";
import MenuItem from "./components/MenuItem.js";
import About from "./components/About.js";
import Music from "./components/Music.js";
import Design from "./components/Design.js";

function App() {
  const [activeComponent, setActiveComponent] = useState("");

  const imageStyle = {
    maxWidth: "100%",
    maxHeight: "auto",
  };

  return (
    <div className="App">
      <Header />
      <div className="main-page">
        <div className="menu">
          <MenuItem
            name="Design"
            color="yellow"
            onClick={() => setActiveComponent("Design")}
          />
          <MenuItem
            name="Music"
            color="red"
            onClick={() => setActiveComponent("Music")}
          />
          <MenuItem
            name="About"
            color="blue"
            onClick={() => setActiveComponent("About")}
          />
        </div>

        <div className="main-content">
          {activeComponent === "About" && <About />}
          {activeComponent === "Design" && <Design />}
          {activeComponent === "Music" && <Music />}
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
