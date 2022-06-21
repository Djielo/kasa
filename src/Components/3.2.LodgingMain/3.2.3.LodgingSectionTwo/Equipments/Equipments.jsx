function Equipments({ equipments }) {
  return (
    <div>
      {equipments.map((equ, index) => (
        <li key={index} className="equipments">{equ}</li>
      ))}
    </div>
  );
}

export default Equipments;
