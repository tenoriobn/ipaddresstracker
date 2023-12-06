import { createGlobalStyle } from "styled-components";
import Theme from "src/theme";

const EstilosGlobais = createGlobalStyle`

body {
  font-family: ${Theme.font.rubik};
	line-height: normal;
  min-height: 100vh;
}

`;

export default EstilosGlobais;