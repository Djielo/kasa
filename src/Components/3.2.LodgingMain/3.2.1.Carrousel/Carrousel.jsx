import { useLocation } from "react-router-dom";
import "./Carrousel.scss";

/**
 *
 * @param {Object} props
 * @param {String} cover
 * @param {String} title
 * @returns
 */

function Carrousel({ cover, id, title }) {
  const PicturesLodgingMain = () => {
    return <img src={cover} alt={title} className="container_carrousel" />;
  };
  const CurrentUrl = useLocation();

  return <div>{CurrentUrl.pathname.includes("/lodging/" + id) ? PicturesLodgingMain() : null}</div>;
}

export default Carrousel;
