import styled from "styled-components";
import { MapContainer, Marker,  TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Conteudo = styled.main`
  position: relative;

  .leaflet-container {
    z-index: 1;
    height: 100%;
    width: 100%;
  }

  .leaflet-control-zoom {
    display: none;
  }
`

export default function Mapa() {
  return (
    <Conteudo>
      <MapContainer center={[51.505, -0.09]} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
        </Marker>
      </MapContainer>
    </Conteudo>
  )
}

/*
  Observação:
    Aqui deve ser renderizado o mapa gerado pela API `LeafletJS` que obtem as coordenadas de `IPify`.
    Além disso, devo introduzir o icone de `Localização` na localização do IP.
*/ 
