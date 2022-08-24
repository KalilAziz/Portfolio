import Button from '../Button';
import style from './styles.module.scss';
const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.container}>
        <img src="./image/icon.png" alt="" />
        <nav>
          <ul>
            <li>
              <a href="/">Início</a>
            </li>
            <li>
              <a href="/projetos">Projetos</a>
            </li>
            <li>
              <a href="/sobrenos">Sobre</a>
            </li>
            <li>
              <a href="/suporte">Suporte</a>
            </li>
          </ul>
        </nav>
        <Button>Entre em contato</Button>
      </div>
    </header>
  );
};

export default Header;
