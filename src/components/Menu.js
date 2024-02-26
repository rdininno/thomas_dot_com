import MenuItem from "./MenuItem";

export default function Menu({ setActiveComponent }) {
  return (
    <div className="menu">
      <MenuItem
        name="Design"
        color="#2ebe36"
        onClick={() => setActiveComponent("Design")}
      />
      <MenuItem
        name="About"
        color="blue"
        onClick={() => setActiveComponent("About")}
      />
    </div>
  );
}
