import styles from './TourCard.module.css'
import Tour from '../../tour/Tour'
import deleteIcon from '../../../assets/images/delete.svg'

function TourCard({tour, handleDelete}) {

    return (
        <div className={styles.ctTourCard}>
            <Tour tour={tour} classTour='ctTour'/>
            <button className={styles.btDelete} onClick={()=>handleDelete(tour.id)}><img src={deleteIcon} alt="delete button" /></button>
        </div>
      )
}

export default TourCard