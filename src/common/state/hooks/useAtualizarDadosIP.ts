import { useSetRecoilState } from "recoil";
import { estadoDadosIP } from "../atom/atom";
import { IDadosIP } from "src/common/interfaces/IDadosIP";

const useAtualizarDadosIP = () => {
  const setDadosIP = useSetRecoilState(estadoDadosIP);

  return (data: IDadosIP) => {
    const { ip, location, as, isp } = data;

    const dadosIPAtualizado = [
      { key: "1", titulo: "ip address", informacao: ip },
      { key: "2", titulo: "location", informacao: `${location.region}, ${location.country} ${as.asn}` },
      { key: "3", titulo: "timezone", informacao: `UTC ${location.timezone}` },
      { key: "4", titulo: "isp", informacao: isp }
    ];

    setDadosIP(dadosIPAtualizado);
  };
};

export default useAtualizarDadosIP;
