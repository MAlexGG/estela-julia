import styles from './Button.module.css'

function Button({link}) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer"><button className={styles.ctButton}>Saber más...</button></a>
  )
}

export default Button