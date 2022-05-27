import styled from "styled-components";

const WrapperHeader = styled.div`
  margin: 30px 80px;
`;

const Image = styled.img`
  width: 100%;
  height: 223px;
`;

function Home() {
  return (
    <WrapperHeader>
      <Image src="" alt="Emplacement de l'image de logement !" />
    </WrapperHeader>
  );
}

export default Home;
