import { createGlobalStyle } from "styled-components";
import Theme from "../../theme";

const EstilosGlobais = createGlobalStyle`

body {
  font-family: ${Theme.font.rubik};
	line-height: 1;
  min-height: 100vh;
}

`

export default EstilosGlobais;