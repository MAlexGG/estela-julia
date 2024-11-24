import styles from './VideoCard.module.css'
import deleteIcon from '../../../assets/images/delete.svg'
import Video from '../../video/Video'
import Alert from '../../alert/Alert'
import { useState } from 'react';


function VideoCard({video, handleDelete}) {

  const [alert, setAlert] = useState(false);

    const handleOpenDelete = () => {
        setAlert(true)
    };
      
    const handleCancelDelete = () => {
    setAlert(false);
    };

  return (
    < div className={styles.ctVideoCard}>
      <Video video={video}/>
      <button className={styles.btDelete} onClick={handleOpenDelete}><img src={deleteIcon} alt="delete button" /></button>
      {
        alert && <Alert message={'¿Estás segura de que quieres eliminar el video?'} state={alert ? 'open' : 'close'} handleCancelDelete={handleCancelDelete} handleAcceptDelete={()=>handleDelete(video.id)}/>
      }
    </div>
  )
}

export default VideoCard