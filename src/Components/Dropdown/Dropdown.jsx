import { useState } from "react";
import chevronDown from "../../assets/chevron_down.png";
import chevronUp from "../../assets/chevron_up.png";

function Dropdown({ title, contents }) {
  if (contents && typeof contents !== "string") {
    contents = contents.map((elm, index) => {
      return <li key={index}>{elm}</li>;
    });
  }

  const [unfolded, setUnfolded] = useState(false);

  function ChangeFolded() {
    setUnfolded(!unfolded);
  }

  function Contents() {
    return <p className="dropdown_content">{contents}</p>;
  }
  const chevron = unfolded ? chevronDown : chevronUp;
  return (
    <div className="container_dropdown">
      <div className="dropdown_title" onClick={ChangeFolded}>
        <p className="title">{title}</p>
        <img className="chevron_down chevron" src={chevron} alt="chevron menu déroulant" />
      </div>
      {unfolded && Contents()}
    </div>
  );
}
export default Dropdown;
