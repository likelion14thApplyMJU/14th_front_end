import { useEffect, useReducer, useRef } from "react";
import { Route, Routes } from "react-router-dom";

import type { DiaryItem, Action } from "./types";
import { createDiary, updateDiary, deleteDiary } from "./api/diaryApi";
import { DiaryStateContext, DiaryDispatchContext } from "./contexts";

import Home     from "./pages/Home";
import New      from "./pages/New";
import Diary    from "./pages/Diary";
import Edit     from "./pages/Edit";
import Notfound from "./pages/Notfound";

// ─── Reducer ──────────────────────────────────────────────
function reducer(state: DiaryItem[], action: Action): DiaryItem[] {
  let nextState: DiaryItem[];

  switch (action.type) {
    case "INIT":
      return action.data;

    case "CREATE":
      nextState = [action.data, ...state];
      break;

    case "UPDATE":
      nextState = state.map((item) =>
        String(item.id) === String(action.data.id) ? action.data : item
      );
      break;

    case "DELETE":
      nextState = state.filter(
        (item) => String(item.id) !== String(action.id)
      );
      break;

    default:
      return state;
  }

  localStorage.setItem("diary", JSON.stringify(nextState));
  return nextState;
}

// ─── App ──────────────────────────────────────────────────
function App() {
  const [data, dispatch] = useReducer(reducer, []);
  const idRef            = useRef<number>(0);

  useEffect(() => {
    const stored = localStorage.getItem("diary");
    if (!stored) return;

    const parsed: DiaryItem[] = JSON.parse(stored);
    if (parsed.length > 0) {
      idRef.current = Math.max(...parsed.map((item) => Number(item.id))) + 1;
    }
    dispatch({ type: "INIT", data: parsed });
  }, []);

  const onCreate = async (
    createdDate: number,
    emotionId: number,
    content: string
  ) => {
    try {
      await createDiary({ createdDate, emotionId, content });
      dispatch({
        type: "CREATE",
        data: { id: idRef.current++, createdDate, emotionId, content },
      });
    } catch (error) {
      console.error("일기 생성 실패:", error);
      alert("일기 저장에 실패했어요. 다시 시도해주세요.");
    }
  };

  const onUpdate = async (
    id: number | string,
    createdDate: number,
    emotionId: number,
    content: string
  ) => {
    try {
      await updateDiary(id, { createdDate, emotionId, content });
      dispatch({
        type: "UPDATE",
        data: { id, createdDate, emotionId, content },
      });
    } catch (error) {
      console.error("일기 수정 실패:", error);
      alert("일기 수정에 실패했어요. 다시 시도해주세요.");
    }
  };

  const onDelete = async (id: number | string) => {
    try {
      await deleteDiary(id);
      dispatch({ type: "DELETE", id });
    } catch (error) {
      console.error("일기 삭제 실패:", error);
      alert("일기 삭제에 실패했어요. 다시 시도해주세요.");
    }
  };

  return (
    <DiaryStateContext.Provider value={data}>
      <DiaryDispatchContext.Provider value={{ onCreate, onUpdate, onDelete }}>
        <div className="App">
          <Routes>
            <Route path="/"          element={<Home />}     />
            <Route path="/new"       element={<New />}      />
            <Route path="/diary/:id" element={<Diary />}    />
            <Route path="/edit/:id"  element={<Edit />}     />
            <Route path="*"          element={<Notfound />} />
          </Routes>
        </div>
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
  );
}

export default App;
