import styled from "styled-components";
import mapa from "./prototipodomapa.png";

const Conteudo = styled.main`
  background-image: url(${mapa});
`

export default function Mapa() {
  return (
    <Conteudo>
      <>.</>
    </Conteudo>
  )
}

/*
  Observação:
    Aqui deve ser renderizado o mapa gerado pela API `LeafletJS` que obtem as coordenadas de `IPify`.
    Além disso, devo introduzir o icone de `Localização` na localização do IP.
*/ 
