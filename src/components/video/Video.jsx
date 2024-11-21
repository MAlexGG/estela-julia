import styles from './Video.module.css'

function Video({video}) {
  return (
    <div className={styles.ctVideo}>
        <iframe src={video.src} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        <p>{video.description}</p>
      </div>
  )
}

export default Video