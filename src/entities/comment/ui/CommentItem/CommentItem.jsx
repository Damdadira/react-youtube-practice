import styles from '../CommentItem/CommentItem.module.css'

export default function CommentItem ({ comment }) {
  const { authorProfileImageUrl, authorDisplayName, textOriginal } = comment.snippet.topLevelComment.snippet
  return (
    <li className={styles.commentItemContainer}>
      <img
        className={styles.commentItemImage}
        src={authorProfileImageUrl}
        alt="author"
      />
      <div className={styles.commentItemWrapper}>
        <span className={styles.commentItemAuthor}>{authorDisplayName}</span>
        <pre className={styles.commentItemText}>{textOriginal}</pre>
      </div>
    </li>
  )
}