import { useLocation } from 'react-router'
import ChannelInfo from '../../entities/video/ui/ChannelInfo/ChannelInfo'
import RelatedVideos from '../../entities/video/ui/RelatedVideos/RelatedVideos'
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
          <div className={styles.channelInfoContainer}>
            <span className={styles.videoTitle}>{title}</span>
            <ChannelInfo id={channelId} name={channelTitle}></ChannelInfo>
            {/* Comment 컴포넌트 추가하기 */}
          </div>
          <pre className={styles.videoDescription}>{description}</pre>
        </div>
      </article>
      <section class={styles.relatedVideosContainer}>
        <RelatedVideos id={channelId}></RelatedVideos>
      </section>
    </section>
  )
}