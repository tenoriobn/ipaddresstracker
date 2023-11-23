import styled from "styled-components";
import IconeSeta from "./icon-arrow.svg?react";
import { cor } from "src/common/estilos/CorTema";

const ContainerFormulario = styled.form`
  display: flex;
  justify-content: center;

  margin-top: 1.875rem;

  @media (min-width: 768px) {
    margin-top: 1.75rem;
  }
`

const CampoEntrada = styled.input`
  border: none;
  border-radius: .875rem 0 0 .875rem;
  box-shadow: -4px 6px 19px -15px ${cor.black};
  box-sizing: border-box;

  cursor: pointer;

  color: ${cor.veryDarkGray};
  font-size: 1rem;

  padding: 0 0 0 1rem;

  outline: none;
  
  height: 58px;
  max-width: 498px;
  width: 100%;

  &::placeholder {
    color: ${cor.darkGray};
  }

  @media (min-width: 375px) {
    font-size: 1.125rem;

    padding: 0 0 0 1.5rem;
  }
`;

const BotaoPesquisa = styled.button`
  background-color: ${cor.black};
  border: none;
  border-radius: 0 .875rem .875rem 0;

  cursor: pointer;

  padding: 0;
  outline: none;

  width: 100%;
  max-width: 58px;
  height: 58px;

  transition: background-color .25s ease-in-out;

  &:hover {
    background-color: ${cor.veryDarkGray};
  }
`

export default function Formulario() {
  return (

      <ContainerFormulario>
        <CampoEntrada type="text" placeholder="Search for any IP address or domain" />
        <BotaoPesquisa type="submit">
          <IconeSeta />
        </BotaoPesquisa>
      </ContainerFormulario>

  )
}
