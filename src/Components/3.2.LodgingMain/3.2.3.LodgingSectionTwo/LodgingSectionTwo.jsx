import Dropdown from "../../4.Dropdown/Dropdown";

function LodgingSectionTwo({ description, equipments }) {
  return (
    <section className="section_dropdown">
      <Dropdown titre="Description" content={description} />
      <Dropdown titre="Equipements" content={equipments} />
    </section>
  );
}

export default LodgingSectionTwo;
