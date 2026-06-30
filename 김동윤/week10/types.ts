export type DiaryItem = {
  id: number | string;
  createdDate: number;
  emotionId: number;
  content: string;
};

export type Action =
  | { type: "INIT"; data: DiaryItem[] }
  | { type: "CREATE"; data: DiaryItem }
  | { type: "UPDATE"; data: DiaryItem }
  | { type: "DELETE"; id: number | string };

export type DispatchContextType = {
  onCreate: (createdDate: number, emotionId: number, content: string) => Promise<void>;
  onUpdate: (id: number | string, createdDate: number, emotionId: number, content: string) => Promise<void>;
  onDelete: (id: number | string) => Promise<void>;
};

export type EditorInput = {
  createdDate: Date;
  emotionId: number;
  content: string;
};
