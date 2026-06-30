import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DiaryStateContext } from "../contexts";
import type { DiaryItem } from "../types";

const useDiary = (id: string | undefined): DiaryItem | null => {
  const data = useContext(DiaryStateContext);
  const nav  = useNavigate();

  const found = data?.find((item) => String(item.id) === String(id)) ?? null;

  useEffect(() => {
    if (!data) return;

    if (!found) {
      alert("존재하지 않는 일기입니다!");
      nav("/", { replace: true });
    }
  }, [id, data, found, nav]);

  return found;
};

export default useDiary;
