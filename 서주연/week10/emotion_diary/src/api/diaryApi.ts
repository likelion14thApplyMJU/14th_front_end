import axios from "axios";

export type Diary = {
    id: number;
    createdDate: number;
    emotionId: number;
    content: string;
};

export type DiaryRequest = {
    createdDate: number;
    emotionId: number;
    content: string;
};

export type DeleteDiaryResponse = {
    additionalProp1: string;
    additionalProp2: string;
    additionalProp3: string;
};

const api = axios.create({
    baseURL:"http://3.34.8.218:8080",
});

export const createDiary = async (data: DiaryRequest) => {
    const res = await api.post<Diary>("/api/diaries", data);
    return res.data;
};

export const getDiaries = async (month: string) => {
    const res = await api.get<Diary[]>("/api/diaries", {
        params: { month },
    });
    return res.data;
};

export const updateDiary = async (id: number, data: DiaryRequest) => {
    const res = await api.put<Diary>(`/api/diaries/${id}`, data);
    return res.data;
};

export const deleteDiary = async (id:number) => {
    const res = await api.delete<DeleteDiaryResponse>(`/api/diaries/${id}`);
    return res.data;
};