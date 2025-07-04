import { useState, useRef, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router';
import { FiSearch } from 'react-icons/fi';
import avatarImage from '../../assets/images/monster.png';
import clsx from 'clsx';
import styles from './Header.module.css';

export function Header() {
  const { keyword, videoId } = useParams();
  const navigate = useNavigate();
  const [text, setText] = useState('');

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

  const handleButtonClick = (e) => {
    e.preventDefault();
    alert('준비중입니다.');
  };

  return (
    <header className={styles.wrapper}>
      <div className={styles.headerContainer}>
        <Link to="/" className={styles.logoContainer}>
          <img className={styles.logo} src="/public/youtube.png" alt="logo" />
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
        <img className={styles.avatarImage} src={avatarImage} alt="avatar" />
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
        {tabList().map((item) => (
          <button
            className={styles.button}
            key={item}
            onClick={handleButtonClick}
          >
            {item}
          </button>
        ))}
      </div>
    </header>
  );
}

const tabList = () => {
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
