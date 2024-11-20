import { useEffect, useState } from "react";
import Navbar from "../../../components/dashboard/navbar/Navbar"
import { useNavigate } from "react-router";
import Cookies from 'js-cookie'
import tours from '../../../assets/data/tours.json'
import styles from './AdminTours.module.css'
import Input from "../../../components/input/Input";
import FormButton from "../../../components/button/FormButton";
import TourCard from "../../../components/dashboard/tourCard/TourCard";

function AdminTours() {
  const [data, setData] = useState([]);
  const user_admin = import.meta.env.VITE_ADMIN_USER;
  const navigate = useNavigate();

  useEffect(() => {
    if(Cookies.get('user') === user_admin){
      setData(tours.tours);
    } else {
      navigate("/login");
    }
  }, [data, user_admin, navigate])

  return (
    <div className={styles.ctAdVideos}>
        <Navbar/>
        <h2>GIRAS Y EVENTOS</h2>
        <div className={styles.ctAdContent}>
          <div className={styles.ctVideos}>
            {
              data.map((tour, index) => (
                <TourCard key={index} tour={tour}/>
              ))
            }
          </div>
          <form className={styles.ctForm}>
            <Input label="date" labelName="Fecha" placeholder="Escribe una fecha..."/>
            <Input label="place" labelName="Lugar" placeholder="Escribe un lugar..."/>
            <Input label="url" labelName="URL + Info" placeholder="Escribe una url externa..."/>
            <FormButton text="Crear Gira o Evento"/>
          </form>
        </div>
    </div>
  )
}

export default AdminTours