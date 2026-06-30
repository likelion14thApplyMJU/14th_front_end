import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DiaryDispatchContext } from "../contexts";
import type { EditorInput } from "../types";
import Button from "../components/Button";
import Header from "../components/Header";
import Editor from "../components/Editor";

const New = () => {
  const dispatchContext = useContext(DiaryDispatchContext);
  const nav = useNavigate();

  if (!dispatchContext) return null;
  const { onCreate } = dispatchContext;

  const onSubmit = async (input: EditorInput) => {
    await onCreate(
      input.createdDate.getTime(),
      input.emotionId,
      input.content
    );
    nav("/", { replace: true });
  };

  return (
    <div>
      <Header
        title="새 일기 쓰기"
        leftChild={<Button text="< 뒤로 가기" onClick={() => nav(-1)} />}
      />
      <Editor onSubmit={onSubmit} />
    </div>
  );
};

export default New;
