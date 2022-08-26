import { Section } from './styles';
// eslint-disable-next-line
const SectionSecundaria = ({ titulo, descricao }) => {
  return (
    <Section>
      <div className="container">
        <h1>{titulo}</h1>
        <div className="traco"></div>
        <p>{descricao}</p>
      </div>
    </Section>
  );
};
export default SectionSecundaria;
