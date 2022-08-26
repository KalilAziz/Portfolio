import Projeto from './Projeto';
import { Section } from './styles';
import { DataProjetos } from '../../Data/projetos';
import Scroling from '../Scroling/Scroling';
/* eslint-disable */

const Projetos = () => {
  return (
    <Section>
      <Scroling>
        <div className="container">
          {DataProjetos.map((projeto) => {
            return (
              <Projeto
                key={projeto.id}
                id={projeto.id}
                nome={projeto.nome}
                imagem={projeto.imagem}
                descricao={projeto.descricacao}
                tecnologias={projeto.tecnologias}
                gitHub={projeto.gitHub}
                demo={projeto.demo}
              />
            );
          })}
        </div>
      </Scroling>
    </Section>
  );
};

export default Projetos;
