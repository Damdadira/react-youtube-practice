import { useNavigate } from 'react-router';
import { formatAgo } from '../../../../shared/lib/timeago';
import styles from '../VideoCard/VideoCard.module.css'

export default function VideoCard ({ video }) {
  const { title, thumbnails, channelTitle, publishedAt } = video.snippet;
  const navigate = useNavigate();
  
  const handleClick = (e) => {
    e.preventDefault();
    navigate(`/watch/${video.id}`, { state: { video } });
  }

  return (
    <li className={styles.wrappers} onClick={handleClick}>
      <img 
        className={styles.thumbnailImage}
        src={thumbnails.medium.url} 
        alt={title} 
      />
      <div className={styles.discriptionWrappers}>
        <span className={styles.discriptionTitle} title={title}>{title}</span>
        <div className={styles.discriptionWrapper}>
          <span>{channelTitle}</span>
          <span>{formatAgo(publishedAt, 'ko')}</span>
        </div>
      </div>
    </li>
  )
}