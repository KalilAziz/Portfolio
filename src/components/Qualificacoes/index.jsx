import { useState } from 'react';
import Scroling from '../Scroling/Scroling';
import { Section } from './style';

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
      <Scroling options={{ distance: '20px' }} interval={500}>
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
              <Scroling options={{ distance: '20px' }} interval={500}>
                <div className="graduacao">
                  <h2>Ciências da Computação</h2>
                  <p>Universidade Federal de Catalão - UFCAT</p>
                  <div className="periodo">
                    <span> 2019 - 2024 </span>
                    <span className="porcentagem">55%</span>
                  </div>
                  <div className="progresso">
                    <div className="porcentConclusaoGradu"></div>
                  </div>
                </div>
              </Scroling>
            )}

            {qualificIsVisible.cursos && (
              <>
                <Scroling options={{ distance: '20px' }} interval={500}>
                  <div className="cursos">
                    <h2>HTML5, CSS3, JavaScript, Git e SASS</h2>
                    <p>B7 Web - Bonieky Lacerda</p>
                    <div className="periodo">
                      <span> 2021 - 2021 </span>
                      <span className="porcentagem">100%</span>
                    </div>
                    <div className="progresso">
                      <div className="porcentConclusaoB7"></div>
                    </div>
                  </div>
                  <div className="cursos">
                    <h2>HTML5, CSS3, JavaScript e React.js</h2>
                    <p>ProgramadorBr - Igor Oliveira</p>
                    <div className="periodo">
                      <span> 2021 - 2021 </span>
                      <span className="porcentagem">100%</span>
                    </div>
                    <div className="progresso">
                      <div className="porcentConclusaoProgBr"></div>
                    </div>
                  </div>
                  <div className="cursos">
                    <h2>Curso de JavaScript e TypeScript</h2>
                    <p>Udemy - Luiz Otávio Miranda</p>
                    <div className="periodo">
                      <span> 2021 - 2022 </span>
                      <span className="porcentagem">80%</span>
                    </div>
                    <div className="progresso">
                      <div className="porcentConclusaoJavaType"></div>
                    </div>
                  </div>
                  <div className="cursos">
                    <h2>Curso de React.js e Next.Js</h2>
                    <p>Udemy - Luiz Otávio Miranda</p>
                    <div className="periodo">
                      <span> 2022 - 2022 </span>
                      <span className="porcentagem">70%</span>
                    </div>
                    <div className="progresso">
                      <div className="porcentConclusaoReactNext"></div>
                    </div>
                  </div>
                </Scroling>
              </>
            )}

            {qualificIsVisible.experiencia && (
              <Scroling options={{ distance: '20px' }} interval={500}>
                <div className="experiencias">
                  <h2>Programador do Grupo Vale - Frelancer</h2>
                  <p>Catalão - Goiás</p>
                  <div className="periodo">
                    <span> 2021 - 2021 </span>
                  </div>
                </div>
              </Scroling>
            )}
          </div>
        </div>
      </Scroling>
    </Section>
  );
};
export default Qualificacoes;
