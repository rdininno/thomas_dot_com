import "./App.css";
import { useState, useEffect } from "react";
import MenuItem from "./components/MenuItem.js";
import About from "./components/About.js";
import Design from "./components/Design.js";

function App() {
  const [activeComponent, setActiveComponent] = useState("");
  const [activeDesignContent, setActiveDesignContent] = useState("");
  const [opacity, setOpacity] = useState(1);
  const [, setFakeScrollY] = useState(0);
  const maxScroll = 300;

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

  const handleDesignClick = () => {
    setActiveComponent("Design");
    setActiveDesignContent("");
  };

  return (
    <div className="App">
      <div
        className="header main-page-image"
        style={{
          opacity,
          pointerEvents: opacity === 0 ? "none" : "auto",
        }}
      >
        <img src="./images/Di_Ninno_LOGO.PNG" alt="header" />
      </div>

      <div className="main-page-content">
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
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
