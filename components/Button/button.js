import styles from './button.module.scss';

function Button({ clickHandler, size, color, label }) {
  return (
    <button onClick={clickHandler}
            className={`cmp-button
                        cmp-button--size-${size}
                        cmp-button--color-${color}`}>
      {label}
    </button>
  );
}

export default Button;
