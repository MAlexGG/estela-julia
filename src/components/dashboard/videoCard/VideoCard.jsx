import styles from './VideoCard.module.css'
import deleteIcon from '../../../assets/images/delete.svg'
import Video from '../../video/Video'


function VideoCard({video, handleDelete}) {

  return (
    < div className={styles.ctVideoCard}>
      <Video video={video}/>
      <button className={styles.btDelete} onClick={()=>handleDelete(video.id)}><img src={deleteIcon} alt="delete button" /></button>
    </div>
  )
}

export default VideoCard