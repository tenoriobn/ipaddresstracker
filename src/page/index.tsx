import styled, { ThemeProvider } from "styled-components";
import theme from "src/theme";
import ConsultaIP from "src/components/ConsultaIP";
import MapaVisualizacao from "src/components/MapaVisualizacao";

const Container = styled.div`
  display: grid;
  grid-template-rows: 300px auto;

  min-height: 100vh;

  @media (min-width: 992px) {
    grid-template-rows: 280px auto;
  }
`;

export default function PaginaPadrao() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <ConsultaIP />
        <MapaVisualizacao />
      </Container>
    </ThemeProvider>
  )
}
