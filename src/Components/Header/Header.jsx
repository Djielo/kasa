import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./Header.scss";

function Header() {
  return (
    <div className="wrapperHeader">
      <img className="image" src={logo} alt="Logo du site KASA" />
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/aboutus/">A Propos</Link>
      </nav>
    </div>
  );
}

export default Header;
