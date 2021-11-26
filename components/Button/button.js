import styles from './button.module.scss';

function Button({ clickHandler, size, color, label }) {
  return (
    <button onClick={clickHandler}
            className={styles.button}>
      {label}
    </button>
  );
}

export default Button;
