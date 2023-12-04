import { useSetRecoilState } from "recoil";
import { IDadosIP } from "src/common/interfaces/IDadosIP"
import { estadoCoordenadasMapa } from "../atom/atom";

const useAtualizarLocalizacaoMapa = () => {
  const setCoordenadasMapa = useSetRecoilState(estadoCoordenadasMapa);

  return (data: IDadosIP) => {
    const { location } = data;

    setCoordenadasMapa(location)
  }
}

export default useAtualizarLocalizacaoMapa;