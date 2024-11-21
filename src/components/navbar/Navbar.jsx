import { NavLink } from "react-router-dom"
import styles from './Navbar.module.css'
import menu from '../../assets/images/menu.svg'
import { useState } from "react";

function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  }

  const contactEmail = import.meta.env.VITE_CONTACT_EMAIL;

  return (
    <header className={isOpen ? styles.ctHeader : styles.ctHeaderClose}>
      <button className={styles.btMenu} onClick={handleClick}>
        <img src={menu} alt="hamburguer menu" className={styles.imgMenu} />
      </button>
        <nav className={isOpen ? styles.ctNavbar : styles.ctNavbarClose}>
            <NavLink to={"/"} className={({isActive}) => isActive ? styles.navActive : ""}>INICIO</NavLink>
            <a href="/#discografia"  onClick={handleClick}>DISCOGRAFÍA</a>
            <NavLink to={"/videos"} className={({isActive}) => isActive ? styles.navActive : ""}>VIDEOS</NavLink>
            <NavLink to={"/giras-eventos"} className={({isActive}) => isActive ? styles.navActive : ""}>GIRAS Y EVENTOS</NavLink>
            <a href="http://" target="_blank" rel="noopener noreferrer">TIENDA</a>
            <a href={`mailto:${contactEmail}`}>CONTACTO</a>
        </nav>
        <div className={styles.separator}></div>
    </header>
  )
}

export default Navbar