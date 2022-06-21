import Equipments from "./Equipments/Equipments";
import chevronDown from "../../../assets/chevron_down.png";
import "../../4.Dropdown/Dropdown.scss";

function LodgingSectionTwo({ description, equipments }) {
  return (
    <section className="section_dropdown">
      <div className="container_dropdown">
        <div className="dropdown_title">
          <p className="title">Description</p>
          <img className="chevron_down chevron" src={chevronDown} alt="chevron menu déroulant" />
        </div>
        <p className="dropdown_content">{description}</p>
      </div>

      <div className="container_dropdown">
        <div className="dropdown_title">
          <p className="title">Equipements</p>
          <img className="chevron_down chevron" src={chevronDown} alt="chevron menu déroulant" />
        </div>
        <ul className="dropdown_content">
          <Equipments key={equipments} equipments={equipments} />
        </ul>
      </div>
    </section>
  );
}

export default LodgingSectionTwo;
