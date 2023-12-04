import styled, { ThemeProvider } from "styled-components";
import theme from "src/theme";
import Cabecalho from "src/components/Cabecalho";
import Mapa from "src/components/Mapa";
import useObterIPVisitante from "src/common/state/hooks/useObterIPVisitante";
// import usePesquisarIP from "src/common/state/hooks/usePesquisarIP";
// import { useEffect } from "react";

const Container = styled.div`
  display: grid;
  grid-template-rows: 300px auto;

  min-height: 100vh;

  @media (min-width: 992px) {
    grid-template-rows: 280px auto;
  }
`;

export default function PaginaPadrao() {
  useObterIPVisitante();
  
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Cabecalho />
        <Mapa />
      </Container>
    </ThemeProvider>
  )
}
