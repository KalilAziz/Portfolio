import { Header } from './style';
import { IoClose } from 'react-icons/io5';
import { useEffect } from 'react';
// eslint-disable-next-line
const MenuMobile = ({ menuIsVisible, setMenuIsVisible }) => {
  useEffect(() => {
    document.body.style.overflowY = menuIsVisible ? 'hidden' : 'auto';
  }, [menuIsVisible]);
  return (
    <Header isVisible={menuIsVisible}>
      <IoClose
        className="sgv"
        size={45}
        onClick={() => setMenuIsVisible((v) => !v)}
      />
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
    </Header>
  );
};

export default MenuMobile;
