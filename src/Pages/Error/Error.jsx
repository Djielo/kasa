import styled from "styled-components"

const Paragraphe = styled.div`
  font-size: 24px;
`;

function Error() {
  return (
    <div>
        <Paragraphe>Je suis la page 404</Paragraphe>
    </div>
  );
}

export default Error;