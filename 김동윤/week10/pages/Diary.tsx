import { useParams, useNavigate } from "react-router-dom";
import { getStringedDate } from "../util/get-stringed-date";
import useDiary from "../hook/useDiary";
import Button from "../components/Button";
import Header from "../components/Header";
import Viewer from "../components/Viewer";

const Diary = () => {
  const { id }  = useParams<{ id: string }>();
  const nav     = useNavigate();
  const curDiaryItem = useDiary(id);

  if (!curDiaryItem) {
    return <div style={{ textAlign: "center", padding: "60px" }}>불러오는 중...</div>;
  }

  const { createdDate, emotionId, content } = curDiaryItem;
  const title = getStringedDate(new Date(createdDate));

  return (
    <div>
      <Header
        title={`${title} 기록`}
        leftChild={<Button text="< 뒤로 가기" onClick={() => nav(-1)} />}
        rightChild={
          <Button
            text="수정하기"
            onClick={() => nav(`/edit/${id}`)}
          />
        }
      />
      <Viewer emotionId={emotionId} content={content} />
    </div>
  );
};

export default Diary;
