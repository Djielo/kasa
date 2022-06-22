import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./Header.scss";

function Header() {
  return (
    <div className="wrapperHeader">
      <img className="logo" src={logo} alt="Logo du site KASA" />
      <nav>
        <NavLink to="/home" className={(isActive) => "active_link" + (!isActive ? " unselected" : "")}>
          Accueil
        </NavLink>

        <NavLink to="/aboutus" className={(isActive) => "active_link" + (!isActive ? " unselected" : "")}>
          A Propos
        </NavLink>
      </nav>
    </div>
  );
}

export default Header;
