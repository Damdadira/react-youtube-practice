import { useParams } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import VideoCard from '../../entities/video/ui/VideoCard/VideoCard.jsx';
import styles from './styles/index.module.css';

export default function Videos() {
  const { keyword } = useParams();
  const { isLoading, error, data: videos } = useQuery({
    queryKey: ['videos', keyword],
    queryFn: async () => {
      return fetch(`/mock/${keyword ? 'search' : 'popular'}.json`)
      .then(res => res.json())
      .then(data => data.items)
    }
  })

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {error && <div>someting is wrong...</div>}
      {videos && (
        <ul className={styles.videosContainer}>
          {videos.map((video) => (
            <VideoCard key={video.id || video.id.videoId} video={video}></VideoCard>
          ))}
        </ul>
      )}
    </div>
  );
}
