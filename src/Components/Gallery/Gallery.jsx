import requestJson from "../../Datas/lodging.json";
import Card from "../Card/Card";
import "./Gallery.scss"
import "../Card/Card.scss"

function Gallery() {
  const displayJson = requestJson;
  return (
    <div className="gallery_container">
      <ul className="gallery_card_list">
        {displayJson.map(({ id, cover, title }) => (
          <Card key={id} cover={cover} title={title} />
        ))}
      </ul>
    </div>
  );
}

export default Gallery;
