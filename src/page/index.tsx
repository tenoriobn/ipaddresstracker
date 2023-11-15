import { ThemeProvider } from "styled-components";
import theme from "src/theme";

export default function PaginaPadrao() {
  return (
    <ThemeProvider theme={theme}>
      <h2>PaginaPadrao</h2>
    </ThemeProvider>
  )
}
