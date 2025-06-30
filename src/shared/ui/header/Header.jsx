import { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { FiSearch } from "react-icons/fi";
import styles from './Header.module.css'

export function Header() {
  const navigate = useNavigate();
  const [text, setText] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/${text}`);
  }

  return (
    <header>
      <Link to='/' className={styles.logoContainer}>
        <img
          className={styles.logo} 
          src="/public/youtube.png" 
          alt="logo" />
        <span className={styles.logoText}>YoungTube</span>
      </Link>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          placeholder='검색' 
          value={text} 
          onChange={(e) => setText(e.target.value)} 
        />
        <button type='submit'><FiSearch /></button>
      </form>
    </header>
  )
}