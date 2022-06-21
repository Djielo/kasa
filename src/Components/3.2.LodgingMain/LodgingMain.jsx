import React from "react";
import { useLocation } from "react-router-dom";
import dataJson from "../../Datas/lodging.json";
import Carrousel from "./3.2.1.Carrousel/Carrousel";
import LodgingSectionOne from "./3.2.2.LodgingSectionOne/LodgingSectionOne";
import LodgingSectionTwo from "./3.2.3.LodgingSectionTwo/LodgingSectionTwo";

function LodgingMain() {
  const currentUrl = useLocation();
  const currentIdLodging = [...dataJson].filter((data) => data.id === currentUrl.pathname.split("/")[2])[0];

  return (
    <article>
      <React.Fragment>
        <Carrousel id={currentIdLodging.id} pictures={currentIdLodging.pictures} title={currentIdLodging.title} />
        <LodgingSectionOne
          id={currentIdLodging.id}
          title={currentIdLodging.title}
          location={currentIdLodging.location}
          tags={currentIdLodging.tags}
          host={currentIdLodging.host}
          rating={currentIdLodging.rating}
        />
        <LodgingSectionTwo id={currentIdLodging.id} description={currentIdLodging.description} equipments={currentIdLodging.equipments} />
      </React.Fragment>
    </article>
  );
}

export default LodgingMain;
