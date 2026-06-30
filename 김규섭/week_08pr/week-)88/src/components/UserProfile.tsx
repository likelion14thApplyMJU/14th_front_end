import { useState } from "react";
import { useUser } from "../hooks/useUser";

export function UserProfile() {
  const { user, isLoading, login, logout, updateUser } = useUser();
  const [inputId, setInputId] = useState("");

  
  if (isLoading) {
    return <p>로딩 중...</p>;
  }

  
  if (user === null) {
    const handleLogin = () => {
      const id = Number(inputId);
      if (inputId.trim() === "" || Number.isNaN(id)) {
        alert("올바른 id를 입력하세요.");
        return;
      }
      login(id);
      setInputId("");
    };

    return (
      <div>
        <input
          type="number"
          value={inputId}
          onChange={(e) => setInputId(e.target.value)}
          placeholder="id를 입력하세요"
        />
        <button onClick={handleLogin}>로그인</button>
      </div>
    );
  }

 
  return (
    <div>
      <p>이름: {user.name}</p>
      <p>이메일: {user.email}</p>
      <p>나이: {user.age}</p>
      <button onClick={() => updateUser({ age: user.age + 1 })}>
        나이 +1
      </button>
      <button onClick={logout}>로그아웃</button>
    </div>
  );
}
