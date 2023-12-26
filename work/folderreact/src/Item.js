import { useState } from "react";

const EmptyItem = () => (
  <button className="menu-item is-empty">- Empty -</button>
);

const Item = ({ item }) => {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <div>
      <button
        className="menu-item"
        onClick={() => item.children && setIsOpened(!isOpened)}
      >
        {item.children && (isOpened ? "🔽 " : "▶️ ")}
        {item.name}
      </button>
      {item.children && (
        <div className={`sub-menu ${isOpened ? "" : "sub-menu--shrunk"}  `}>
          {item.children.length ? (
            item.children.map((subitem) => <Item item={subitem} />)
          ) : (
            <EmptyItem />
          )}
        </div>
      )}
    </div>
  );
};
export default Item;
