import { useNavigate } from "react-router-dom";
import type { DiaryItem as DiaryItemType } from "../types";
import getEmotionImage from "../util/get-emotion-image";
import Button from "./Button";
import "./DiaryItem.css";

const DiaryItem = ({
  id,
  emotionId,
  createdDate,
  content,
}: DiaryItemType) => {
  const nav = useNavigate();

  const formatted = new Date(createdDate).toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  });

  return (
    <div className="DiaryItem">
      <div
        className={`emotion_img_box emotion_img_box_${emotionId}`}
        onClick={() => nav(`/diary/${id}`)}
      >
        <span className="emotion_emoji">{getEmotionImage(emotionId)}</span>
      </div>

      <div
        className="diary_info_box"
        onClick={() => nav(`/diary/${id}`)}
      >
        <div className="diary_date">{formatted}</div>
        <div className="diary_content_preview">
          {content.length > 25 ? content.slice(0, 25) + "..." : content}
        </div>
      </div>

      <div className="diary_btn_box">
        <Button text="수정하기" onClick={() => nav(`/edit/${id}`)} />
      </div>
    </div>
  );
};

export default DiaryItem;
