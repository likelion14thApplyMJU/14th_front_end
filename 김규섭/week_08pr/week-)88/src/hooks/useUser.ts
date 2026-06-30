import { useState, useEffect } from "react";


export type User = {
  id: number;
  name: string;
  email: string;
  age: number;
  isLoggedIn: boolean;
};


type UseUserReturn = {
  user: User | null; 
  isLoading: boolean; 
  login: (id: number) => void; 
  logout: () => void; 
  updateUser: (updated: Partial<User>) => void; 
};

export function useUser(): UseUserReturn {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);


  const login = async (id: number) => {
    setIsLoading(true); 
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );

      if (!res.ok) {
        throw new Error(`요청 실패 (status: ${res.status})`);
      }

      const data = await res.json();

      setUser({
        id: data.id,
        name: data.name,
        email: data.email,
        age: 0,
        isLoggedIn: true,
      });
    } catch (error) {
      console.error("로그인 중 오류가 발생했습니다:", error);
      setUser(null);
    } finally {
      setIsLoading(false); 
    }
  };

  
  const logout = () => {
    setUser(null);
  };

 
  const updateUser = (updated: Partial<User>) => {
    setUser((prev) => (prev ? { ...prev, ...updated } : prev));
  };

 
  useEffect(() => {
    console.log("현재 유저 정보:", user);
  }, [user]);

  return { user, isLoading, login, logout, updateUser };
}