import { useEffect, useState } from "react"
import Navbar from "../../components/navbar/Navbar"
import Tour from "../../components/tour/Tour"
import styles from './Tours.module.css'
import SortedToursDate from "../../utils/SortedToursDate"
import { apiTours } from '../../services/apiTours'
import Message from "../../components/message/Message"

function Tours() {

  const [futureTours, setFutureTours] = useState([]);
  const [pastTours, setPastTours] = useState([]);
  const [msg, setMsg] = useState('');
  const [msgOpen, setOpen] = useState(false);
  const api = apiTours();

  useEffect(() => {
    api.getTours().then(res => {
      const sortedTours = SortedToursDate(res.data);
      const currentDate = new Date();
      const future = sortedTours.filter(tour => new Date(tour.date) > currentDate);
      const past = sortedTours.filter(tour => new Date(tour.date) <= currentDate);
      setFutureTours(future);
      setPastTours(past);
    }).catch(error => {
      setMsg(error.message);
        setOpen(true);
        setTimeout(() => {
          setOpen(false);
        }, 2000);
    });
  }, [])

  return (
    <>
    {
      msgOpen && <Message message={msg} state={msgOpen ? 'open' : 'close'}/>
    }
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