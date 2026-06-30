import "./App.css"
import { useReducer, createContext, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Diary from "./pages/Diary";
import New from "./pages/New";
import Edit from "./pages/Edit";
import Notfound from "./pages/Notfound";

import type { DiaryItem } from "./types";
import { getDiaries, createDiary, updateDiary, deleteDiary } from "./api/diaryApi";

type Action =
  | {
      type: "INIT";
      data: DiaryItem[];
    }
  | {
      type: "CREATE";
      data: DiaryItem;
    }
  | {
      type: "UPDATE";
      data: DiaryItem;
    }
  | {
      type: "DELETE";
      id: number | string;
    };

type DispatchContextType = {
  onCreate: (
    createdDate: number,
    emotionId: number,
    content: string
  ) => Promise<void>;
  onUpdate: (
    id: number | string,
    createdDate: number,
    emotionId: number,
    content: string
  ) => Promise<void>;
  onDelete: (id: number | string) => Promise<void>;
};

// reducer는 다음 state만 계산하는 순수 함수다.
// localStorage 저장(부수효과)은 API 계층(diaryApi.ts)으로 옮겼다.
function reducer(state: DiaryItem[], action: Action): DiaryItem[] {
  switch (action.type) {
    case "INIT":
      return action.data;

    case "CREATE":
      return [action.data, ...state];

    case "UPDATE":
      return state.map((item) =>
        String(item.id) === String(action.data.id) ? action.data : item
      );

    case "DELETE":
      return state.filter((item) => String(item.id) !== String(action.id));

    default:
      return state;
  }
}

export const DiaryStateContext = createContext<DiaryItem[] | null>(null);

export const DiaryDispatchContext =
  createContext<DispatchContextType | null>(null);

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [data, dispatch] = useReducer(reducer, []);

  // 초기 데이터: "서버"에서 불러온다.
  useEffect(() => {
    const init = async () => {
      try {
        const diaries = await getDiaries();
        dispatch({ type: "INIT", data: diaries });
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    init();
  }, []);

  // 생성: API에 요청 → 성공 시 응답(id 포함)으로 state 갱신
  const onCreate = async (
    createdDate: number,
    emotionId: number,
    content: string
  ) => {
    const created = await createDiary({ createdDate, emotionId, content });
    dispatch({ type: "CREATE", data: created });
  };

  const onUpdate = async (
    id: number | string,
    createdDate: number,
    emotionId: number,
    content: string
  ) => {
    const updated = await updateDiary({ id, createdDate, emotionId, content });
    dispatch({ type: "UPDATE", data: updated });
  };

  const onDelete = async (id: number | string) => {
    await deleteDiary(id);
    dispatch({ type: "DELETE", id });
  };

  if (isLoading) {
    return <div>데이터 로딩중입니다 ...</div>;
  }

  return (
    <DiaryStateContext.Provider value={data}>
      <DiaryDispatchContext.Provider value={{ onCreate, onUpdate, onDelete }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<New />} />
          <Route path="/diary/:id" element={<Diary />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
  );
}

export default App;
