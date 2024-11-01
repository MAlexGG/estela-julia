import { NavLink } from 'react-router-dom'
import logo from '../../../assets/images/name.svg'
import styles from './Navbar.module.css'

function Navbar() {

  return (
    <header className={styles.ctHeader}>
        <div className={styles.ctLogo}>
            <img src={logo} alt="Estela Julia" className={styles.logo}/>
            <nav className={styles.ctNavbar}>
                <NavLink to={"/"} className={({isActive}) => isActive ? styles.navActive : ""}>VIDEOS</NavLink>
                <NavLink to={"/tours-events"} className={({isActive}) => isActive ? styles.navActive : ""}>GIRAS Y EVENTOS</NavLink>
            </nav>
        </div>
        <div className={styles.separator}></div>
    </header>
  )
}

export default Navbar