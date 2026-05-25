type ControllerProps = {
  onClickButton: (value: number) => void;
};

const Controller = ({ onClickButton }: ControllerProps) => {
  return (
    <section className="controller">
      <h2>카운트 조작</h2>

      <div className="button-group">
        <button onClick={() => onClickButton(-1)}>-1</button>
        <button onClick={() => onClickButton(1)}>+1</button>
      </div>
    </section>
  );
};

export default Controller;