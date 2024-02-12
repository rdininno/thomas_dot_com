export default function MenuItem({ name, onClick, color }) {
  const buttonStyle = {
    backgroundColor: color,
    color: "black",
    padding: "20px",
    margin: "5px",
    border: "none",
    width: "100px",
    height: "100px",
    fontSize: "16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <button style={buttonStyle} onClick={onClick}>
      {name}
    </button>
  );
}
