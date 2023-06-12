import React from "react";

function NestedListComponent() {
  const list = [
    ["Item 1.1", "Item 1.2", "Item 1.3"],
    ["Item 2.1", "Item 2.2", "Item 2.3"],
    ["Item 3.1", "Item 3.2", "Item 3.3"],
  ];

  return (
    <ul>
      {list.map((subList, index) => (
        <li key={index}>
          <ul>
            {subList.map((item, subIndex) => (
              <li key={subIndex}>{item}</li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}

export default NestedListComponent;
