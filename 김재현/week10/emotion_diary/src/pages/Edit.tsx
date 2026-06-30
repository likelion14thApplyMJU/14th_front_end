import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { useContext } from "react";
import { DiaryDispatchContext } from "../App";
import useDiary from "../hook/useDiary"
import type { EditorInput } from "../types";

const Edit = () => {
  const { id } = useParams<{ id: string }>();
  const nav = useNavigate();

  const dispatchContext = useContext(DiaryDispatchContext);

  if (!dispatchContext) {
    throw new Error("DiaryDispatchContext가 없습니다.");
  }

  const { onDelete, onUpdate } = dispatchContext;
  const curDiaryItem = useDiary(id);

  const onClickDelete = async () => {
    if (window.confirm("일기를 정말 삭제할까요? 다시 복구되지 않아요")) {
      try {
        await onDelete(id!);
        nav("/", { replace: true });
      } catch (error) {
        console.error(error);
        alert("일기 삭제에 실패했습니다.");
      }
    }
  };

  const onSubmit = async (input: EditorInput) => {
    if (window.confirm("일기를 정말 수정할까요?")) {
      try {
        await onUpdate(
          id!,
          input.createdDate.getTime(),
          input.emotionId,
          input.content
        );
        nav("/", { replace: true });
      } catch (error) {
        console.error(error);
        alert("일기 수정에 실패했습니다.");
      }
    }
  };

  return (
    <div>
      <Header
        title={"일기 수정하기"}
        leftChild={<Button onClick={() => nav(-1)} text={"< 뒤로 가기"} />}
        rightChild={
          <Button
            onClick={onClickDelete}
            text={"삭제하기"}
            type={"NEGATIVE"}
          />
        }
      />
      <Editor initData={curDiaryItem} onSubmit={onSubmit} />
    </div>
  );
};

export default Edit;