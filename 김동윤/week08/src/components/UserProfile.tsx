import { useState } from "react";
import { useUser } from "../hooks/useUser";

export default function UserProfile() {
  const { user, isLoading, login, logout, updateUser } = useUser();
  const [inputId, setInputId] = useState("");

  if (isLoading) return <p>로딩 중...</p>;

  if (!user) {
    return (
      <div>
        <input
          type="number"
          value={inputId}
          onChange={(e) => setInputId(e.target.value)}
          placeholder="유저 ID (1~10)"
        />
        <button onClick={() => login(Number(inputId))}>로그인</button>
      </div>
    );
  }

  return (
    <div>
      <p>이름: {user.name}</p>
      <p>이메일: {user.email}</p>
      <p>나이: {user.age}</p>
      <button onClick={() => updateUser({ age: user.age + 1 })}>나이 +1</button>
      <button onClick={() => updateUser({ age: user.age - 1 })}>나이 -1</button>
      <button onClick={logout}>로그아웃</button>
    </div>
  );
}