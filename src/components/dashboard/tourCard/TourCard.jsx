import styles from './TourCard.module.css'
import deleteIcon from '../../../assets/images/delete.svg'

function TourCard({tour}) {

  let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  let date = new Date(tour.date).toLocaleDateString("es-ES", options);

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  return (
    <div className={styles.ctTourCard}>
        <div className={styles.ctData}>
            <p>{capitalizeFirstLetter(date)}</p>
            <p>{tour.place}</p>
            <p>{tour.link}</p>
        </div>
        <button className={styles.btDelete}><img src={deleteIcon} alt="delete button" /></button>
    </div>
  )
}

export default TourCard