import styled from "styled-components";
import fundoDesktop from "./backgroundDesktop.png";
import fundoMobile from "./backgroundMobile.png";
import Formulario from "./Formulario";
import { cor } from "src/common/EstilosGlobais/cores";
import Cards from "./Cards";

const ContainerCabecalho = styled.header`
  display: flex;
  flex-direction: column;

  background-image: url(${fundoMobile});
  background-size: cover;
  background-repeat: no-repeat;

  box-sizing: border-box;

  padding: 0 1rem;

  @media (min-width: 375px) {
    padding: 0 1.5rem;
  }

  @media (min-width: 768px) {
    background-image: url(${fundoDesktop});
  }
`;

const Titulo = styled.h2`
  color: ${cor.branco};
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: .015rem;
  text-align: center;

  margin-top: 1.75rem;

  @media (min-width: 768px) {
    font-size: 2rem;
    letter-spacing: -0.06rem;
  }
`;

export default function Cabecalho() {
  return (
    <ContainerCabecalho>
      <Titulo>IP Address Tracker</Titulo>
      <Formulario />
      <Cards />
    </ContainerCabecalho>
  );
}
