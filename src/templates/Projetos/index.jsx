import Projetos from '../../components/Projetos';
import SectionSecundaria from '../../components/SectionSegundaria';
import { Container } from './styles';

const ProjetosPage = () => {
  return (
    <Container>
      <SectionSecundaria
        titulo={'Projetos'}
        descricao={'Quando coloco meu conhecimento em prática...'}
      />
      <Projetos />
    </Container>
  );
};

export default ProjetosPage;
