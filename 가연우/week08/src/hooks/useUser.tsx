import { useState, useEffect, useCallback } from "react";

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

  const login = useCallback(async (id: number) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      const data = await response.json();

      const newUser: User = {
        id: data.id,
        name: data.name,
        email: data.email,
        age: 0,
        isLoggedIn: true,
      };

      setUser(newUser);
    } catch (error) {
      console.error("유저 정보를 불러오는 데 실패했습니다:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const logout = useCallback(() => {
    setUser(null);
  }, []);

  const updateUser = useCallback((updated: Partial<User>) => {
    setUser((prev) => (prev ? { ...prev, ...updated } : prev));
  }, []);

  useEffect(() => {
    console.log("현재 유저 정보:", user);
  }, [user]);

  return { user, isLoading, login, logout, updateUser };
}