import "./Card.scss";

function Card({ id, title, cover }) {
  return (
    <li key={id} className="card_item">
      <img className="card_item_cover" src={cover} alt={title} />
      <p className="card_item_title">{title}</p>
    </li>
  );
}

export default Card;
