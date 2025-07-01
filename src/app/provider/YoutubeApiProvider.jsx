import { YoutubeApiContext } from '../context/YoutubeApiContext';
import Youtube from '../../features/api/youtube';
import FakeYoutubeApi from '../../features/api/fakeYoutubeApi';

// const youtube = new Youtube();
const youtube = new FakeYoutubeApi();

export function YoutubeApiProvider({ children }) {
  return (
    <YoutubeApiContext.Provider value={{ youtube }}>
      {children}
    </YoutubeApiContext.Provider>
  );
}