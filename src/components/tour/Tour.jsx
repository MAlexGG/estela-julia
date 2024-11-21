import Button from '../button/Button'
import styles from './Tour.module.css'
import DateFormater from '../../utils/DateFormater'

function Tour({tour}) {
  return (
    <div className={styles.ctTour}>
        <h3>{DateFormater(tour.date)}</h3>
        <p>{tour.place}</p>
        <div className={styles.btLink}>
            <Button link={tour.link} text="Saber más..."/>
        </div>
    </div>
  )
}

export default Tour