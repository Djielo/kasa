import logo from "../../assets/logo_footer.png";
import "./Footer.scss";

function Footer() {
  return <div className="footer">
    <img className="logo_footer" src={logo} alt="Logo du site KASA" />
    <p>© 2020 Kasa. All rights reserved</p>
  </div>;
}

export default Footer;
