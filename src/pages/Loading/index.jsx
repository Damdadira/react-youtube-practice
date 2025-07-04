import styles from './styles/index.module.css'

export default function Loading() {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.typingIndicator}>
        <div className={styles.typingCircle}></div>
        <div className={styles.typingCircle}></div>
        <div className={styles.typingCircle}></div>
        <div className={styles.typingShadow}></div>
        <div className={styles.typingShadow}></div>
        <div className={styles.typingShadow}></div>
      </div>
    </div>
  )
}