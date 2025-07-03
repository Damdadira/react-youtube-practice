import { useQuery } from '@tanstack/react-query';
import { useYoutubeApi } from '../../../../app/context/YoutubeApiContext';
import CommentItem from '../../../comment/ui/CommentItem/CommentItem'
import styles from '../Comments/Comments.module.css';

export default function Comments({ id }) {
  const { youtube } = useYoutubeApi();
  const {
    isLoading,
    error,
    data: comments,
  } = useQuery({
    queryKey: ['comments', id],
    queryFn: () => youtube.channelComments(id),
    staleTime: 1000 * 60 * 5,
  });

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {error && <div>Someting is Wrong...😱</div>}
      {comments && (
        <div className={styles.commentWrappers}>
          <span className={styles.totalCount}>댓글 {comments.length}개</span>
          {/* <ul className={styles.commentWrapper}>
            {comments.map((comment) => {
              const topLevelComment = comment.snippet.topLevelComment.snippet;
              return (
                <>
                  <li className={styles.topLevelContainer}>
                    <img
                      className={styles.topLevelCommentProfileImage}
                      src={topLevelComment.authorProfileImageUrl}
                      alt="author"
                    />
                    <div className={styles.topLevelCommentContainer}>
                      <span className={styles.topLevelCommentAuthor}>{topLevelComment.authorDisplayName}</span>
                      <pre className={styles.topLevelCommentText}>{topLevelComment.textOriginal}</pre>
                    </div>
                  </li>
                  <ul>
                    test
                  </ul>
                </>
                
              );
            })}
          </ul> */}
          <ul className={styles.commentWrapper}>
            {comments.map((comment) => (
              <>
                <CommentItem comment={comment}></CommentItem>
                <ul>
                  test
                </ul>
              </>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
