import { NavLink, useNavigate } from 'react-router-dom'
import logo from '../../../assets/images/name.svg'
import styles from './Navbar.module.css'
import logout from '../../../assets/images/logout.svg'
import Cookies from 'js-cookie'

function Navbar() {

  const videos_url = import.meta.env.VITE_ADMIN_URL;
  const tours_url = import.meta.env.VITE_ADMIN_URL_TOURS;
  const navigate = useNavigate();

  const handleLogout = () => {
    Cookies.remove('user');
    navigate("/login");
  }

  return (
    <header className={styles.ctHeader}>
        <div className={styles.ctLogo}>
            <img src={logo} alt="Estela Julia" className={styles.logo}/>
            <nav className={styles.ctNavbar}>
                <NavLink to={`/login/${videos_url}`} className={({isActive}) => isActive ? styles.navActive : ""}>VIDEOS</NavLink>
                <NavLink to={`/login/${tours_url}`} className={({isActive}) => isActive ? styles.navActive : ""}>GIRAS Y EVENTOS</NavLink>
                <button className={styles.btLogout}><img src={logout} alt="logout icon" onClick={handleLogout}/></button>
            </nav>
        </div>
        <div className={styles.separator}></div>
    </header>
  )
}

export default Navbar