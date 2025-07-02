import { YoutubeApiContext } from '../context/YoutubeApiContext';
import Youtube from '../../features/api/youtube';
import FakeYoutubeClient from '../../features/api/fakeYoutubeClient';
import YoutubeClient from '../../features/api/youtubeClient';

const client = new FakeYoutubeClient();
// const client = new YoutubeClient();
const youtube = new Youtube(client);

export function YoutubeApiProvider({ children }) {
  return (
    <YoutubeApiContext.Provider value={{ youtube }}>
      {children}
    </YoutubeApiContext.Provider>
  );
}