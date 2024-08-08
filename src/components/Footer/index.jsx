import { Link } from 'react-router-dom'
import styles from './footer.module.scss'
import WhiteLogo from '../../assets/logo_white.jpg'

function Footer() {
  return (
    <nav className={styles.navContainer}>
      <Link to="/">
        <img src={WhiteLogo} alt="Logo" className={styles.footerLogo} />
      </Link>
      <div>
        <span className={styles.rights}>
          © 2020 Kasa. All rights reserved
        </span>
      </div>
    </nav>
  );
}
export default Footer