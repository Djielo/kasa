import { useLocation } from "react-router-dom";
import "../3.2.1.LodgingCarrousel/LodgingCarrousel.scss"

/**
 *
 * @param {Object} props
 * @param {String} cover
 * @param {String} title
 * @returns
 */

function LodgingCarrousel({ cover, id, title }) {
  const PicturesLodgingMain = () => {
    return <img src={cover} alt={title} className="container_carrousel" />;
  };
  const CurrentUrl = useLocation();

  return <div>{CurrentUrl.pathname.includes("/lodging/" + id) ? PicturesLodgingMain() : null}</div>;
}

export default LodgingCarrousel;
