import { useQuery } from "@tanstack/react-query";
import { useYoutubeApi } from "../../../../app/context/YoutubeApiContext";
import styles from "../ChannelInfo/ChannelInfo.module.css";

export default function ChannelInfo({ id, name }) {
  const { youtube } = useYoutubeApi();
  const { data: url } = useQuery({
    queryKey: ["channels", id],
    queryFn: () => youtube.channelImageURL(id),
  });

  return (
    <div className={styles.channelInfoContainer}>
      {url && <img className={styles.channelInfoImage} src={url} alt={name} />}
      <span className={styles.channelInfoName}>{name}</span>
    </div>
  );
}
