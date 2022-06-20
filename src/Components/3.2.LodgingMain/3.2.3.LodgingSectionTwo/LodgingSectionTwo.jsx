import Equipments from "./Equipments/Equipments";
import vectorDown from "../../../assets/chevron_down.png";
import vectorUp from "../../../assets/chevron_up.png";
import "./LodgingSectionTwo.scss";

function LodgingSectionTwo({ description, equipments }) {

  return (
    <section className="container_section2">
      <div className="s2_description">
        <div className="container_title_chevron_desc">
          <p className="description_title">Description</p>
          <img className="chevron_up" src={vectorDown} alt="chevron menu déroulant" />
        </div>
        <p className="description_text">{description}</p>
      </div>
      <div className="s2_equipments">        
        <div className="container_title_chevron_equi">
          <p className="equipments_title">Equipements</p>
          <img className="chevron_up" src={vectorDown} alt="chevron menu déroulant" />
        </div>

        <div className="equipments_container">
          <Equipments key={equipments} equipments={equipments} />
        </div>
      </div>
    </section>
  );
}

export default LodgingSectionTwo;
