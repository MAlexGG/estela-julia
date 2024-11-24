import AlertButton from '../button/AlertButton'
import styles from './Alert.module.css'

function Alert({message, state, handleCancelDelete, handleAcceptDelete}) {

  return (
    <div className={`${styles[state]}`}>
        <p>{message}</p>
        <div className={styles.ctButtons}>
            <AlertButton text='Eliminar' handleClick={handleAcceptDelete}/>
            <AlertButton text='Cancelar' color='secondary' handleClick={ handleCancelDelete}/>
        </div>
    </div>
  )
}

export default Alert