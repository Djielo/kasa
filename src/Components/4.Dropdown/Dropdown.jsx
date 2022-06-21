import { useState } from "react";
import chevronDown from "../../assets/chevron_down.png";
import chevronUp from "../../assets/chevron_up.png";

function Dropdown({ titre, content }) {
  if (content && typeof content !== "string") {
    content = content.map((elm, index) => {
      return <li key={index}>{elm}</li>;
    });
  }

  const [unfolded, setUnfolded] = useState(false);

  function ChangeFolded() {
    setUnfolded(!unfolded);
  }

  function Contenu() {
    return <p className="dropdown_content">{content}</p>;
  }
  const chevron = unfolded ? chevronDown : chevronUp;
  return (
    <div className="container_dropdown">
      <div className="dropdown_title" onClick={ChangeFolded}>
        <p className="title">{titre}</p>
        <img className="chevron_down chevron" src={chevron} alt="chevron menu déroulant" />
      </div>
      {unfolded && Contenu()}
    </div>
  );
}
export default Dropdown;
