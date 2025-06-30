import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import VideoCard from '../../entities/video/ui/VideoCard/VideoCard.jsx';
import { popularData } from '../../features/api/fakeYoutubeApi';
import styles from './styles/index.module.css';

export default function Videos() {
  const { keyword } = useParams();
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    popularData().then((res) => setVideos(res.data.items));
  }, []);

  return (
    <div>
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
