import { useEffect } from 'react';
import usePesquisarIP from './usePesquisarIP';

const useObterIPVisitante = () => {
  const pesquisarIP = usePesquisarIP();

  useEffect(() => {
    pesquisarIP();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return pesquisarIP;
};

export default useObterIPVisitante;
