import axios from "axios";
import { EstadoEnderecoIP } from "..";
import { useRecoilState } from "recoil";

const usePesquisarIP = () => {
  const [enderecoIP, setEnderecoIP] = useRecoilState(EstadoEnderecoIP);
  console.log(enderecoIP);

  return (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
  
    axios.get("https://geo.ipify.org/api/v2/country", {
      params: {
        apiKey: 'at_rP7Aa2s1DdUbBy6fGCzTZWQYu36rY',
        ipAddress: enderecoIP
      }
    }).then(resposta => {
      setEnderecoIP(JSON.stringify(resposta.data));
    }).catch(erro => {
      console.error('Erro ao obter o endereço IP: ', erro);
    });
  }
};

export default usePesquisarIP;
