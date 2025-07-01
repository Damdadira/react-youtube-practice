import { useParams } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import Youtube from '../../features/api/youtube.js';
import FakeYoutubeApi from '../../features/api/fakeYoutubeApi.js';
import VideoCard from '../../entities/video/ui/VideoCard/VideoCard.jsx';
import styles from './styles/index.module.css';

export default function Videos() {
  const { keyword } = useParams();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery({
    queryKey: ['videos', keyword],
    queryFn: () => {
      const youtube = new Youtube();
      return youtube.search(keyword)
    }
  });

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {error && <div>someting is wrong...</div>}
      {videos && (
        <ul className={styles.videosContainer}>
          {videos.map((video) => (
            <VideoCard
              key={video.id}
              video={video}
            ></VideoCard>
          ))}
        </ul>
      )}
    </div>
  );
}
