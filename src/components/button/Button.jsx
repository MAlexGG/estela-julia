import styles from './Button.module.css'

function Button({link, text}) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer"><button className={styles.ctButton}>{text}</button></a>
  )
}

export default Button