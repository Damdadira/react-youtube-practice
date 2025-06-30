import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { popularData } from '../../features/api/fakeYoutubeApi';
import styles from './styles/index.module.css';

export default function Videos() {
  const { keyword } = useParams();
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    popularData().then((res) => 
      setVideos(res.data.items)
    );
  }, []);

  console.log(videos)

  return (
    <>
      {videos && (
        <ul>
          {videos.map((video) => (
            <li key={video.id}>{video.snippet.title}</li>
          ))}
        </ul>
      )}
    </>
  );
}
