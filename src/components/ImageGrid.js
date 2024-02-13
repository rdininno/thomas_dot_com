export default function ImageGrid({ images }) {
  if (!images) {
    return null;
  }

  const getColumnCount = () => {
    if (images.length <= 4) return 2;
    return 3;
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
