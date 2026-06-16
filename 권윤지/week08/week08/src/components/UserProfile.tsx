import { useState } from "react";
import { useUser } from "../hooks/useUser";

function UserProfile() {
  const { user, isLoading, login, logout, updateUser } = useUser();
  const [userId, setUserId] = useState("");
  const [age, setAge] = useState("");

  const handleLogin = () => {
    const id = Number(userId);

    if (!id) {
      alert("ID를 입력하세요.");
      return;
    }

    login(id);
  };

  const handleUpdateAge = () => {
    const newAge = Number(age);

    if (!newAge) {
      alert("나이를 입력하세요.");
      return;
    }

    updateUser({ age: newAge });
    setAge("");
  };

  if (isLoading) {
    return <p className="loading">~로딩 중~</p>;
  }

  if (user === null) {
    return (
      <section className="card">
        <h2>Login</h2>

        <div className="form-row">
          <input
            type="number"
            placeholder="ID를 입력하세요."
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />

          <button onClick={handleLogin}>로그인</button>
        </div>
      </section>
    );
  }

  return (
    <section className="card">
      <h2>User Profile</h2>

      <div className="profile-info">
        <p>
          <strong>ID </strong>
          <span>{user.id}</span>
        </p>
        <p>
          <strong>이름 </strong>
          <span>{user.name}</span>
        </p>
        <p>
          <strong>이메일 </strong>
          <span>{user.email}</span>
        </p>
        <p>
          <strong>나이 </strong>
          <span>{user.age}</span>
        </p>
      </div>

      <div className="form-row">
        <input
          type="number"
          placeholder="나이를 입력하세요."
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />

        <button onClick={handleUpdateAge}>수정</button>
      </div>

      <button className="logout-button" onClick={logout}>
        로그아웃
      </button>
    </section>
  );
}

export default UserProfile;