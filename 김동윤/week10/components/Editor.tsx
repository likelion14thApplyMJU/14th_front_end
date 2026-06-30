import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import type { DiaryItem, EditorInput } from "../types";
import { emotionList } from "../util/constants";
import { getStringedDate } from "../util/get-stringed-date";
import Button from "./Button";
import EmotionItem from "./EmotionItem";
import "./Editor.css";

type EditorProps = {
  initData?: DiaryItem | null;
  onSubmit: (input: EditorInput) => void;
};

const Editor = ({ initData, onSubmit }: EditorProps) => {
  const nav = useNavigate();

  const [input, setInput] = useState<{
    createdDate: string;
    emotionId: number;
    content: string;
  }>({
    createdDate: getStringedDate(new Date()),
    emotionId: 3,
    content: "",
  });

  // 수정 시 기존 데이터로 초기화
  useEffect(() => {
    if (initData) {
      setInput({
        createdDate: getStringedDate(new Date(initData.createdDate)),
        emotionId: initData.emotionId,
        content: initData.content,
      });
    }
  }, [initData]);

  const onChangeDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput((prev) => ({ ...prev, createdDate: e.target.value }));
  };

  const onClickEmotion = (emotionId: number) => {
    setInput((prev) => ({ ...prev, emotionId }));
  };

  const onChangeContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput((prev) => ({ ...prev, content: e.target.value }));
  };

  const handleSubmit = () => {
    onSubmit({
      createdDate: new Date(input.createdDate),
      emotionId: input.emotionId,
      content: input.content,
    });
  };

  return (
    <div className="Editor">
      {/* 날짜 섹션 */}
      <section className="editor_section">
        <h4>오늘의 날짜</h4>
        <input
          type="date"
          value={input.createdDate}
          onChange={onChangeDate}
        />
      </section>

      {/* 감정 섹션 */}
      <section className="editor_section">
        <h4>오늘의 감정</h4>
        <div className="editor_emotion_list">
          {emotionList.map((emotion) => (
            <EmotionItem
              key={emotion.emotionId}
              {...emotion}
              isSelected={input.emotionId === emotion.emotionId}
              onClick={onClickEmotion}
            />
          ))}
        </div>
      </section>

      {/* 내용 섹션 */}
      <section className="editor_section">
        <h4>오늘의 일기</h4>
        <textarea
          className="editor_content"
          placeholder="오늘은 어떤 하루였나요?"
          value={input.content}
          onChange={onChangeContent}
        />
      </section>

      {/* 버튼 섹션 */}
      <section className="editor_button_section">
        <Button text="취소" onClick={() => nav(-1)} />
        <Button text="작성완료" type="POSITIVE" onClick={handleSubmit} />
      </section>
    </div>
  );
};

export default Editor;
