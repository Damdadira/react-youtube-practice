import { useQuery } from '@tanstack/react-query';
import { useYoutubeApi } from '../../../../app/context/YoutubeApiContext';
import Loading from '../../../../pages/Loading';
import VideoCard from '../VideoCard/VideoCard';
import styles from '../RelatedVideos/RelatedVideos.module.css';

export default function RealtedVideos({ id }) {
  const { youtube } = useYoutubeApi();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery({
    queryKey: ['playlist', id],
    queryFn: () => youtube.searchByChannelId(id),
    staleTime: 1000 * 60 * 5,
  });

  return (
    <div>
      {isLoading && <Loading></Loading>}
      {error && <div>Someting is Wrong...😱</div>}
      {videos && (
        <ul className={styles.videosContainer}>
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} type='playlist'></VideoCard>
          ))}
        </ul>
      )}
    </div>
  );
}
