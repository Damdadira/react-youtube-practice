import { useState, useRef, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router';
import { FiSearch } from 'react-icons/fi';
import { Popup } from '../popup/Popup.jsx';
import { Theme } from '../theme/Theme.jsx';
import clsx from 'clsx';
import styles from './Header.module.css';

export function Header() {
  const { keyword, videoId } = useParams();
  const navigate = useNavigate();
  const [text, setText] = useState('');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setText(keyword || '');
  }, [keyword]);

  const containerRef = useRef(null);

  let isDragging = false;
  let startX = 0;
  let scrollLeft = 0;

  const handleMouseDown = (e) => {
    isDragging = true;
    startX = e.pageX - containerRef.current.offsetLeft;
    scrollLeft = containerRef.current.scrollLeft;
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = x - startX;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    isDragging = false;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/${text}`);
  };

  return (
    <header className={styles.wrapper}>
      <div className={styles.headerContainer}>
        <Link to="/" className={styles.logoContainer}>
          <img className={styles.logo} src="/youtube.png" alt="logo" />
          <span className={styles.logoText}>YoungTube</span>
        </Link>
        <form className={styles.formContainer} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="검색"
            className={styles.formInput}
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button type="submit" className={styles.formButton}>
            <FiSearch />
          </button>
        </form>
        <Theme></Theme>
      </div>
      <div
        className={clsx(styles.buttonContainer, {
          [styles.none]: videoId
        })}
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseUp}
        onMouseUp={handleMouseUp}
      >
        {initialTabList().map((item) => (
          <button
            className={styles.button}
            key={item}
            onClick={() => setOpen(true)}
          >
            {item}
          </button>
        ))}
      </div>
      {open && <Popup text='기능을 준비중입니다.' onClose={() => setOpen(false)}></Popup>}
    </header>
  );
}

const initialTabList = () => {
  return [
    '전체',
    '음악',
    '믹스',
    '라이브',
    '애니메이션',
    '최근에 업로드된 동영상',
    '감상한 동영상',
    '새로운 맞춤 동영상',
  ];
};
