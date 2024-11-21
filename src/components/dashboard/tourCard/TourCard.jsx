import styles from './TourCard.module.css'
import Tour from '../../tour/Tour'
import deleteIcon from '../../../assets/images/delete.svg'

function TourCard({tour}) {

    const handle = (id) => {
        console.log(id)
    }

    return (
        <div className={styles.ctTourCard}>
            <Tour tour={tour} classTour='ctTour'/>
            <button className={styles.btDelete} onClick={() => handle(tour.id)}><img src={deleteIcon} alt="delete button" /></button>
        </div>
      )
}

export default TourCard