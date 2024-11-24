import Navbar from "../../components/navbar/Navbar"
import styles from './Videos.module.css'
import Video from '../../components/video/Video'
import { useEffect, useState } from "react";
import { apiVideos } from "../../services/apiVideos";

function Videos() {

  const [data, setData] = useState([]);
  const api = apiVideos();

  useEffect(() => {
    api.getVideos().then(res => {
      setData(res.data);
    }).catch(error => console.log(error));
  }, [data])

  return (
    <>
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