import styles from './Button.module.css'

function FormButton({text}) {
  return (
    <button className={styles.ctButton}>{text}</button>
  )
}

export default FormButton