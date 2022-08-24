import styles from './styles.module.scss';
import Button from '../Button';
const Sobre = () => {
  return (
    <div className={styles.section2}>
      <div className={styles.container}>
        <h1>Sobre</h1>
        <div className={styles.sobre}>
          <div className={styles.perfil}>
            <img
              className={styles.imageModelo}
              src="./image/modelo.jpeg"
              alt=""
            />
            <div className={styles.redesSociais}>
              <a href="" target="_blank" className="">
                <i className="uil uil-linkedin-alt"></i>
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=+5564984562437&text=Olá Kalil! te achei através de seu portfólio."
                target="_blank"
                className=""
                rel="noreferrer"
              >
                <i className="uil uil-whatsapp"></i>
              </a>
              <a
                href="https://github.com/KalilAziz"
                target="_blank"
                className=""
                rel="noreferrer"
              >
                <i className="uil uil-github-alt"></i>
              </a>
              <a href="">
                <i className="uil uil-envelope-share"></i>
              </a>
            </div>
          </div>
          <div className={styles.conteudo}>
            <p>
              Meu nome é Kalil, tenho 20 anos e moro em Mogi das Cruzes - SP.
              Sou Desenvolvedor Front End, formado em Análise e desenvolvimento
              de sistemas.
            </p>
            <p>
              Atualmente estou estudando e desenvolvendo projetos web mais
              precisamente no Front-end, de modo a ampliar meus conhecimentos e
              assim aprimorar ainda mais as habilidades que possuo.
            </p>
            <Button>Download CV</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sobre;
