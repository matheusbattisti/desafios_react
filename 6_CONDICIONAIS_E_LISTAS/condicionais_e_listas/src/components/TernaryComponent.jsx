import React from "react";

function TernaryComponent({ condition }) {
  return (
    <div>
      {condition ? <p>O estado é verdadeiro!</p> : <p>O estado é falso!</p>}
    </div>
  );
}

export default TernaryComponent;
