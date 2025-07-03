import { useState } from 'react';
import { useYoutubeApi } from '../../../../app/context/YoutubeApiContext';
import clsx from 'clsx';
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

  // console.log(replies)
  // console.log(toggle)

  return (
    <>
      {totalCount > 0 && (
        <div className={styles.replyContainer}>
          <button onClick={handleClick}>답글 {totalCount}개</button>
          <ul>답글 목록들~</ul>
        </div>
      )}
    </>
  );
}
