import Navbar from "../../../components/dashboard/navbar/Navbar"
import VideoCard from "../../../components/dashboard/videoCard/VideoCard"
import styles from './AdminVideos.module.css'
import videos from '../../../assets/data/videos.json'
import { useEffect, useState } from "react"
import FormButton from "../../../components/button/FormButton"
import Input from "../../../components/input/Input"
import Cookies from 'js-cookie'
import { useNavigate } from "react-router"


function AdminVideos() {

  const [data, setData] = useState([]);
  const user_admin = import.meta.env.VITE_ADMIN_USER;
  const navigate = useNavigate();

  useEffect(() => {
    if(Cookies.get('user') === user_admin){
      setData(videos.videos);
    } else {
      navigate("/login");
    }
  }, [data, user_admin, navigate])

  console.log(Cookies.get('user'))

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
          <form className={styles.ctForm}>
            <Input label="title" labelName="Título" placeholder="Escribe un título..."/>
            <Input label="url" labelName="URL Vídeo" placeholder="Escribe una url..."/>
            <FormButton text="Crear Video"/>
          </form>
        </div>
    </div>
  )
}

export default AdminVideos