import { useState } from "react";
import Modal from "./modal";

export default function ImageGrid({ images }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  if (!images) {
    return null;
  }

  const handleImageClick = (image) => {
    setCurrentImage(image);
    setIsModalOpen(true);
  };

  const getColumnCount = () => {
    if (images.length <= 2) return 1;
    if (images.length <= 4) return 2;
    return 3;
  };

  const gridStyle = {
    columnCount: getColumnCount(),
  };

  return (
    <div>
      <div className="image-grid" style={gridStyle}>
        {images.map((image, index) => (
          <div
            key={index}
            className="image-item"
            onClick={() => handleImageClick(image)}
          >
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <img
          src={currentImage?.src}
          alt={currentImage?.alt}
          style={{ maxWidth: "100%", maxHeight: "80vh" }}
        />
      </Modal>
    </div>
  );
}
