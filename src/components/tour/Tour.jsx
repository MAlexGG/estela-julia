import Button from '../button/Button'
import styles from './Tour.module.css'

function Tour({tour}) {
  return (
    <div className={styles.ctTour}>
        <h3>{tour.date}</h3>
        <p>{tour.place}</p>
        <div className={styles.btLink}>
            <Button link={tour.link}/>
        </div>
    </div>
  )
}

export default Tour