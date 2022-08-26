import SectionSecundaria from '../../components/SectionSegundaria';
import { Container } from './styles';

export default function SobreNos() {
  return (
    <Container>
      <SectionSecundaria
        titulo={'Sobre mim'}
        descricao={
          'Junto o foco a prática para evoluir continuamente trazendo maior satisfação para todos os clientes e empregadores.'
        }
      />
    </Container>
  );
}
