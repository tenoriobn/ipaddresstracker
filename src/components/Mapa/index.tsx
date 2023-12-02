import styled from "styled-components";
import { MapContainer, Marker,  TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { estadoCoordenadasMapa } from "src/common/state/atom";
import { useRecoilValue } from "recoil";
import { useEffect, useState } from "react";

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
  const [mapaAtualizado, setMapaAtualizado] = useState(0);
  const coordenadas = useRecoilValue(estadoCoordenadasMapa);

  useEffect(() => {
    setMapaAtualizado(prevKey => prevKey + 1);
  }, [coordenadas]);

  return (
    <Conteudo key={mapaAtualizado}>
      <MapContainer center={[coordenadas.lat, coordenadas.lng]} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[coordenadas.lat, coordenadas.lng]}>
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
