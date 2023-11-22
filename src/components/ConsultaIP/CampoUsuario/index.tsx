import Theme from "src/theme";
import styled from "styled-components";

const ContainerFormulario = styled.div`
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
  box-sizing: border-box;

  cursor: pointer;

  color: ${Theme.colors.veryDarkGray};
  font-size: 1.125rem;

  padding: 0 0 0 1.5rem;

  outline: none;
  
  height: 58px;
  max-width: 498px;
  width: 100%;
`;

const BotaoPesquisa = styled.button`
  background-color: ${Theme.colors.black};
  border: none;
  border-radius: 0 .875rem .875rem 0;

  cursor: pointer;

  padding: 0;
  outline: none;

  width: 100%;
  max-width: 58px;
  height: 58px;

  &:hover {
    background-color: ${Theme.colors.veryDarkGray};
  }
`

export default function CampoUsuario() {
  return (
    <form>
      <ContainerFormulario>
        <CampoEntrada type="text" placeholder="Search for any IP address or domain" />
        <BotaoPesquisa type="submit">SE</BotaoPesquisa>
      </ContainerFormulario>
    </form>
  )
}
