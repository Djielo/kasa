import React from "react";
import { useLocation } from "react-router-dom";
import dataJson from "../../Datas/lodging.json";
import LodgingDataArray from "./3.2.0.LodgingDataArray/LodgingDataArray";
import LodgingCarrousel from "./3.2.1.LodgingCarrousel/LodgingCarrousel";
import LodgingSectionOne from "./3.2.2.LodgingSectionOne/LodgingSectionOne";
import LodgingSectionTwo from "./3.2.3.LodgingSectionTwo/LodgingSectionTwo";

function LodgingMain() {
  const CurrentUrl = useLocation();
  const currentLodging = [...dataJson].filter((data) => data.id === CurrentUrl.pathname.split("/")[2])[0];

  return (
    <article>
      <React.Fragment>
        <LodgingCarrousel id={currentLodging.id} cover={currentLodging.cover}  />
        <LodgingSectionOne id={currentLodging.id} title={currentLodging.title} location={currentLodging.location} tags={currentLodging.tags} host={currentLodging.host} rating={currentLodging.rating} />
        <LodgingSectionTwo id={currentLodging.id} description={currentLodging.description} equipments={currentLodging.equipments} />
      </React.Fragment>
    </article>
  );
}

export default LodgingMain;
