import styled from "styled-components";
import IconeSeta from "./icon-arrow.svg?react";
import { cor } from "src/common/estilos/CorTema";
import { EstadoEnderecoIP } from "src/common/state/atom";
import { useSetRecoilState } from "recoil";
import usePesquisarIP from "src/common/state/hooks/usePesquisarIP";
// import { useEffect } from "react";

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

const BotaoPesquisa = styled.button`
  background-color: ${cor.preto};
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
    background-color: ${cor.cinzaEscuro};
  }
`

export default function Formulario() {
  const setEnderecoIP = useSetRecoilState(EstadoEnderecoIP);
  const pesquisarIP = usePesquisarIP();

  // useEffect(() => {
  //   pesquisarIP(undefined); // Passando undefined para o evento
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
      <ContainerFormulario onSubmit={pesquisarIP}>
        <CampoEntrada 
          type="text" 
          placeholder="Search for any IP address or domain" 
          onChange={evento => setEnderecoIP(evento.target.value)}
        />
        <BotaoPesquisa 
          type="submit"
        >
          <IconeSeta />
        </BotaoPesquisa>
      </ContainerFormulario>
  )
}

/*
  Observação:
    O Campo de entrada deve ser preenchido automaticamente com o IP do usuário que está acessando o site;
    Ao apagar o `IP` deixando o campo em branco, tem que aparecer a mensagem do placeholder.


    *Aplicar condições de validação*
*/