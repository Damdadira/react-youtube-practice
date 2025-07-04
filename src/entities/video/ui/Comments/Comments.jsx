import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useYoutubeApi } from '../../../../app/context/YoutubeApiContext';
import CommentItem from '../../../comment/ui/CommentItem/CommentItem';
import ReplyItem from '../../../comment/ui/ReplyItem/ReplyItem';
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
        <div className={styles.commentsWrappers}>
          <span className={styles.commentsTotalCount}>
            댓글 {comments.length}개
          </span>
          <div className={styles.commentsWrapper}>
            {comments.map((comment) => {
              const topLevelComment = comment.snippet.topLevelComment.snippet;
              return (
                <div className={styles.commentsContainer}>
                  <CommentItem
                    comment={{
                      profile: topLevelComment.authorProfileImageUrl,
                      author: topLevelComment.authorDisplayName,
                      text: topLevelComment.textOriginal,
                      date: topLevelComment.publishedAt,
                    }}
                  ></CommentItem>
                  <ReplyItem
                    id={comment.id}
                    totalCount={comment.snippet.totalReplyCount}
                  ></ReplyItem>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
