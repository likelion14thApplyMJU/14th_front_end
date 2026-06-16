import { useEffect, useState } from "react";

type User = {
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
  const [isLoading, setIsLoading] = useState(false);

  const login = async (id: number) => {
    setIsLoading(true);

    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );

      const data = await response.json();

      const loginUser: User = {
        id: data.id,
        name: data.name,
        email: data.email,
        age: 0,
        isLoggedIn: true,
      };

      setUser(loginUser);
    } catch (error) {
      console.error("정보를 불러오지 못했습니다.", error);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
  };

  const updateUser = (updated: Partial<User>) => {
    setUser((prevUser) => {
      if (prevUser === null) {
        return null;
      }

      return {
        ...prevUser,
        ...updated,
      };
    });
  };

  useEffect(() => {
    console.log("현재 유저 정보:", user);
  }, [user]);

  return {
    user,
    isLoading,
    login,
    logout,
    updateUser,
  };
}