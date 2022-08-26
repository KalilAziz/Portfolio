import P from 'prop-types';
import styles from './styles.module.scss';

// eslint-disable-next-line
const Button = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className={styles.button}>
      {children}
    </button>
  );
};

export default Button;

Button.propTypes = {
  children: P.string.isRequired,
};
