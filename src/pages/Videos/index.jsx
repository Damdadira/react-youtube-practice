import { useParams } from 'react-router'
import styles from './styles/index.module.css'

export default function Videos() {
  const { keyword } = useParams();

  return <div>비디오 입니다. {keyword}</div>
}