import styles from './Header.module.css'

export function Header() {
  return (
    <div className={styles['logo-container']}>
      <img
        className={styles.logo} 
        src="/public/youtube.png" 
        alt="logo" />
      <span>YoungTube</span>
    </div>
  )
}