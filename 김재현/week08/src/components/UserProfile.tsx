import useUser from "../hooks/useUser";
import { useState } from "react";

function UserProfile() {
    const { user, isLoading, login, logout, updateUser } = useUser();
    const [inputId, setInputId] = useState("");

    if(isLoading) {
        return <p>로딩 중 ...</p>;
    } 
    if (user === null){
        return (
        <div>
            <input value={inputId} onChange={(e) => setInputId(e.target.value)}/>
            <button onClick={() => login(Number(inputId))}>로그인</button>
        </div>
    );
    }
    return (
        <div>
            <p>이름: {user.name}</p>
            <p>이메일: {user.email}</p>
            <p>나이: {user.age}</p>
            <button onClick={logout}>로그아웃</button>
            <button onClick={() => updateUser({age: user.age + 1})}>나이+1</button>
        </div>
        );
}

export default UserProfile;