import { useParams } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import { useYoutubeApi } from '../../app/context/YoutubeApiContext.jsx';
import Loading from '../Loading/index.jsx';
import VideoCard from '../../entities/video/ui/VideoCard/VideoCard.jsx';
import styles from './styles/index.module.css';

export default function Videos() {
  const { keyword } = useParams();
  const { youtube } = useYoutubeApi();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery({
    queryKey: ['videos', keyword],
    queryFn: () => youtube.search(keyword),
  });

  return (
    <div>
      {isLoading && <Loading></Loading>}
      {error && <div>Someting is Wrong...😱</div>}
      {videos && (
        <ul className={styles.videosContainer}>
          {videos.map((video) => (
            <VideoCard key={video.id} video={video}></VideoCard>
          ))}
        </ul>
      )}
    </div>
  );
}
