import axios from "axios";
import { EstadoEnderecoIP } from "../atom";
import { useRecoilValue } from "recoil";
import useAtualizarDadosIP from "./useAtualizarDadosIP";

const usePesquisarIP = () => {
  const enderecoIP = useRecoilValue(EstadoEnderecoIP);
  const atualizarDadosIP = useAtualizarDadosIP();

  return (evento?: React.FormEvent<HTMLFormElement>) => {
    if (evento) {
      evento.preventDefault();
    }

    axios.get("https://geo.ipify.org/api/v2/country,city,vpn", {
      params: {
        apiKey: 'at_rP7Aa2s1DdUbBy6fGCzTZWQYu36rY',
        ipAddress: enderecoIP
      }
    }).then(resposta => {
      const { data } = resposta;
      
      atualizarDadosIP(data);
    }).catch(erro => {
      console.error('Erro ao obter o endereço IP: ', erro);
    });
  }
};

export default usePesquisarIP;