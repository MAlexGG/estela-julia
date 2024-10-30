import { NavLink } from "react-router-dom"
import styles from './Navbar.module.css'

function Navbar() {

  return (
    <header className={styles.ctHeader}>
        <nav className={styles.ctNavbar}>
            <NavLink to={"/"} className={({isActive}) => isActive ? styles.navActive : ""}>INICIO</NavLink>
            <a href="#discografia">DISCOGRAFÍA</a>
            <NavLink to={"/videos"} className={({isActive}) => isActive ? styles.navActive : ""}>VIDEOS</NavLink>
            <NavLink to={"/tours-events"} className={({isActive}) => isActive ? styles.navActive : ""}>GIRAS Y EVENTOS</NavLink>
            <a href="http://" target="_blank" rel="noopener noreferrer">TIENDA</a>
            <a href="mailto:">CONTACTO</a>
        </nav>
        <div className={styles.separator}></div>
    </header>
  )
}

export default Navbar