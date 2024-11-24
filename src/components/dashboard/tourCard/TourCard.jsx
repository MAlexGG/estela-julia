import styles from './TourCard.module.css'
import Tour from '../../tour/Tour'
import deleteIcon from '../../../assets/images/delete.svg'
import Alert from '../../alert/Alert';
import { useState } from 'react';

function TourCard({tour, handleDelete}) {

    const [alert, setAlert] = useState(false);

    const handleOpenDelete = () => {
        setAlert(true)
    };
      
    const handleCancelDelete = () => {
    setAlert(false);
    };

    return (
        <div className={styles.ctTourCard}>
            <Tour tour={tour} classTour='ctTour'/>
            <button className={styles.btDelete}><img src={deleteIcon} alt="delete button" onClick={handleOpenDelete}/></button>
            {
                alert && <Alert message={'¿Estás segura de que quieres eliminar la gira o evento?'} state={alert ? 'open' : 'close'} handleCancelDelete={handleCancelDelete} handleAcceptDelete={()=>handleDelete(tour.id)}/>
            }
        </div>
      )
}

export default TourCard

/* onClick={()=>handleDelete(tour.id)} */