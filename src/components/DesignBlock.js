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
    padding: "20px",
    margin: "5px",
    border: "none",
    width: "325px",
    height: "325px",
    fontSize: "32px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    overflow: "hidden",
    position: "relative",
  };

  return (
    <button style={buttonStyle} onClick={onClick}>
      {name}
    </button>
  );
}
