import { createContext } from "react";
import type { DiaryItem, DispatchContextType } from "./types";

export const DiaryStateContext    = createContext<DiaryItem[] | null>(null);
export const DiaryDispatchContext = createContext<DispatchContextType | null>(null);
