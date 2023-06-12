import React from "react";

function SwitchCaseComponent({ value }) {
  let component;
  switch (value) {
    case "1":
      component = <div>Componente 1</div>;
      break;
    case "2":
      component = <div>Componente 2</div>;
      break;
    default:
      component = <div>Componente Padrão</div>;
  }

  return component;
}

export default SwitchCaseComponent;
