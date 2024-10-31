import styles from './Footer.module.css'
import smSpotify from '../../assets/images/socialmedia/spotify.svg'
import smApple from '../../assets/images/socialmedia/apple_music.svg'
import smFacebook from '../../assets/images/socialmedia/facebook.svg'
import smInstagram from '../../assets/images/socialmedia/ig.svg'

function Footer() {
  return (
    <div className={styles.ctFooter}>
        <a href="" target="_blank" rel="noopener noreferrer"><img src={smSpotify} alt="redes sociales - spotify"/></a>
        <a href="" target="_blank" rel="noopener noreferrer"><img src={smApple} alt="redes sociales - apple music"/></a>
        <a href="" target="_blank" rel="noopener noreferrer"><img src={smFacebook} alt="redes sociales - facebook"/></a>
        <a href="" target="_blank" rel="noopener noreferrer"><img src={smInstagram} alt="redes sociales - instagram"/></a>
    </div>
  )
}

export default Footer