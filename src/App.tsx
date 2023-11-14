import { ThemeProvider } from "styled-components";
import PaginaPadrao from "./page";
import Theme from "./theme";
import EstilosGlobais from "./common/EstilosGlobais";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <EstilosGlobais />
      <PaginaPadrao />
    </ThemeProvider>
  )
}

export default App
