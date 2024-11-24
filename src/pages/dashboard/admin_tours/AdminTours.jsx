import { useEffect, useState } from "react";
import Navbar from "../../../components/dashboard/navbar/Navbar"
import { useNavigate } from "react-router";
import Cookies from 'js-cookie'
import styles from './AdminTours.module.css'
import Input from "../../../components/input/Input";
import FormButton from "../../../components/button/FormButton";
import TourCard from "../../../components/dashboard/tourCard/TourCard"
import SortedToursDate from "../../../utils/SortedToursDate";
import { apiTours } from '../../../services/apiTours'
import Message from "../../../components/message/Message";

const initialForm = {
  date: '',
  place: '',
  link: ''
};

function AdminTours() {
  const [data, setData] = useState([]);
  const [form, setForm] = useState(initialForm);
  const [msg, setMsg] = useState('');
  const [msgOpen, setOpen] = useState(false);
  const user_admin = import.meta.env.VITE_ADMIN_USER;
  const navigate = useNavigate();
  const api = apiTours();

  useEffect(() => {
    if (Cookies.get('user') === user_admin) {
      api.getTours().then(res => {
        setData(SortedToursDate(res.data))
      }).catch(error => {
        setMsg(error.message);
        setOpen(true);
        setTimeout(() => {
          setOpen(false);
        }, 2000);
      })
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
    api.createTours(form).then(res => {
      setData([...data, res.data])
      setMsg(`El evento del día ${res.data.date} se ha creado con éxito`);
        setOpen(true);
        setTimeout(() => {
          setOpen(false);
        }, 2000);
    }).catch(error => {
      setMsg(error.message);
        setOpen(true);
        setTimeout(() => {
          setOpen(false);
        }, 2000);
    })
    e.target.reset();
};

const handleDelete = (id) => {
  if(id){
    api.deleteTours(id).then(res => {
      setMsg(`El evento del día ${res.data.date} ha sido eliminado con éxito`);
      setOpen(true);
      setTimeout(() => {
        setOpen(false);
      }, 2000);
      setData(data.filter(tour => tour.id !== id));
    }).catch(error => {
      setMsg(error.message);
      setOpen(true);
      setTimeout(() => {
        setOpen(false);
      }, 2000);
    })
  };
};

  return (
    <div className={styles.ctAdVideos}>
        {
          msgOpen && <Message message={msg} state={msgOpen ? 'open' : 'close'}/>
        }
        <Navbar/>
        <h2>GIRAS Y EVENTOS</h2>
        <div className={styles.ctAdContent}>
          <div className={styles.ctVideos}>
            {
              data.map((tour, index) => (
                <TourCard key={index} tour={tour} handleDelete={handleDelete}/>
              )).reverse()
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