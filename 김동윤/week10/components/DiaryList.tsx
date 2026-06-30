import { useState, type ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import type { DiaryItem } from "../types";
import Button from "./Button";
import DiaryItemComp from "./DiaryItem";
import "./DiaryList.css";

type DiaryListProps = {
  data: DiaryItem[];
};

const DiaryList = ({ data }: DiaryListProps) => {
  const nav = useNavigate();
  const [sortType, setSortType] = useState<"latest" | "oldest">("latest");

  const onChangeSortType = (e: ChangeEvent<HTMLSelectElement>) => {
    setSortType(e.target.value as "latest" | "oldest");
  };

  const getSortedData = () => {
    return [...data].sort((a, b) => {
      if (sortType === "latest") return b.createdDate - a.createdDate;
      else return a.createdDate - b.createdDate;
    });
  };

  const sortedData = getSortedData();

  return (
    <div className="DiaryList">
      <div className="list_header">
        <select onChange={onChangeSortType} value={sortType}>
          <option value="latest">최신순</option>
          <option value="oldest">오래된 순</option>
        </select>
        <Button
          text="새 일기 쓰기"
          type="POSITIVE"
          onClick={() => nav("/new")}
        />
      </div>

      <div className="list_wrapper">
        {sortedData.length === 0 ? (
          <div className="list_empty">
            아직 작성된 일기가 없어요 😊
            <br />
            오늘의 감정을 기록해보세요!
          </div>
        ) : (
          sortedData.map((item) => (
            <DiaryItemComp key={item.id} {...item} />
          ))
        )}
      </div>
    </div>
  );
};

export default DiaryList;
