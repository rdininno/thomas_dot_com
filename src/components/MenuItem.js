export default function MenuItem({ name, onClick, color1, color2 }) {
  const buttonStyle = {
    backgroundImage: `linear-gradient(to right, ${color1} 50%, ${color2} 50%)`,
  };

  return (
    <button className="menu-item-button" style={buttonStyle} onClick={onClick}>
      {name}
    </button>
  );
}
