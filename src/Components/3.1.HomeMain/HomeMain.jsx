import dataJson from "../../Datas/lodging.json";
import "./HomeMain.scss";
import Card from "./3.1.1.Card/Card";
import "./3.1.1.Card/Card.scss";

function HomeMain() {
  const detailsJson = dataJson;

  return (
    <div className="homeMain_container">
      <ul className="homeMain_card_list">
        {detailsJson.map(({ id, cover, title }) => (
          <Card key={id} cover={cover} title={title} id={id} />
        ))}
      </ul>
    </div>
  );
}

export default HomeMain;
