import Item from "./Item";

const Menu = ({ items }) => {
  return (
    <div className="wrapper">
      <h3>Menu</h3>
      {items.children.map((item) => (
        <Item item={item} />
      ))}
    </div>
  );
};

export default Menu;
