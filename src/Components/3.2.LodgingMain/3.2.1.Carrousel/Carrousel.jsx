import { useState } from "react";
import "./Carrousel.scss";
import chevronLeft from "../../../assets/chevron_left.png";
import chevronRight from "../../../assets/chevron_right.png";

/**
 *
 * @param {Object} props
 * @param {String} cover
 * @param {String} title
 * @returns
 */

function Carrousel({ pictures, title }) {
  let [index, setIndex] = useState(0);

  const Previous = () => {
    if (index === 0) {
      setIndex(pictures.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  const Next = () => {
    if (index === pictures.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  return (
    <div className="container_carrousel">
      <img onClick={Previous} className={pictures.length > 1 ? "chevron chevron_left" : ""} src={chevronLeft} alt="précédent" />
      <img src={pictures[index]} alt={title} className="picture_carrousel" />
      <img onClick={Next} className={pictures.length > 1 ? "chevron chevron_right" : ""} src={chevronRight} alt="suivant" />
    </div>
  );
}

export default Carrousel;
