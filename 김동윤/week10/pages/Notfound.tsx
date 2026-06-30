import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const Notfound = () => {
  const nav = useNavigate();

  return (
    <div style={{ textAlign: "center", padding: "80px 20px" }}>
      <div style={{ fontSize: "4rem", marginBottom: "20px" }}>😵</div>
      <h2 style={{ fontSize: "1.4rem", marginBottom: "10px", color: "#333" }}>
        페이지를 찾을 수 없어요
      </h2>
      <p style={{ color: "#888", marginBottom: "30px", lineHeight: "1.6" }}>
        잘못된 주소로 접근하셨습니다.
      </p>
      <Button text="홈으로 돌아가기" type="POSITIVE" onClick={() => nav("/")} />
    </div>
  );
};

export default Notfound;
