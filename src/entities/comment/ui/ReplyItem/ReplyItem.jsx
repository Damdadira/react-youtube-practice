import { useState } from 'react';
import { useYoutubeApi } from '../../../../app/context/YoutubeApiContext';
import clsx from 'clsx';
import styles from '../ReplyItem/ReplyItem.module.css';
import ReplyList from '../ReplyList/ReplyList';

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
          <button onClick={handleClick}>답글 {totalCount}개</button>
          {replies.length > 0 && (
            <ul>
              {replies.map((reply) => (
                <ReplyList reply={reply}></ReplyList>
              ))}
            </ul>
          )}
        </div>
      )}
    </>
  );
}
