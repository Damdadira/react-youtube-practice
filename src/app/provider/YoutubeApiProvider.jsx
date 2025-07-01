import { YoutubeApiContext } from '../context/YoutubeApiContext';
import Youtube from '../../features/api/youtube';
import FakeYoutubeApi from '../../features/api/fakeYoutubeApi';
import YoutubeApi from '../../features/api/youtubeApi';

const client = new FakeYoutubeApi();
// const client = new YoutubeApi();
const youtube = new Youtube(client);

export function YoutubeApiProvider({ children }) {
  return (
    <YoutubeApiContext.Provider value={{ youtube }}>
      {children}
    </YoutubeApiContext.Provider>
  );
}