export default function DesignBlock({
  name,
  onClick,
  color,
  backgroundImage,
  fontColor,
}) {
  const buttonStyle = {
    backgroundColor: color,
    color: fontColor,
    backgroundImage: `url(${backgroundImage})`,
  };

  return (
    <button className="button-style" style={buttonStyle} onClick={onClick}>
      {name}
    </button>
  );
}
