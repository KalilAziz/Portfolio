import { RiMenu3Fill } from 'react-icons/ri';
import Button from '../../Button';
import { Header } from './style';
// eslint-disable-next-line
const MenuDesktop = ({ menuIsVisible, setMenuIsVisible }) => {
  return (
    <Header>
      <div className="container">
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
