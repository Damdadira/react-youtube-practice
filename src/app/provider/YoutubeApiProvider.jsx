import { useEffect, useState } from 'react';
import { YoutubeApiContext } from '../context/YoutubeApiContext';
import Youtube from '../../features/api/youtube';
import FakeYoutubeClient from '../../features/api/fakeYoutubeClient';
import YoutubeClient from '../../features/api/youtubeClient';

// const client = new FakeYoutubeClient();
const client = new YoutubeClient();
const youtube = new Youtube(client);

export function YoutubeApiProvider({ children }) {
  const [theme, setTheme] = useState(initialTheme);
  const toggleTheme = () => {
    setTheme(!theme);
    updateTheme(!theme);
  }

  useEffect(() => {
    setTheme(theme);
    updateTheme(theme);
  }, [theme]);

  return (
    <YoutubeApiContext.Provider value={{ youtube, theme, toggleTheme }}>
      {children}
    </YoutubeApiContext.Provider>
  );
}

const initialTheme = () => {
  if(localStorage.theme === 'light') return true;
  if(localStorage.theme === 'dark') return false;

  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

const updateTheme = (theme) => {
  if(theme) {
    document.documentElement.classList.remove('dark');
    localStorage.theme = 'light';
  }
  else{
    document.documentElement.classList.add('dark');
    localStorage.theme = 'dark';
  }
}