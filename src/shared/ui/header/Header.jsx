import { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { FiSearch } from "react-icons/fi";
import styles from './Header.module.css'
import avatarImage from '../../assets/images/monster.png'

export function Header() {
  const navigate = useNavigate();
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/${text}`);
  }

  return (
    <header className={styles.headerContainer}>
      <Link to='/' className={styles.logoContainer}>
        <img
          className={styles.logo} 
          src='/public/youtube.png' 
          alt='logo' />
        <span className={styles.logoText}>YoungTube</span>
      </Link>
      <form className={styles.formContainer} onSubmit={handleSubmit}>
        <input 
          type='text'
          placeholder='검색'
          className={styles.formInput}
          value={text} 
          onChange={(e) => setText(e.target.value)} 
        />
        <button type='submit' className={styles.formButton}><FiSearch /></button>
      </form>
      <img className={styles.avatarImage} src={avatarImage} alt='avatar' />
    </header>
  )
}