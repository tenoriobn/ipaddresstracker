import { useRecoilValue, useSetRecoilState } from "recoil";
import { estadoEnderecoIP, estadoIPValidado } from "../atom/atom";
import usePesquisarIP from "./usePesquisarIP";

const useValidadorIP = () => {
  const enderecoIP = useRecoilValue(estadoEnderecoIP);
  const confereFormatoIP = /^(\d{3}\.){3}\d{3}$/;
  const enderecoIPValido = confereFormatoIP.test(enderecoIP);
  const setIPValidado = useSetRecoilState(estadoIPValidado);
  const pesquisarIP = usePesquisarIP();


  return (evento?: React.FormEvent<HTMLFormElement>) => {
    evento ? evento.preventDefault() : null;

    setIPValidado(enderecoIPValido)

    if (enderecoIPValido) {
      pesquisarIP();
    }
  }
}

export default useValidadorIP;