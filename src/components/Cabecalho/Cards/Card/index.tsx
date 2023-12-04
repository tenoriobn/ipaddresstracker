import { useRecoilValue } from "recoil";
import { cor } from "src/common/EstilosGlobais/cores";
import { estadoDadosIP } from "src/common/state/atom/atom";
import styled from "styled-components";

const Article = styled.article`
  box-sizing: border-box;
  text-align: center;
  position: relative;

  @media (min-width: 992px) {
    text-align: left;
    padding: 0 2rem;

    max-width: 278px;
    width: 100%;

    &::after {
      content: "";

      border-right: 1px solid ${cor.cinzaMedio};

      position: absolute;
      top: 50%;
      right: 0;
      transform: translateY(-50%);

      height: 90%;
    }

    &:last-child::after {
      display: none;
    }
  }

  @media (min-width: 1200px) {
    padding: 0 3.25rem 0 2rem;
  }
`;

const Titulo = styled.h2`
  color: ${cor.cinzaMedio};
  font-size: .625rem;
  font-weight: 500;
  letter-spacing: .1062rem;
  line-height: normal;
  text-transform: uppercase;

  margin-bottom: .5rem;

  @media (min-width: 992px) {
    font-size: .75rem;
    letter-spacing: .1275rem;
    margin-bottom: .75rem;
  }
`

const Informacao = styled.h3`
  color: ${cor.cinzaEscuro};
  font-size: 1.25rem;
  font-weight: 500;
  line-height: normal;

  @media (min-width: 992px) {
    font-size: 1.625rem;
    letter-spacing: -0.0163rem;
  }
`

export default function Card() {
  const dadosIP = useRecoilValue(estadoDadosIP);

  return (
    <>
      {dadosIP.map((dado) => (
        <Article key={dado.key}>
          <Titulo>{dado.titulo}</Titulo>
          <Informacao>{dado.informacao}</Informacao>
        </Article>
      ))}
    </>
  )
}