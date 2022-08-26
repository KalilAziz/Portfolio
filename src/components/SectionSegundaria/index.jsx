import Scroling from '../Scroling/Scroling';
import { Section } from './styles';
// eslint-disable-next-line
const SectionSecundaria = ({ titulo, descricao }) => {
  return (
    <Section>
      <div className="container">
        <Scroling>
          <h1>{titulo}</h1>
          <div className="traco"></div>
          <p>{descricao}</p>
        </Scroling>
      </div>
    </Section>
  );
};
export default SectionSecundaria;
