import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

type DiaryRequest = {
  createdDate: number;
  emotionId: number;
  content: string;
};

// 일기 생성
export const createDiary = async (data: DiaryRequest) => {
  const res = await axios.post(BASE_URL, data);
  return res.data;
};

// 일기 수정
export const updateDiary = async (id: number | string, data: DiaryRequest) => {
  const res = await axios.put(`${BASE_URL}/${id}`, data);
  return res.data;
};

// 일기 삭제
export const deleteDiary = async (id: number | string) => {
  const res = await axios.delete(`${BASE_URL}/${id}`);
  return res.data;
};