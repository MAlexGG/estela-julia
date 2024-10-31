import styles from './NotFound.module.css'

function NotFound() {
  return (
    <div className={styles.ctNotFound}>
      <div className={styles.separator}></div>
      <h2>Página no encontrada</h2>
      <div className={styles.separator}></div>
    </div>
  )
}

export default NotFound