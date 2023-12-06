import { atom } from "recoil";
import { ICardDados } from "../../interfaces/ICardDados";
import { ICoordenadas } from "../../interfaces/ICoordenadas";

export const estadoEnderecoIP = atom({
  key: 'enderecoIP',
  default: '',
});

export const estadoDadosIP = atom<ICardDados[]>({
  key: 'dadosIP',
  default: [
    { key: "1", titulo: "ip address", informacao: "Loading..." },
    { key: "2", titulo: "location", informacao: "Loading..." },
    { key: "3", titulo: "timezone", informacao: "Loading..." },
    { key: "4", titulo: "isp", informacao: "Loading..." }
  ],
});

export const estadoCoordenadasMapa = atom<ICoordenadas>({
  key: 'coordenadasMapa',
  default: { lat: 0 , lng: 0 },
});

export const estadoIPValidado = atom({
  key: 'ipValidado',
  default: true,
});