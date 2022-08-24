import styles from './styles.module.scss';
import Button from '../../components/Button';
export default function App() {
  return (
    <>
      <div className={styles.section1}>
        <div className={styles.container}>
          <div className={styles.conteudo}>
            <h1>DESENVOLVIMENTO DE APLICAÇÕES WEB E MOBILE</h1>
            <p>
              Aplicações completas, elegantes, com qualidade de código e
              otimizadas para o SEO.
            </p>

            <div className={styles.contato}>
              <Button>Ver portfolio</Button>
              <a href="">Conhecer o dev</a>
            </div>
          </div>

          <img src="./image/celular.png" alt="" />
        </div>
      </div>

      <div className={styles.section2}>
        <div className={styles.container}>
          <h1>Sobre</h1>
          <div className={styles.sobre}>
            <div className={styles.perfil}>
              <img src="./image/modelo.jpeg" alt="" />
              <div className={styles.redesSociais}>
                <img src="" alt="" />
              </div>
            </div>
            <div className={styles.conteudo}>
              <p>
                Meu nome é Kalil, tenho 20 anos e moro em Mogi das Cruzes - SP.
                Sou Desenvolvedor Front End, formado em Análise e
                desenvolvimento de sistemas.
              </p>
              <p>
                Atualmente estou estudando e desenvolvendo projetos web mais
                precisamente no Front-end, de modo a ampliar meus conhecimentos
                e assim aprimorar ainda mais as habilidades que possuo.
              </p>
              <Button>Download CV</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
