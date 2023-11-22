import styled from "styled-components";
import fundoDesktop from "./backgroundDesktop.png";
import fundoMobile from "./backgroundMobile.png";
import Theme from "src/theme";
import CampoUsuario from "./CampoUsuario";

const ContainerCabecalho = styled.header`
  box-sizing: border-box;

  background-image: url(${fundoMobile});
  background-size: cover;
  background-repeat: no-repeat;

  padding: 0 1rem;

  @media (min-width: 375px) {
    padding: 0 1.5rem;
  }

  @media (min-width: 768px) {
    background-image: url(${fundoDesktop});
  }
`;

const Titulo = styled.h2`
  color: ${Theme.colors.white};
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: .015rem;
  text-align: center;

  margin-top: 1.75rem;

  @media (min-width: 768px) {
    font-size: 2rem;
    letter-spacing: -0.06rem;
  }
`

export default function ConsultaIP() {
  return (
    <ContainerCabecalho>
      <Titulo>IP Address Tracker</Titulo>
      <CampoUsuario />
    </ContainerCabecalho>
  )
}
