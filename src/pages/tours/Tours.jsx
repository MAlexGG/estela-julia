import { useEffect, useState } from "react"
import Navbar from "../../components/navbar/Navbar"
import Tour from "../../components/tour/Tour"
import styles from './Tours.module.css'
import tours from '../../assets/data/tours.json'
import SortedToursDate from "../../utils/SortedToursDate"

function Tours() {

  const [futureTours, setFutureTours] = useState([]);
  const [pastTours, setPastTours] = useState([]);

  useEffect(() => {
    const sortedTours = SortedToursDate(tours.tours);
    const currentDate = new Date();
    
    const future = sortedTours.filter(tour => new Date(tour.date) > currentDate);
    const past = sortedTours.filter(tour => new Date(tour.date) <= currentDate);

    setFutureTours(future);
    setPastTours(past);
  }, [])

  return (
    <>
    <Navbar/>
    <h2>GIRAS Y EVENTOS</h2>
    <div className={styles.ctTours}>
      {
        futureTours.map((tour, index) => (
          <Tour key={index} tour={tour} classTour='ctTour'/>
        ))
      }
      <h3 className={styles.txtSubtitle}>Giras o eventos pasados</h3>
      {
        pastTours.map((tour, index) => (
          <Tour key={index} tour={tour} classTour='ctTourPast' color='gray'/>
        )).reverse()
      }
    </div>
    <div className={styles.separator}></div>
    </>
  )
}

export default Tours