import { useParams } from 'react-router'
import styles from './styles/index.module.css'

export default function VideoDetail() {
  const { videoId } = useParams();

  return (
    <div className={styles.videoDetailContainer}>VideoDetail: {videoId}</div>
  )
}