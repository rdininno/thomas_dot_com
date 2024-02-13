export default function DesignBlock({ name, onClick, color, backgroundImage }) {
  const buttonStyle = {
    backgroundColor: color,
    color: "black",
    padding: "20px",
    margin: "5px",
    border: "none",
    width: "100%",
    height: "100%",
    fontSize: "16px",
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
