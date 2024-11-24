import Navbar from "../../components/navbar/Navbar"
import styles from './Videos.module.css'
import Video from '../../components/video/Video'
import { useEffect, useState } from "react";
import { apiVideos } from "../../services/apiVideos";
import Message from "../../components/message/Message";

function Videos() {

  const [data, setData] = useState([]);
  const [msg, setMsg] = useState('');
  const [msgOpen, setOpen] = useState(false);
  
  const api = apiVideos();

  useEffect(() => {
    api.getVideos().then(res => {
      setData(res.data);
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
    <h2>VIDEOS</h2>
    <div className={styles.ctVideos}>
    {
      data.map((video, index) => (
        <Video key={index} video={video}/>
      ))
    }
    </div>
    <div className={styles.separator}></div>
    </>
  )
}

export default Videos