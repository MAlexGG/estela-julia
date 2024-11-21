import styles from './TourCard.module.css'
import deleteIcon from '../../../assets/images/delete.svg'
import DateFormater from '../../../utils/DateFormater'

function TourCard({tour}) {

  return (
    <div className={styles.ctTourCard}>
        <div className={styles.ctData}>
            <p>{DateFormater(tour.date)}</p>
            <p>{tour.place}</p>
            <p>{tour.link}</p>
        </div>
        <button className={styles.btDelete}><img src={deleteIcon} alt="delete button" /></button>
    </div>
  )
}

export default TourCard