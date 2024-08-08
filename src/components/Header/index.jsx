import { Link, useLocation } from 'react-router-dom';
import Logo from '../../assets/logo.jpg';
import styles from './header.module.scss';

function Header() {
  const location = useLocation();

  return (
    <nav className={styles.navContainer}>
      <Link to="/">
        <img src={Logo} alt="Logo" className={styles.headerLogo} />
      </Link>
      <div className={styles.navLinksContainer}>
        <Link
          to="/"
          className={`${styles.styledLinkNav} ${location.pathname === '/' ? styles.active : ''}`}
        >
          Accueil
        </Link>
        <Link
          to="/about"
          className={`${styles.styledLinkNav} ${location.pathname === '/about' ? styles.active : ''}`}
        >
          A Propos
        </Link>
      </div>
    </nav>
  );
}

export default Header;
