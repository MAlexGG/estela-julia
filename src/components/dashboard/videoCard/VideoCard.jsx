import styles from './VideoCard.module.css'
import deleteIcon from '../../../assets/images/delete.svg'

function VideoCard({video}) {
  return (
    <div className={styles.ctVideoCard}>
        <div>
            <p>{video.description}</p>
        </div>
        <button className={styles.btDelete}><img src={deleteIcon} alt="delete button" /></button>
    </div>
  )
}

export default VideoCard