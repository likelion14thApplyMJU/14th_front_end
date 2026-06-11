import { useState, useEffect } from "react";

// 유저 정보 타입
export type User = {
  id: number;
  name: string;
  email: string;
  age: number;
  isLoggedIn: boolean;
};

// const MOCK_USERS: User[] = [
//   { id: 1, name: "민서", email: "minseo@im.com",     age: 23, isLoggedIn: false },
//   { id: 2, name: "윤진", email: "yunjin@best.com",   age: 22, isLoggedIn: false },
//   { id: 3, name: "현준", email: "hyunjoon@of.com",   age: 21, isLoggedIn: false },
//   { id: 4, name: "승민", email: "seungmin@best.com", age: 20, isLoggedIn: false },
//   { id: 5, name: "승완", email: "seungwan@haha.com", age: 99, isLoggedIn: false },
// ];

// useUser가 반환해야 하는 값의 타입
type UseUserReturn = {
  user: User | null;        // 현재 유저 정보 (로그아웃 상태면 null)
  isLoading: boolean;       // 유저 정보를 불러오는 중인지 여부
  login: (id: number) => void;   // id를 받아 해당 유저로 로그인
  logout: () => void;            // 로그아웃
  updateUser: (updated: Partial<User>) => void; // 유저 정보 일부 수정
};

function useUser() : UseUserReturn {  
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const login = async (id: number) => {
      setIsLoading(true);
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        const data = await response.json();
        setUser({id: data.id, name: data.name, email: data.email, age: 0, isLoggedIn : true});
      } catch (e) {
        console.error("로그인 처리 중 오류:", e);
      } finally {
        setIsLoading(false);
      }
  };

  const logout = () => {
    setUser(null);  
  };

  const updateUser = (updated: Partial<User>) => {
    setUser((prev) => (prev ? {...prev,...updated} : prev));
  }

  useEffect(() => {
    console.log(user);
  },[user]);

  return {
    user,
    isLoading,
    login,
    logout,
    updateUser
  }
}

export default useUser;
