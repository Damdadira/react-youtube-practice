import { useNavigate } from 'react-router';
import { formatAgo } from '../../../../shared/lib/timeago';
import styles from '../VideoCard/VideoCard.module.css';

export default function VideoCard({ video, type }) {
  const { title, thumbnails, channelTitle, publishedAt } = video.snippet;
  const navigate = useNavigate();
  const isPlayList = type === 'playlist';

  const handleClick = (e) => {
    e.preventDefault();
    navigate(`/watch/${video.id}`, { state: { video } });
  };

  return (
    <li
      className={isPlayList ? styles.playlistWrappers : styles.wrappers}
      onClick={handleClick}
    >
      <img
        className={isPlayList ? styles.playlistThumbnailImage : styles.thumbnailImage}
        src={thumbnails.medium.url}
        alt={title}
      />
      <div className={isPlayList ? styles.playlistDiscriptionWrappers : styles.discriptionWrappers}>
        <span className={styles.discriptionTitle} title={title}>
          {title}
        </span>
        <div className={isPlayList ? styles.playlistDiscriptionWrapper : styles.discriptionWrapper}>
          <span>{channelTitle}</span>
          <span>{formatAgo(publishedAt, 'ko')}</span>
        </div>
      </div>
    </li>
  );
}
