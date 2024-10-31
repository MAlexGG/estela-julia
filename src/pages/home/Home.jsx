import Navbar from "../../components/navbar/Navbar"
import MainImage from '../../components/mainImage/MainImage'
import styles from './Home.module.css'

function Home() {
  return (
    <>
    <Navbar/>
    <h1>Estela Julia</h1>
    <div className={styles.ctHome}>
      <MainImage/>
    </div>
    
    <h2 id="discografia">DISCOGRAFÍA</h2>
    </>
    
  )
}

export default Home