export default function ImageGrid({ images }) {
  if (!images) {
    return null;
  }

  const getColumnCount = () => {
    if (images.length <= 4) return 2;
    if (images.length <= 6) return 3;
    return 4; // Default to 4 columns for more than 6 images
  };

  const gridStyle = {
    columnCount: getColumnCount(),
  };

  return (
    <div className="image-grid" style={gridStyle}>
      {images.map((image, index) => (
        <div key={index} className="image-item">
          <img src={image.src} alt={image.alt} />
        </div>
      ))}
    </div>
  );
}
