import type { DiaryItem } from "../types";

// ─────────────────────────────────────────────────────────────
// 데이터 소스 계층 (Data Source Layer)
//
// 지금은 localStorage를 데이터 소스로 사용한다.
// 하지만 외부로 노출하는 함수 시그니처는 모두 Promise 기반(async)이라
// "서버에 요청을 보내는 것"과 동일한 모양을 가진다.
//
// 나중에 실제 백엔드가 생기면 이 파일의 read/write 내부만
// axios.get / axios.post 등으로 교체하면 되고,
// 이 함수들을 사용하는 컴포넌트 코드는 한 줄도 바꿀 필요가 없다.
//   예) const res = await axios.get("/diaries"); return res.data;
// ─────────────────────────────────────────────────────────────

const STORAGE_KEY = "diary";

// 내부 헬퍼 — 외부로 export 하지 않는다 (구현 세부사항)
const read = (): DiaryItem[] => {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return [];

  const parsed: unknown = JSON.parse(raw);
  return Array.isArray(parsed) ? (parsed as DiaryItem[]) : [];
};

const write = (items: DiaryItem[]): void => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
};

// 서버였다면 서버가 부여했을 id를 흉내낸다.
const nextId = (items: DiaryItem[]): number =>
  items.reduce((max, item) => Math.max(max, Number(item.id)), 0) + 1;

// 생성 요청 시 클라이언트가 보내는 본문 (id 없음 — id는 "서버"가 부여)
export type DiaryInput = {
  createdDate: number;
  emotionId: number;
  content: string;
};

// GET /diaries
export const getDiaries = async (): Promise<DiaryItem[]> => {
  return read();
};

// POST /diaries  → 생성된 항목(id 포함)을 반환
export const createDiary = async (input: DiaryInput): Promise<DiaryItem> => {
  const items = read();
  const created: DiaryItem = { id: nextId(items), ...input };

  write([created, ...items]);
  return created;
};

// PUT /diaries/:id  → 수정된 항목을 반환
export const updateDiary = async (item: DiaryItem): Promise<DiaryItem> => {
  const items = read();
  const next = items.map((it) =>
    String(it.id) === String(item.id) ? item : it
  );

  write(next);
  return item;
};

// DELETE /diaries/:id
export const deleteDiary = async (id: number | string): Promise<void> => {
  const items = read();
  write(items.filter((it) => String(it.id) !== String(id)));
};
