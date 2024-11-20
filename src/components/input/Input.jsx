import styles from './Input.module.css'

function Input({label, labelName, placeholder, type="text", onChange}) {
  return (
    <div className={styles.ctInput}>
        <label htmlFor={label}>{labelName}</label>
        <input name={label} type={type} placeholder={placeholder} onChange={onChange}/>
    </div>
  )
}

export default Input