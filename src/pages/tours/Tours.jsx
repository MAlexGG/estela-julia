import { useEffect, useState } from "react"
import Navbar from "../../components/navbar/Navbar"
import Tour from "../../components/tour/Tour"
import styles from './Tours.module.css'
import tours from '../../assets/data/tours.json'
import SortedToursDate from "../../utils/SortedToursDate"

function Tours() {

  const [data, setData] = useState([]);

  useEffect(() => {
    setData(SortedToursDate(tours.tours));
  }, [data])

  return (
    <>
    <Navbar/>
    <h2>GIRAS Y EVENTOS</h2>
    <div className={styles.ctTours}>
      {
        data.map((tour, index) => (
          <Tour key={index} tour={tour}/>
        ))
      }
    </div>
    <div className={styles.separator}></div>
    </>
  )
}

export default Tours