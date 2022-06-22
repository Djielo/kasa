import { Link, NavLink } from "react-router-dom";
import "./Card.scss";

function Card({ id, title, cover }) {
  const destination = "/lodging/" + id;

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
