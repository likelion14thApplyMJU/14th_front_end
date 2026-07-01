import { useState } from "react";
import { useUser } from "../hooks/useUser";

const UserProfile = () => {
  const { user, isLoading, login, logout, updateUser } = useUser();
  const [inputId, setInputId] = useState<string>("");

  const handleLogin = () => {
    const id = Number(inputId);
    if (!id) return;
    login(id);
  };

  const handleUpdateAge = () => {
    if (!user) return;
    updateUser({ age: user.age + 1 });
  };

  if (isLoading) {
    return <p>로딩 중...</p>;
  }

  if (!user) {
    return (
      <div>
        <input
          type="number"
          placeholder="유저 id 입력 (1~10)"
          value={inputId}
          onChange={(e) => setInputId(e.target.value)}
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
      <button onClick={handleUpdateAge}>나이 +1</button>
      <button onClick={logout}>로그아웃</button>
    </div>
  );
};

export default UserProfile;