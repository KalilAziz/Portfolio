import { useState } from 'react';
import Progresso from '../Progresso/Progresso';
import Scroling from '../Scroling/Scroling';
import { Section } from './style';
import * as Data from '../../Data/habilidadeETecnologia';
const stateInitialState = {
  frontEnd: true,
  cursos: false,
};

const HabilidadesETecnologias = () => {
  // eslint-disable-next-line
  const [qualificIsVisible, setQualificIsVisible] = useState({
    ...stateInitialState,
  });

  return (
    <Section active={qualificIsVisible}>
      <Scroling>
        <h1>Habilidades e Tecnologias</h1>
        <div className="container">
          <div className="buttons">
            <div>
              <div className="traco"></div>
              <button
                className="buttonGraduacao"
                onClick={() =>
                  setQualificIsVisible({
                    ...qualificIsVisible,
                    frontEnd: true,
                    backEnd: false,
                  })
                }
              >
                Front-end
              </button>
            </div>
            <div>
              <div className="traco"></div>
              <button
                className="buttonCursos"
                onClick={() =>
                  setQualificIsVisible({
                    ...qualificIsVisible,
                    frontEnd: false,
                    backEnd: true,
                  })
                }
              >
                Back-end
              </button>
            </div>
          </div>
          <div className="conteudo">
            {qualificIsVisible.frontEnd && (
              <>
                <Scroling>
                  {Data.FrontEnd.map((curso) => {
                    return (
                      <Progresso
                        key={curso.id}
                        nome={curso.nome}
                        local={curso.local}
                        periodo={curso.periodo}
                        porcentagem={curso.porcentagem}
                      />
                    );
                  })}
                </Scroling>
              </>
            )}

            {qualificIsVisible.backEnd && (
              <>
                <Scroling>
                  {Data.BackEnd.map((curso) => {
                    return (
                      <Progresso
                        key={curso.id}
                        nome={curso.nome}
                        local={curso.local}
                        periodo={curso.periodo}
                        porcentagem={curso.porcentagem}
                      />
                    );
                  })}
                </Scroling>
              </>
            )}
          </div>
        </div>
      </Scroling>
    </Section>
  );
};
export default HabilidadesETecnologias;
