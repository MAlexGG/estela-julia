import { Link } from "react-router-dom"
import styles from './Navbar.module.css'

function Navbar() {
  return (
    <header className={styles.ctHeader}>
        <nav className={styles.ctNavbar}>
            <Link to={"/"}>INICIO</Link>
            <a href="#discografia">DISCOGRAFÍA</a>
            <Link to={"/videos"}>VIDEOS</Link>
            <Link to={"/tours-events"}>GIRAS Y EVENTOS</Link>
            <a href="http://" target="_blank" rel="noopener noreferrer">TIENDA</a>
            <a href="mailto:">CONTACTO</a>
        </nav>
        <div className={styles.separator}></div>
    </header>
  )
}

export default Navbar