import styles from './Message.module.css'

function Message({message, state}) {
  return (
    <div className={`${styles.ctMessage} ${styles[state]}`}>
      <p>{message}</p>
    </div>
  )
}

export default Message