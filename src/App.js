import "./App.css";
import { useState, useEffect } from "react";
import Menu from "./components/Menu.js";
import About from "./components/About.js";
import Design from "./components/Design.js";

import backgroundImage from "./components/assets/images/White1.jpg";

function App() {
  const [activeComponent, setActiveComponent] = useState("");
  const [activeDesignContent, setActiveDesignContent] = useState("");
  const [opacity, setOpacity] = useState(1);
  const [, setFakeScrollY] = useState(0);
  const maxScroll = 400;

  useEffect(() => {
    const handleWheel = (e) => {
      if (opacity > 0) {
        e.preventDefault();
        const deltaY = e.deltaY;
        setFakeScrollY((prev) => {
          const newScrollY = Math.max(0, prev + deltaY);
          const newOpacity = 1 - newScrollY / maxScroll;
          setOpacity(Math.max(0, newOpacity));
          return newScrollY;
        });
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [opacity]);

  useEffect(() => {
    if (opacity <= 0) {
      document.body.style.overflow = "visible";
    } else {
      document.body.style.overflow = "hidden";
    }
  }, [opacity]);

  return (
    <div className="App" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div
        className="header main-page-image"
        style={{
          opacity,
          pointerEvents: opacity === 0 ? "none" : "auto",
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <img src="./images/Di_Ninno_LOGO.PNG" alt="header" />
      </div>

      <div className="main-page-content">
        {activeComponent === "" && (
          <Menu setActiveComponent={setActiveComponent} />
        )}

        <div className="main-content">
          {activeComponent && (
            <button
              className="menu-button"
              onClick={() => setActiveComponent("")}
            >
              <img src="./images/Di_Ninno_LOGO.PNG" alt="menu-button" />
            </button>
          )}
          {activeComponent === "About" && <About />}
          {activeComponent === "Design" && (
            <Design
              setActiveContent={setActiveDesignContent}
              activeContent={activeDesignContent}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
