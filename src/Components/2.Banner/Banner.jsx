import "./Banner.scss";
import homeBanner from "../../assets/homeBanner.png";
import aboutBanner from "../../assets/aboutBanner.png";
import { useLocation } from "react-router-dom";

/**
 *
 * @param {Object} props
 * @param {String} props.text
 * @param {("darken")} [props.customStyle]
 * @returns
 */

function Banner({ text, customStyle = "" }) {
  const AboutBanner = () => {
    return <img className="image" src={aboutBanner} alt="Page 'A propos' !" />;
  };
  const HomeBanner = () => {
    return <img className="image" src={homeBanner} alt="Page d'accueil !" />;
  };
  
  const currentUrl = useLocation();

  return (
    <div className="banner">
      <h1 className="h1">{text}</h1>
      <div className={customStyle}>
        {currentUrl.pathname.includes("/aboutus/") ? AboutBanner() : HomeBanner()}
      </div>
    </div>
  );
}

export default Banner;
