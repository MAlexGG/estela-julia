import Navbar from "../../../components/dashboard/navbar/Navbar"
import VideoCard from "../../../components/dashboard/videoCard/VideoCard"
import styles from './AdminVideos.module.css'
import videos from '../../../assets/data/videos.json'
import { useEffect, useState } from "react"

function AdminVideos() {

  const [data, setData] = useState([]);

  useEffect(() => {
    setData(videos.videos)
  }, [data])

  return (
    <div className={styles.ctAdVideos}>
        <Navbar/>
        <h2>VIDEOS</h2>
        {
          data.map((video, index) => (
            <VideoCard key={index} video={video}/>
          ))
        }
        
    </div>
  )
}

export default AdminVideos