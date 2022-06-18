import { Link } from "react-router-dom";
// import React from "react";
import "./Card.scss";

function Card({ id, title, cover }) {
  const destination = "/lodging/" + id;
  console.log(title[0]);
  console.log(id);

  return (
    <li key={id} className="card_item">
      <Link to={destination} className="card_item_superpose">
        <img className="card_item_cover" src={cover} alt={title} />
        <p className="card_item_title">{title}</p>
      </Link>
    </li>
  );
}

export default Card;
