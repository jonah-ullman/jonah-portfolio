import styles from './button.module.scss';
import Button from '../Button/button.js';

function Nav() {
  const resumeButtonConfig = {
    label: 'Resume'
  };

  return (
    <nav>
      <div className={styles.logo}>LOGO</div>
      <ol className={styles.navContainer}>
        <li><a href="#">About</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Resume</a></li>
      </ol>
    </nav>
  );
}

export default Nav;
