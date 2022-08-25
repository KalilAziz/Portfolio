import { useState } from 'react';
import Scroling from '../Scroling/Scroling';
import { Section } from './style';

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
              <Scroling options={{ distance: '20px' }} interval={500}>
                <div className="frontEnd">
                  <h2>HTML5 e CSS3</h2>
                  <div className="periodo">
                    <span className="porcentagem">80%</span>
                  </div>
                  <div className="progresso">
                    <div className="porcentConclusaoHtmlCSS"></div>
                  </div>
                </div>
                <div className="frontEnd">
                  <h2>JavaScript</h2>
                  <div className="periodo">
                    <span className="porcentagem">80%</span>
                  </div>
                  <div className="progresso">
                    <div className="porcentConclusaoJs"></div>
                  </div>
                </div>
                <div className="frontEnd">
                  <h2>TypeScript</h2>
                  <div className="periodo">
                    <span className="porcentagem">35%</span>
                  </div>
                  <div className="progresso">
                    <div className="porcentConclusaoTs"></div>
                  </div>
                </div>
                <div className="frontEnd">
                  <h2>SASS</h2>
                  <div className="periodo">
                    <span className="porcentagem">90%</span>
                  </div>
                  <div className="progresso">
                    <div className="porcentConclusaoSass"></div>
                  </div>
                </div>
                <div className="frontEnd">
                  <h2>Git e GitHub</h2>
                  <div className="periodo">
                    <span className="porcentagem">95%</span>
                  </div>
                  <div className="progresso">
                    <div className="porcentConclusaoGitGitHub"></div>
                  </div>
                </div>
                <div className="frontEnd">
                  <h2>React.js</h2>
                  <div className="periodo">
                    <span className="porcentagem">70%</span>
                  </div>
                  <div className="progresso">
                    <div className="porcentConclusaoReactJs"></div>
                  </div>
                </div>
                <div className="frontEnd">
                  <h2>Next.js</h2>
                  <div className="periodo">
                    <span className="porcentagem">60%</span>
                  </div>
                  <div className="progresso">
                    <div className="porcentConclusaoNextJs"></div>
                  </div>
                </div>
              </Scroling>
            </>
          )}

          {qualificIsVisible.backEnd && (
            <>
              <Scroling options={{ distance: '20px' }} interval={500}>
                <div className="backEnd">
                  <h2>MongoDB</h2>
                  <div className="periodo">
                    <span className="porcentagem">40%</span>
                  </div>
                  <div className="progresso">
                    <div className="porcentConclusaoMongoDB"></div>
                  </div>
                </div>
                <div className="backEnd">
                  <h2>FireBase</h2>
                  <div className="periodo">
                    <span className="porcentagem">50%</span>
                  </div>
                  <div className="progresso">
                    <div className="porcentConclusaoFireBase"></div>
                  </div>
                </div>
              </Scroling>
            </>
          )}
        </div>
      </div>
    </Section>
  );
};
export default HabilidadesETecnologias;
