import { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { DiaryDispatchContext } from "../contexts";
import type { EditorInput } from "../types";
import useDiary from "../hook/useDiary";
import Button from "../components/Button";
import Header from "../components/Header";
import Editor from "../components/Editor";

const Edit = () => {
  const { id }  = useParams<{ id: string }>();
  const nav     = useNavigate();

  const dispatchContext = useContext(DiaryDispatchContext);
  const curDiaryItem    = useDiary(id);

  if (!dispatchContext || !curDiaryItem) {
    return <div style={{ textAlign: "center", padding: "60px" }}>불러오는 중...</div>;
  }

  const { onUpdate, onDelete } = dispatchContext;

  // 삭제
  const onClickDelete = async () => {
    if (window.confirm("일기를 삭제하겠어요?\n삭제 후 복구가 불가능해요.")) {
      await onDelete(id!);
      nav("/", { replace: true });
    }
  };

  // 수정
  const onSubmit = async (input: EditorInput) => {
    if (!window.confirm("일기를 수정하겠어요?")) return;
    await onUpdate(
      id!,
      input.createdDate.getTime(),
      input.emotionId,
      input.content
    );
    nav("/", { replace: true });
  };

  return (
    <div>
      <Header
        title="일기 수정하기"
        leftChild={<Button text="< 뒤로 가기" onClick={() => nav(-1)} />}
        rightChild={
          <Button text="삭제하기" type="NEGATIVE" onClick={onClickDelete} />
        }
      />
      <Editor initData={curDiaryItem} onSubmit={onSubmit} />
    </div>
  );
};

export default Edit;
