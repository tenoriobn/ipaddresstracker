import { atom } from "recoil";

export const EstadoEnderecoIP = atom({
  key: 'enderecoIP',
  default: '',
});

export const EstadoDadosIP = atom({
  key: 'dadosIP',
  default: [
    {
      "key": "1",
      "titulo": "ip address",
      "informacao": "192.212.174.101"
    },
    {
      "key": "2",
      "titulo": "location",
      "informacao": "Brooklyn, NY 10001"
    },
    {
      "key": "3",
      "titulo": "timezone",
      "informacao": "UTC -05:00"
    },
    {
      "key": "4",
      "titulo": "isp",
      "informacao": "SpaceX Starlink"
    }
  ],
});