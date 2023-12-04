import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { estadoCoordenadasMapa } from 'src/common/state/atom/atom';

const useAtualizarMapa = () => {
  const coordenadas = useRecoilValue(estadoCoordenadasMapa);
  const [mapaAtualizado, setMapaAtualizado] = useState(0);

  useEffect(() => {
    setMapaAtualizado(prevKey => prevKey + 1);
  }, [coordenadas]);

  return mapaAtualizado;
};

export default useAtualizarMapa;
