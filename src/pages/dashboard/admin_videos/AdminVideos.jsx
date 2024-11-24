import Navbar from "../../../components/dashboard/navbar/Navbar"
import VideoCard from "../../../components/dashboard/videoCard/VideoCard"
import styles from './AdminVideos.module.css'
import { useEffect, useState } from "react"
import FormButton from "../../../components/button/FormButton"
import Input from "../../../components/input/Input"
import Cookies from 'js-cookie'
import { useNavigate } from "react-router"
import { apiVideos } from "../../../services/apiVideos"

const initialForm = {
  src: '',
  description: ''
};

function AdminVideos() {

  const [data, setData] = useState([]);
  const [form, setForm] = useState(initialForm);
  const user_admin = import.meta.env.VITE_ADMIN_USER;
  const navigate = useNavigate();
  const api = apiVideos();

  useEffect(() => {
    if(Cookies.get('user') === user_admin){
      api.getVideos().then(res => {
        setData(res.data)
      }).catch(error => console.log(error));//CAMBIAR A MENSAJE
    } else {
      navigate("/quiensoy");
    }
  }, []);

  const handleChange = (e) => {
    setForm({
        ...form,
        [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    api.createVideos(form).then(res => {
      setData([...data, res.data])
    })
    e.target.reset();
};

  return (
    <div className={styles.ctAdVideos}>
        <Navbar/>
        <h2>VIDEOS</h2>
        <div className={styles.ctAdContent}>
          <div className={styles.ctVideos}>
            {
              data.map((video, index) => (
                <VideoCard key={index} video={video}/>
              ))
            }
          </div>
          <form className={styles.ctForm} onSubmit={handleSubmit}>
            <Input label="description" labelName="Título" placeholder="Escribe un título..." onChange={handleChange}/>
            <Input label="src" labelName="URL Vídeo" placeholder="Escribe una url..." onChange={handleChange}/>
            <FormButton text="Crear Video"/>
          </form>
        </div>
    </div>
  )
}

export default AdminVideos