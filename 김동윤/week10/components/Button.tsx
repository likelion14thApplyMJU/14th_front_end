import "./Button.css";

type ButtonType = "DEFAULT" | "POSITIVE" | "NEGATIVE";

type ButtonProps = {
  text: string;
  type?: ButtonType;
  onClick?: () => void;
};

const Button = ({ text, type = "DEFAULT", onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} className={`Button Button_${type}`}>
      {text}
    </button>
  );
};

export default Button;
