import styles from './nav.module.scss';
import Logo from '../Logo/logo.js';

function Nav() {
  const resumeButtonConfig = {
    label: 'Resume'
  };

  return (
    <nav className={styles.navContainer}>
      <Logo />
      <ul className={styles.navItems}>
        <li className={styles.navItem}><a href="#">About</a></li>
        <li className={styles.navItem}><a href="#">Projects</a></li>
        <li className={styles.navItem}><a href="#">Contact</a></li>
        <li className={styles.navButton}><a href="#">Resume</a></li>
      </ul>
    </nav>
  );
}

export default Nav;
