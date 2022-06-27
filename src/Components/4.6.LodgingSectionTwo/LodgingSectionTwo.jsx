import Dropdown from "../6.Dropdown/Dropdown";

function LodgingSectionTwo({ description, equipments }) {
  return (
    <section className="section_dropdown">
      <Dropdown title="Description" contents={description} />
      <Dropdown title="Equipements" contents={equipments} />
    </section>
  );
}

export default LodgingSectionTwo;
