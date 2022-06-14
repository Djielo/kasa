import dataJson from "../../Datas/lodging.json";
import Card from "../4.Card/Card";
import "./Gallery.scss";
import "../4.Card/Card.scss";

function Gallery() {
  const detailsJson = dataJson;

  return (
    <div className="gallery_container">
      <ul className="gallery_card_list">
        {detailsJson.map(({ id, cover, title }) => (
          <Card key={id} cover={cover} title={title} id={id}/>
        ))}
      </ul>
    </div>
  );
}

export default Gallery;
