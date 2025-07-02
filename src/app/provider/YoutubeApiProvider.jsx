import { YoutubeApiContext } from '../context/YoutubeApiContext';
import Youtube from '../../features/api/youtube';
import fakeYoutubeClient from '../../features/api/fakeYoutubeClient';
import youtubeClient from '../../features/api/youtubeClient';

const client = new fakeYoutubeClient();
// const client = new youtubeClient();
const youtube = new Youtube(client);

export function YoutubeApiProvider({ children }) {
  return (
    <YoutubeApiContext.Provider value={{ youtube }}>
      {children}
    </YoutubeApiContext.Provider>
  );
}