import styles from './Input.module.css'

function Input({label, labelName, placeholder}) {
  return (
    <div className={styles.ctInput}>
        <label htmlFor={label}>{labelName}</label>
        <input name={label} type="text" placeholder={placeholder}/>
    </div>
  )
}

export default Input