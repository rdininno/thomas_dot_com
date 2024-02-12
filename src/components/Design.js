import { useState } from "react";

import MenuItem from "./MenuItem.js";
import imageData from "../data/imageData.js";
import ImageGrid from "./ImageGrid.js";

export default function Design() {
  const [activeContent, setActiveContent] = useState("");

  // Adjust the div classes based on whether content is active
  const containerClass = activeContent
    ? "split-screen"
    : "design-menu-centered";
  const menuClass = activeContent ? "design-menu" : "";

  const handleSetActiveContent = (contentName) => {
    setActiveContent(contentName);
  };

  return (
    <div class={containerClass}>
      <div class={menuClass}>
        <MenuItem
          name="Freak Heat Waves"
          color="green"
          onClick={() => handleSetActiveContent("Freak Heat Waves")}
        />
        <MenuItem
          name="Homeshake"
          color="orange"
          onClick={() => handleSetActiveContent("Homeshake")}
        />
        <MenuItem name="Posters" color="light-grey" />
      </div>

      <div className="design-content">
        <ImageGrid images={imageData[activeContent]} />
      </div>
    </div>
  );
}
