import { useState } from "react";
import useUser from "../hooks/useUser";

function UserProfile() {
    const { user, isLoading, login, logout, updateUser } = useUser();

    const [userId, setUserId] = useState("");

    const [newAge, setNewAge] = useState("");

    if (isLoading) {
        return <h2>로딩 중...</h2>;
    }

    if (!user) {
        return (
        <div>
            <h2>로그인</h2>

            <input
                type="number"
                placeholder="유저 ID 입력"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
            />

            <button onClick={() => login(Number(userId))}>
            로그인
            </button>
        </div>
        );
    }

    return (
        <div>
        <h2>유저 프로필</h2>

        <p>이름: {user.name}</p>
        <p>이메일: {user.email}</p>
        <p>나이: {user.age}</p>

        <input
            type="number"
            value={newAge}
            onChange={(e) => setNewAge(e.target.value)}
            placeholder="새 나이 입력"
        />

        <button
        onClick={() => {
            updateUser({
            age: Number(newAge),
            });

            setNewAge("");
        }}
        >
        나이 변경
        </button>

        <button onClick={logout}>
            로그아웃
        </button>
        </div>
    );
}

export default UserProfile;