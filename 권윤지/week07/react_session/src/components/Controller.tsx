type ControllerProps = {
  onClickButton: (value: number) => void; // 숫자 값을 전달받아 count 값을 변경
};

const Controller = ({ onClickButton }: ControllerProps) => { // count 값을 조작하는 버튼을 렌더링
  return (
    <section className="controller">
      <button onClick={() => onClickButton(-1)}>-1</button> // 각 버튼 클릭 시 해당 함수 실행
      <button onClick={() => onClickButton(-10)}>-10</button>
      <button onClick={() => onClickButton(-100)}>-100</button>
      <button onClick={() => onClickButton(100)}>+100</button>
      <button onClick={() => onClickButton(10)}>+10</button>
      <button onClick={() => onClickButton(1)}>+1</button>
    </section>
  );
};

export default Controller;