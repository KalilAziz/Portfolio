// eslint-disable-next-line
import styles from './styles.module.scss';
import ConteudoInicial from '../../components/ConteudoInicial';
import Sobre from '../../components/Sobre';
import Qualificacoes from '../../components/Qualificacoes';
import ProjetoIndex from '../../components/ProjetoIndex';
import HabilidadesETecnologias from '../../components/HabilidadesETecnologias';
export default function App() {
  return (
    <>
      <ConteudoInicial />
      <Sobre />
      <Qualificacoes />
      <ProjetoIndex />
      <HabilidadesETecnologias />
    </>
  );
}
