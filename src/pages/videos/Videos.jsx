import Navbar from "../../components/navbar/Navbar"
import styles from './Videos.module.css'
import videos from '../../assets/data/videos.json'
import Video from '../../components/video/Video'
import { useEffect, useState } from "react";

function Videos() {

  const [data, setData] = useState([]);

  useEffect(() => {
    setData(videos.videos)
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