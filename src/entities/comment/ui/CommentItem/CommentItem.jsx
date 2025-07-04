import { formatAgo } from '../../../../shared/lib/timeago';
import styles from '../CommentItem/CommentItem.module.css'

export default function CommentItem ({ comment, type }) {
  const isReply = type === 'reply';

  return (
    <ul>
      <li className={styles.commentItemContainer}>
        <img
          className={styles.commentItemProfile}
          src={comment.profile}
          alt="author"
        />
        <div className={styles.commentItemWrappers}>
          <div className={styles.commentItemWrapper}>
            <span className={styles.commentItemAuthor}>{comment.author}</span>
            <span className={styles.commentItemDate}>{formatAgo(comment.date, 'ko')}</span>
          </div>
          <pre className={styles.commentItemText}>{comment.text}</pre>
        </div>
      </li>
    </ul>
  )
}