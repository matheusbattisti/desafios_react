import React from "react";
import "./Card.scss";

const Card = ({ title, body }) => (
  <div className="card">
    <div className="card-header">{title}</div>
    <div className="card-body">{body}</div>
  </div>
);

export default Card;
