import { ThemeProvider } from "styled-components";
import PaginaPadrao from "./page";
import Theme from "./theme";
import EstilosGlobais from "./common/EstilosGlobais";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <RecoilRoot>
        <EstilosGlobais />
        <PaginaPadrao />
      </RecoilRoot>
    </ThemeProvider>
  )
}

export default App
