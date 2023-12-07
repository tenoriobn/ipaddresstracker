import axios from "axios";
import { estadoEnderecoIP } from "../atom/atom";
import { useRecoilValue } from "recoil";
import useAtualizarDadosIP from "./useAtualizarDadosIP";
import useAtualizarLocalizacaoMapa from "./useAtualizarLocalizacaoMapa";

const usePesquisarIP = () => {
  const enderecoIP = useRecoilValue(estadoEnderecoIP);
  const atualizarDadosIP = useAtualizarDadosIP();
  const atualizarLocalizacaoMapa = useAtualizarLocalizacaoMapa();

  return (evento?: React.FormEvent<HTMLFormElement>) => {
    if (evento) {
      evento.preventDefault();
    }

    axios.get("https://geo.ipify.org/api/v2/country,city,vpn", {
      params: {
        apiKey: 'at_VGrH2aTrZbHoIsOHhEbxBL8WuYYzI',
        ipAddress: enderecoIP
      }
    }).then(resposta => {
      const { data } = resposta;

      atualizarDadosIP(data);
      atualizarLocalizacaoMapa(data);
    });
  };
};

export default usePesquisarIP;