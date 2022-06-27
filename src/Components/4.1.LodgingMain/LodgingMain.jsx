import React from "react";
import { useLocation, Redirect } from "react-router-dom";
import dataJson from "../../Datas/lodging.json";
import Carrousel from "../4.2.Carrousel/Carrousel";
import LodgingSectionOne from "../4.3.LodgingSectionOne/LodgingSectionOne";
import LodgingSectionTwo from "../4.6.LodgingSectionTwo/LodgingSectionTwo";

function LodgingMain() {
  const currentUrl = useLocation();
  const currentIdLodging = [...dataJson].filter((data) => data.id === currentUrl.pathname.split("/lodging/")[1])[0];

  return currentIdLodging === undefined ? (
    <Redirect to= "/kasa/error/" />
  ) : (
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
