import { DiVim } from 'react-icons/di'
import styles from '../ReplyList/ReplyList.module.css'

export default function ReplyList({ reply }) {
  const { authorProfileImageUrl, authorDisplayName, textOriginal, publishedAt } = reply.snippet;

  return <div>{reply}</div>
}