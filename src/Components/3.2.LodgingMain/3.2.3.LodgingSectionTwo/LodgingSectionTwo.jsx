import Equipments from "./Equipments/Equipments";
import "./LodgingSectionTwo.scss";


function LodgingSectionTwo({description, equipments}) {
  return (
    <section className="container_section2">
      <div className="s2_description">
        <p className="description_title">Description</p>
        <p className="description_text">
          {description}
        </p>
      </div>
      <div className="s2_equipments">
          <p className="equipments_title">Equipements</p>
          <div className="equipments_container">
          <Equipments key={equipments} equipments={equipments} />
          </div>
      </div>
    </section>
  );
}

export default LodgingSectionTwo;
