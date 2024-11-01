import { NavLink } from 'react-router-dom'
import logo from '../../../assets/images/name.svg'
import styles from './Navbar.module.css'

function Navbar() {

  const videos_url = import.meta.env.VITE_ADMIN_URL;
  const tours_url = import.meta.env.VITE_ADMIN_URL_TOURS;


  return (
    <header className={styles.ctHeader}>
        <div className={styles.ctLogo}>
            <img src={logo} alt="Estela Julia" className={styles.logo}/>
            <nav className={styles.ctNavbar}>
                <NavLink to={`/${videos_url}`} className={({isActive}) => isActive ? styles.navActive : ""}>VIDEOS</NavLink>
                <NavLink to={`/${tours_url}`} className={({isActive}) => isActive ? styles.navActive : ""}>GIRAS Y EVENTOS</NavLink>
            </nav>
        </div>
        <div className={styles.separator}></div>
    </header>
  )
}

export default Navbar