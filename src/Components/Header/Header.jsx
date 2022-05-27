import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import styled from "styled-components";
import colors from "../../Utils/styles/colors";

const StyledLink = styled(Link)`
  color: ${colors.primary};
`;

const WrapperHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;
const Image = styled.img`
  width: 150px;
`;

function Header() {
  return (
    <WrapperHeader>
      <Image src={logo} alt="Logo du site KASA" />
      <nav>
        <StyledLink to="/">Accueil</StyledLink>
        <StyledLink to="/Lodging/">Logements</StyledLink>
        <StyledLink to="/AboutUs/">A propos</StyledLink>
      </nav>
    </WrapperHeader>
  );
}

export default Header;
