import { useState } from "react";

import DesignBlock from "./DesignBlock.js";
import imageData from "../data/imageData.js";
import ImageGrid from "./ImageGrid.js";

export default function Design() {
  const [activeContent, setActiveContent] = useState("");

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
        <DesignBlock
          name="Freak Heat Waves - Mondo Tempo"
          backgroundImage="./images/mondo_tempo/IMG_0225.jpeg"
          fontColor="white"
          onClick={() =>
            handleSetActiveContent("Freak Heat Waves - Mondo Tempo")
          }
        />
        <DesignBlock
          name="Homeshake - CD Wallet"
          backgroundImage="./images/cd_wallet/CD_Wallet_Cover.JPEG"
          fontColor="red"
          onClick={() => handleSetActiveContent("Homeshake - CD Wallet")}
        />
        <DesignBlock
          name="Freak Heat Waves - Zap The Planet"
          backgroundImage="./images/zap_the_planet/IMG_4594.JPG"
          fontColor="black"
          onClick={() =>
            handleSetActiveContent("Freak Heat Waves - Zap The Planet")
          }
        />
        <DesignBlock
          name="Posters"
          fontColor="blue"
          backgroundImage="./images/posters/IMG_1938.jpeg"
          onClick={() => handleSetActiveContent("Posters")}
        />
      </div>

      <div className="design-content">
        <ImageGrid images={imageData[activeContent]} />
      </div>
    </div>
  );
}
