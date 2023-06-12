import React, { useState } from "react";

const MultiSelectList = () => {
  const [items, setItems] = useState([
    { id: 123, name: "Item 1", isSelected: false },
    { id: 431, name: "Item 2", isSelected: false },
    { id: 555, name: "Item 3", isSelected: false },
    // Add more items here...
  ]);

  const handleItemClick = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, isSelected: !item.isSelected } : item
      )
    );
  };

  const handleSelectAll = () => {
    setItems(items.map((item) => ({ ...item, isSelected: true })));
  };

  const handleDeselectAll = () => {
    setItems(items.map((item) => ({ ...item, isSelected: false })));
  };

  const selectedItemsCount = items.filter((item) => item.isSelected).length;

  return (
    <div>
      <button onClick={handleSelectAll}>Selecionar Todos</button>
      <button onClick={handleDeselectAll}>Desmarcar Todos</button>
      <p>{selectedItemsCount} item(s) selecionado(s)</p>
      <ul>
        {items.map((item) => (
          <li
            key={item.id}
            style={{ background: item.isSelected ? "lightgreen" : "none" }}
            onClick={() => handleItemClick(item.id)}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MultiSelectList;
