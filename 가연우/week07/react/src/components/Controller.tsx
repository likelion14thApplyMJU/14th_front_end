interface ControllerProps {
  onChangeCount: (value: number) => void;
}

const Controller = ({ onChangeCount }: ControllerProps) => {

  return (
    <section>
      <button onClick={() => onChangeCount(-10)}>-10</button>
      <button onClick={() => onChangeCount(-1)}>-1</button>
      <button onClick={() => onChangeCount(+1)}>+1</button>
      <button onClick={() => onChangeCount(+10)}>+10</button>
    </section>
  );
};

export default Controller;