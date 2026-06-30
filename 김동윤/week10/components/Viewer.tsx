import { emotionList } from "../util/constants";
import getEmotionImage from "../util/get-emotion-image";
import "./Viewer.css";

type ViewerProps = {
  emotionId: number;
  content: string;
};

const Viewer = ({ emotionId, content }: ViewerProps) => {
  const emotionItem = emotionList.find((e) => e.emotionId === emotionId);

  return (
    <div className="Viewer">
      <section className="viewer_section">
        <h4>오늘의 감정</h4>
        <div className={`viewer_emotion_box viewer_emotion_${emotionId}`}>
          <span className="viewer_emotion_emoji">
            {getEmotionImage(emotionId)}
          </span>
          <span className="viewer_emotion_name">
            {emotionItem?.emotionName}
          </span>
        </div>
      </section>

      <section className="viewer_section">
        <h4>오늘의 일기</h4>
        <div className="viewer_content">{content}</div>
      </section>
    </div>
  );
};

export default Viewer;
