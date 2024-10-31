import Navbar from "../../components/navbar/Navbar"
import styles from './Videos.module.css'
import videos from '../../assets/data/videos.json'
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
        <div className={styles.ctVideo} key={index}>
        <iframe src={video.src} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        <p>{video.description}</p>
      </div>
      ))
    }
    </div>
    <div className={styles.separator}></div>
    </>
  )
}

export default Videos