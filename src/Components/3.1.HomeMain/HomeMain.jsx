import dataJson from "../../Datas/lodging.json";
import "./HomeMain.scss";
import CardHomeMain from "./3.1.1.CardHomeMain/CardHomeMain";
import "./3.1.1.CardHomeMain/CardHomeMain.scss"

function HomeMain() {
  const detailsJson = dataJson;

  return (
    <div className="homeMain_container">
      <ul className="homeMain_card_list">
        {detailsJson.map(({ id, cover, title }) => (
          <CardHomeMain key={id} cover={cover} title={title} id={id} />
        ))}
      </ul>
    </div>
  );
}

export default HomeMain;
