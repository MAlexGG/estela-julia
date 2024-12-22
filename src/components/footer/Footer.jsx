import styles from './Footer.module.css'
import smSpotify from '../../assets/images/socialmedia/spotify.svg'
import smYoutube from '../../assets/images/socialmedia/youtube.svg'
import smFacebook from '../../assets/images/socialmedia/facebook.svg'
import smInstagram from '../../assets/images/socialmedia/ig.svg'

function Footer() {
  return (
    <div className={styles.ctFooter}>
        <a href="https://open.spotify.com/artist/1gUVCI2vKl1AZyAdQPOibx?si=GTbv4jjkRSqqDSVD3_7Ytw" target="_blank" rel="noopener noreferrer"><img src={smSpotify} alt="redes sociales - spotify"/></a>
        <a href="https://youtube.com/@estelajulia.p?si=_clkbA9c1ihvoR-M" target="_blank" rel="noopener noreferrer"><img src={smYoutube} alt="redes sociales - you tube"/></a>
        <a href="https://www.facebook.com/estelajulia.p" target="_blank" rel="noopener noreferrer"><img src={smFacebook} alt="redes sociales - facebook"/></a>
        <a href="https://www.instagram.com/estelajulia.p?igsh=dHExZHl5dG0xZGxk&utm_source=qr" target="_blank" rel="noopener noreferrer"><img src={smInstagram} alt="redes sociales - instagram"/></a>
    </div>
  )
}

export default Footer