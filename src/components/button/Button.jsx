import styles from './Button.module.css'

function Button({link, text, color="main"}) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer"><button className={`${styles.ctButton} ${styles[color]}`}>{text}</button></a>
  )
}

export default Button