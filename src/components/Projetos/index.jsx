import Projeto from './Projeto';
import { Section } from './styles';
import { DataProjetos } from '../../Data/projetos';
/* eslint-disable */

const Projetos = () => {
  return (
    <Section>
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
    </Section>
  );
};

export default Projetos;
