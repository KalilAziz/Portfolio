import { RiMenu3Fill } from 'react-icons/ri';
import Button from '../../Button';
import { Header } from './style';

// eslint-disable-next-line
const MenuDesktop = ({ menuIsVisible, setMenuIsVisible }) => {
  const diretorio = window.location.pathname;
  console.log(diretorio);
  return (
    <Header diretorio={diretorio}>
      <div className="container">
        <a href="/">
          <img src="./image/icon.png" alt="" />
        </a>
        <nav>
          <ul>
            <li className="activeInicio">
              <a href="/">Início</a>
            </li>
            <li className="activeProjetos">
              <a href="/projetos">Projetos</a>
            </li>
            <li className="activeSobre">
              <a href="/sobrenos">Sobre</a>
            </li>
            <li className="activeSuporte">
              <a href="/suporte">Suporte</a>
            </li>
          </ul>
        </nav>
        <Button>Entre em contato</Button>
        {!menuIsVisible && (
          <div className="sgvMenu">
            <RiMenu3Fill
              size={45}
              onClick={() => setMenuIsVisible((v) => !v)}
            />
          </div>
        )}
      </div>
    </Header>
  );
};

export default MenuDesktop;
