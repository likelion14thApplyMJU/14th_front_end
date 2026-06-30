import { useContext, useState } from "react";
import { DiaryStateContext } from "../contexts";
import type { DiaryItem } from "../types";
import Button from "../components/Button";
import Header from "../components/Header";
import DiaryList from "../components/DiaryList";

// 해당 월의 일기만 필터링
const getMonthlyData = (pivotDate: Date, data: DiaryItem[]): DiaryItem[] => {
  return data.filter((item) => {
    const d = new Date(item.createdDate);
    return (
      d.getFullYear() === pivotDate.getFullYear() &&
      d.getMonth()    === pivotDate.getMonth()
    );
  });
};

const Home = () => {
  const data = useContext(DiaryStateContext) ?? [];
  const [pivotDate, setPivotDate] = useState<Date>(new Date());

  const monthlyData = getMonthlyData(pivotDate, data);

  const onDecreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
  };

  const onIncreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
  };

  return (
    <div>
      <Header
        title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`}
        leftChild={<Button text="<" onClick={onDecreaseMonth} />}
        rightChild={<Button text=">" onClick={onIncreaseMonth} />}
      />
      <DiaryList data={monthlyData} />
    </div>
  );
};

export default Home;
