import { useState } from 'react';
import { useYoutubeApi } from '../../../../app/context/YoutubeApiContext';
import CommentItem from '../CommentItem/CommentItem';
import styles from '../ReplyItem/ReplyItem.module.css';

export default function ReplyItem({ id, totalCount }) {
  const { youtube } = useYoutubeApi();
  const [toggle, setToggle] = useState(false);
  const [replies, setReplies] = useState([]);

  const handleClick = async () => {
    if (!toggle && replies.length === 0) {
      const res = await youtube.channelReplies(id);
      setReplies(res);
    }
    setToggle(!toggle);
  };

  return (
    <>
      {totalCount > 0 && (
        <div className={styles.replyContainer}>
          <button className={styles.totalCountButton} onClick={handleClick}>
            <span className={styles.totalCountLabel}>답글 {totalCount}개</span>
          </button>
          <div className={styles.replyWrappers}>
            {(replies.length > 0 && toggle) &&
              replies.map((reply) => {
                const subLevelComment = reply.snippet;
                return (
                  <CommentItem
                    comment={{
                      profile: subLevelComment.authorProfileImageUrl,
                      author: subLevelComment.authorDisplayName,
                      text: subLevelComment.textOriginal,
                      date: subLevelComment.publishedAt,
                    }}
                    type="reply"
                  ></CommentItem>
                );
              })}
          </div>
        </div>
      )}
    </>
  );
}
