import { atom } from "recoil";
import { ICardDados } from "../interfaces/ICardDados";

export const EstadoEnderecoIP = atom({
  key: 'enderecoIP',
  default: '',
});

export const EstadoDadosIP = atom<ICardDados[]>({
  key: 'dadosIP',
  default: [],
});