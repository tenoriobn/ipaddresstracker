import { cor } from "src/common/EstilosGlobais/cores";
import styled from "styled-components";
import Card from "./Card";

const ContainerCards = styled.section`
  align-self: center;

  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 1.5rem;

  background-color: ${cor.branco};
  border-radius: .875rem;

  margin-top: 1.5rem;
  padding: 1.625rem 0;

  position: relative;

  max-width: 556px;
  width: 100%;

  z-index: 2;

  @media (min-width: 992px) {
    flex-direction: row;
    gap: 0px;

    margin-top: 3rem;
    padding: 2.375rem 0;

    max-width: 1110px;
  }
`;

export default function Cards() {
  return (
    <ContainerCards>
      <Card />
    </ContainerCards>
  );
}
