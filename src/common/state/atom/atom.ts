import { atom } from "recoil";
import { ICardDados } from "../../interfaces/ICardDados";
import { ICoordenadas } from "../../interfaces/ICoordenadas";

export const estadoEnderecoIP = atom({
  key: 'enderecoIP',
  default: '',
});

export const estadoDadosIP = atom<ICardDados[]>({
  key: 'dadosIP',
  default: [],
});

export const estadoCoordenadasMapa = atom<ICoordenadas>({
  key: 'coordenadasMapa',
  default: { lat: 0 , lng: 0 },
});