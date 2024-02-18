export default function MenuItem({ name, onClick, color }) {
  const buttonStyle = {
    backgroundColor: color,
  };

  return (
    <button className="menu-item-button" style={buttonStyle} onClick={onClick}>
      {name}
    </button>
  );
}
