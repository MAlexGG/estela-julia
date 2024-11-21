import { useEffect, useState } from "react";
import Navbar from "../../../components/dashboard/navbar/Navbar"
import { useNavigate } from "react-router";
import Cookies from 'js-cookie'
import tours from '../../../assets/data/tours.json'
import styles from './AdminTours.module.css'
import Input from "../../../components/input/Input";
import FormButton from "../../../components/button/FormButton";
import TourCard from "../../../components/dashboard/tourCard/TourCard"
import SortedToursDate from "../../../utils/SortedToursDate";

const initialForm = {
  date: '',
  place: '',
  link: ''
};

function AdminTours() {
  const [data, setData] = useState([]);
  const [form, setForm] = useState(initialForm)
  const user_admin = import.meta.env.VITE_ADMIN_USER;
  const navigate = useNavigate();

  useEffect(() => {
    if (Cookies.get('user') === user_admin) {
      setData(SortedToursDate(tours.tours));
    } else {
      navigate("/quiensoy");
    }
  }, [user_admin, navigate, form]);

  const handleChange = (e) => {
    setForm({
        ...form,
        [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form)
    console.log('Creado correctamente')
    e.target.reset();
};

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
          <form className={styles.ctForm} onSubmit={handleSubmit}>
            <Input label="date" labelName="Fecha" placeholder="Escribe una fecha..." type="date" onChange={handleChange} />
            <Input label="place" labelName="Lugar" placeholder="Escribe un lugar..." onChange={handleChange} />
            <Input label="link" labelName="URL + Info" placeholder="Escribe una url externa..." onChange={handleChange} />
            <FormButton text="Crear Gira o Evento"/>
          </form>
        </div>
    </div>
  )
}

export default AdminTours