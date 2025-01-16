import styled from "styled-components";

const Title = styled.h1`
  font-family: "Playfair Display", serif;
  font-size: 3rem;
  text-align: center;
  color: #242424;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`;

export default function MenyTitle() {
  return <Title>MENU</Title>;
}
