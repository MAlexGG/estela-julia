import styles from './Button.module.css'

function AlertButton({text, handleClick, color='main'}) {
  return (
    <button className={`${styles.ctButton} ${styles[color]}`} onClick={handleClick}>{text}</button>
  )
}

export default AlertButton