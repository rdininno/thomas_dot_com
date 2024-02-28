import MenuItem from "./MenuItem";

export default function Menu({ setActiveComponent }) {
  return (
    <div className="menu">
      <MenuItem
        name="Design"
        color1="#009246"
        color2="#FFFFFF"
        onClick={() => setActiveComponent("Design")}
      />
      <MenuItem
        name="About"
        color1="#FFFFFF"
        color2="#D52B1E"
        onClick={() => setActiveComponent("About")}
      />
    </div>
  );
}
