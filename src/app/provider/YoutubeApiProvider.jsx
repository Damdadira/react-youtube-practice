import { YoutubeApiContext } from '../context/YoutubeApiContext';
import Youtube from '../../features/api/youtube';
import FakeYoutubeClient from '../../features/api/fakeYoutubeClient';
import YoutubeClient from '../../features/api/youtubeClient';
import { useState } from 'react';

const client = new FakeYoutubeClient();
// const client = new YoutubeClient();
const youtube = new Youtube(client);

export function YoutubeApiProvider({ children }) {
  const [theme, setTheme] = useState(true);
  const toggleTheme = () => setTheme(prev => !prev);

  return (
    <YoutubeApiContext.Provider value={{ youtube, theme, toggleTheme }}>
      {children}
    </YoutubeApiContext.Provider>
  );
}