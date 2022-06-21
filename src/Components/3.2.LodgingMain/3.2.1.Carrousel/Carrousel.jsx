import { useState } from "react";
import "./Carrousel.scss";
import chevronLeft from "../../../assets/chevron_left.png";
import chevronRight from "../../../assets/chevron_right.png";

/**
 *
 * @param {Object} props
 * @param {String} cover
 * @param {String} title
 * @param {Event} e
 * @returns
 */

function Carrousel({ pictures, title }) {
  let [index, setIndex] = useState(0);

  const Previous = (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (index === 0) {
      return setIndex(pictures.length - 1);
    }
    if (index > 0) {
      return setIndex(index--);
    }
    if (pictures.length === 1) {
      return setIndex(0);
    }
  };

  const Next = (e) => {
    if (index === pictures.length) {
      return setIndex(0);
    }
    if (index < pictures.length) {
      return setIndex(index++);
    }
    if (pictures.length === 1) {
      return setIndex(0);
    }
  };

  return (
    <div className="container_carrousel">
      <img onClick={Previous} className="chevron chevron_left" src={chevronLeft} alt="précédent" />
      <img src={pictures[index]} alt={title} className="picture_carrousel" />
      <img onClick={Next} className="chevron chevron_right" src={chevronRight} alt="suivant" />
    </div>
  );
}

export default Carrousel;
