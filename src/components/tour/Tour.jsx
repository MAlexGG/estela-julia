import Button from '../button/Button'
import styles from './Tour.module.css'
import DateFormater from '../../utils/DateFormater'

function Tour({tour, classTour, color}) {
  return (
    <div className={styles[classTour]}>
        <h3>{DateFormater(tour.date)}</h3>
        <p>{tour.place}</p>
        <div className={styles.btLink}>
            <Button link={tour.link} text="Saber más..." color={color}/>
        </div>
    </div>
  )
}

export default Tour