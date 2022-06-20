function Equipments({ equipments }) {
  return (
    <div>
      {equipments.map((equ, index) => (
        <p key={index} className="equipments">{equ}</p>
      ))}
    </div>
  );
}

export default Equipments;
