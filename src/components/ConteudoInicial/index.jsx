import Button from '../Button';
import styles from './styles.module.scss';
const ConteudoInicial = () => {
  return (
    <div className={styles.section1}>
      <div className={styles.container}>
        <img className={styles.imageTop} src="./image/celular.png" alt="" />

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

        <img className={styles.imageBotton} src="./image/celular.png" alt="" />
      </div>
    </div>
  );
};

export default ConteudoInicial;
