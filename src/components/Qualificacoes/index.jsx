import { useState } from 'react';
import Progresso from '../Progresso/Progresso';
import Scroling from '../Scroling/Scroling';
import { Section } from './style';
import * as Data from '../../Data/qualificacao';

const stateInitialState = {
  graduacao: true,
  cursos: false,
  experiencia: false,
};

const Qualificacoes = () => {
  // eslint-disable-next-line
  const [qualificIsVisible, setQualificIsVisible] = useState({
    ...stateInitialState,
  });

  return (
    <Section active={qualificIsVisible}>
      <Scroling>
        <h1>Qualificações</h1>
        <div className="container">
          <div className="buttons">
            <div>
              <div className="traco"></div>
              <button
                className="buttonGraduacao"
                onClick={() =>
                  setQualificIsVisible({
                    ...qualificIsVisible,
                    graduacao: true,
                    cursos: false,
                    experiencia: false,
                  })
                }
              >
                Graduação
              </button>
            </div>
            <div>
              <div className="traco"></div>
              <button
                className="buttonCursos"
                onClick={() =>
                  setQualificIsVisible({
                    ...qualificIsVisible,
                    graduacao: false,
                    cursos: true,
                    experiencia: false,
                  })
                }
              >
                Cursos
              </button>
            </div>
            <div>
              <div className="traco"></div>
              <button
                className="buttonExperiencia"
                onClick={() =>
                  setQualificIsVisible({
                    ...qualificIsVisible,
                    graduacao: false,
                    cursos: false,
                    experiencia: true,
                  })
                }
              >
                Experiências
              </button>
            </div>
          </div>

          <div className="conteudo">
            {qualificIsVisible.graduacao && (
              <Scroling>
                {Data.Graduacao.map((curso) => {
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
            )}

            {qualificIsVisible.cursos && (
              <>
                <Scroling>
                  {Data.Cursos.map((curso) => {
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

            {qualificIsVisible.experiencia && (
              <Scroling>
                {Data.Experiencia.map((curso) => {
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
            )}
          </div>
        </div>
      </Scroling>
    </Section>
  );
};
export default Qualificacoes;
