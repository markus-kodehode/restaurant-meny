import styled from "styled-components";

const DishCard = styled.div`
  background: white;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const DishTitle = styled.h2`
  font-size: 1.4rem;
  color: #333;
  margin: 10px 0;
`;

const DishPrice = styled.h3`
  font-size: 1.2rem;
  color: #e67e22;
  margin: 5px 0;
`;

const DishDetails = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin: 5px 0;
`;

const DishCategory = styled.p`
  font-weight: bold;
  color: #2c3e50;
`;

export default function MenyCard({
  data: { tittel, pris, ingredienser, kategori },
}) {
  return (
    <DishCard>
      <DishTitle>{tittel}</DishTitle>
      <DishPrice>{pris}</DishPrice>
      <DishDetails>{ingredienser}</DishDetails>
      <DishCategory>{kategori}</DishCategory>
    </DishCard>
  );
}
