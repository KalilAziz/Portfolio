import { Section } from './style';
import Button from '../Button';
import Scroling from '../Scroling/Scroling';
const ProjetoIndex = () => {
  return (
    <Section>
      <Scroling>
        <div className="container">
          <h1>Meu aprendizado em prática</h1>
          <Button>Ver todos os projetos</Button>
        </div>
      </Scroling>
    </Section>
  );
};

export default ProjetoIndex;
