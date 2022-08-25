import Button from '../Button';
import Scroling from '../Scroling/Scroling';
import { Section } from './style';
const ConteudoInicial = () => {
  return (
    <Section>
      <Scroling>
        <div className="container">
          <img className="imageTop" src="./image/celular.png" alt="" />

          <div className="conteudo">
            <h1>DESENVOLVIMENTO DE APLICAÇÕES WEB E MOBILE</h1>
            <p>
              Aplicações completas, elegantes, com qualidade de código e
              otimizadas para o SEO.
            </p>

            <div className="contato">
              <Button>Ver portfolio</Button>
              <a href="">Conhecer o dev</a>
            </div>
          </div>

          <img className="imageBotton" src="./image/celular.png" alt="" />
        </div>
      </Scroling>
    </Section>
  );
};

export default ConteudoInicial;
