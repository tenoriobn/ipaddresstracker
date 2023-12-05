import styled from "styled-components";
import IconeSeta from "./icon-arrow.svg?react";
import { cor } from "src/common/EstilosGlobais/cores";
import { estadoEnderecoIP, estadoIPValidado } from "src/common/state/atom/atom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import useValidadorIP from "src/common/state/hooks/useValidadorIP";
import { estiloValidacaoProps } from "src/common/interfaces/IEstiloValidacaoProps";

const ContainerFormulario = styled.form`
  display: flex;
  justify-content: center;

  margin-top: 1.875rem;

  @media (min-width: 768px) {
    margin-top: 1.75rem;
  }
`;

const CampoEntrada = styled.input<estiloValidacaoProps>`
  border: ${(props) => (props.$ipValidado ? `none` : `.0625rem solid ${cor.vermelho}`)};
  border-radius: .875rem 0 0 .875rem;
  box-shadow: -4px 6px 19px -15px ${cor.preto};
  box-sizing: border-box;

  cursor: pointer;

  color: ${cor.cinzaEscuro};
  font-size: 1rem;

  padding: 0 0 0 1rem;

  outline: none;
  
  height: 58px;
  max-width: 498px;
  width: 100%;

  &::placeholder {
    color: ${cor.cinzaMedio};
  }

  @media (min-width: 375px) {
    font-size: 1.125rem;

    padding: 0 0 0 1.5rem;
  }
`;

const BotaoPesquisa = styled.button<estiloValidacaoProps>`
  background-color: ${(props) => (props.$ipValidado ? `${cor.preto}` : `${cor.vermelho}`)};

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
    background-color: ${(props) => (props.$ipValidado ? `${cor.cinzaEscuro}` : `${cor.vermelho}`)};
  }
`

export default function Formulario() {
  const setEnderecoIP = useSetRecoilState(estadoEnderecoIP);
  const validarIP = useValidadorIP();

  const ipValidado = useRecoilValue(estadoIPValidado);

  return (
      <ContainerFormulario onSubmit={validarIP}>
        <CampoEntrada 
          type="text" 
          placeholder="Search for any IP address or domain" 
          onChange={evento => setEnderecoIP(evento.target.value)}
          $ipValidado={ipValidado}
        />
        <BotaoPesquisa 
          type="submit"
          $ipValidado={ipValidado}
        >
          <IconeSeta />
        </BotaoPesquisa>
      </ContainerFormulario>
  )
}