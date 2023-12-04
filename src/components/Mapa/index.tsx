import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { MapContainer, Marker,  TileLayer } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { estadoCoordenadasMapa } from "src/common/state/atom/atom";
import useAtualizarMapa from "src/common/state/hooks/useAtualizarMapa";
import iconeMarcador from "./marcador.png";

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

const iconeMarcadorCustomizado = L.icon({
  iconUrl: iconeMarcador,
})

export default function Mapa() {
  const coordenadas = useRecoilValue(estadoCoordenadasMapa);
  const mapaAtualizado = useAtualizarMapa();

  return (
    <Conteudo key={mapaAtualizado}>
      <MapContainer center={[coordenadas.lat, coordenadas.lng]} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker 
          position={[coordenadas.lat, coordenadas.lng]} 
          icon={iconeMarcadorCustomizado}
        >
        </Marker>
      </MapContainer>
    </Conteudo>
  )
}
