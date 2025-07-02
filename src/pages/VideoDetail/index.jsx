import { useLocation } from 'react-router'
import styles from './styles/index.module.css'

export default function VideoDetail() {
  const { state: { video } } = useLocation();
  const { title, channelId, channelTitle, description } = video.snippet;

  return (
    <section className={styles.videoDetailContainer}>
      <article className={styles.channelContainer}>
        <iframe 
          id='player'
          type='text/html'
          className={styles.videoPlayer}
          src={`https://www.youtube.com/embed/${video.id}`} 
          frameborder="0">
        </iframe>
        <div>
          <span className={styles.videoTitle}>{channelTitle}</span>
          <pre className={styles.videoDescription}>{description}</pre>
        </div>
      </article>
    </section>
  )
}