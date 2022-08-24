import P from 'prop-types';
import styles from './styles.module.scss';
const Button = ({ children }) => {
  return <button className={styles.button}>{children}</button>;
};

export default Button;

Button.propTypes = {
  children: P.string.isRequired,
};
