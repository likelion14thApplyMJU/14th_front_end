import { useState, useEffect } from 'react';

// 유저 정보 타입 (구현 조건 반영)
export type User = {
  id: number;
  name: string;
  email: string;
  age: number;
  isLoggedIn: boolean;
};

// 유저 데이터 리스트 (제시해주신 MOCK_USERS 반영)
export const MOCK_USERS: User[] = [
  { id: 1, name: "민서", email: "minseo@im.com",   age: 23, isLoggedIn: false },
  { id: 2, name: "윤진", email: "yunjin@best.com",   age: 22, isLoggedIn: false },
  { id: 3, name: "현준", email: "hyunjoon@of.com",   age: 21, isLoggedIn: false },
  { id: 4, name: "승민", email: "seungmin@best.com", age: 20, isLoggedIn: false },
  { id: 5, name: "승완", email: "seungwan@haha.com", age: 99, isLoggedIn: false },
];

// useUser가 반환해야 하는 값의 타입 (구현 조건 반영)
export type UseUserReturn = {
  user: User | null;                             // 현재 유저 정보 (로그아웃 상태면 null)
  isLoading: boolean;                            // 유저 정보를 불러오는 중인지 여부
  login: (id: number) => void;                   // id를 받아 해당 유저로 로그인
  logout: () => void;                            // 로그아웃
  updateUser: (updated: Partial<User>) => void;  // 유저 정보 일부 수정
};

export const useUser = (): UseUserReturn => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // 1. login(id) 호출 시 조건 처리
  const login = async (id: number) => {
    // 조건: 불러오는 동안 isLoading이 true 여야 합니다.
    setIsLoading(true);
    try {
      // 조건: 지정된 URL에서 유저 정보를 가져와 user에 저장
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/{id}`);
      
      if (response.ok) {
        const data = await response.json();
        
        // 조건: 응답 데이터에서 id, name, email만 사용하고, age는 0, isLoggedIn은 true로 초기화
        const loggedInUser: User = {
          id: data.id,
          name: data.name,
          email: data.email,
          age: 0,
          isLoggedIn: true,
        };
        setUser(loggedInUser);
      } else {
        // 백업 로직: API 응답에 실패할 경우 MOCK_USERS 데이터에서 id를 검색하여 처리
        const mockUser = MOCK_USERS.find((u) => u.id === id);
        if (mockUser) {
          setUser({
            id: mockUser.id,
            name: mockUser.name,
            email: mockUser.email,
            age: 0, // 조건 준수: age는 0으로 초기화
            isLoggedIn: true, // 조건 준수: isLoggedIn은 true로 초기화
          });
        } else {
          alert('존재하지 않는 유저 ID입니다. (1~5 사이 입력 시 Mock 데이터 작동)');
        }
      }
    } catch (error) {
      console.error(error);
      // 네트워크 에러 시에도 MOCK_USERS에서 매핑 작동하도록 예외 처리
      const mockUser = MOCK_USERS.find((u) => u.id === id);
      if (mockUser) {
        setUser({ id: mockUser.id, name: mockUser.name, email: mockUser.email, age: 0, isLoggedIn: true });
      }
    } finally {
      setIsLoading(false);
    }
  };

  // 2. logout() 호출 시 조건 처리
  const logout = () => {
    setUser(null);
  };

  // 3. updateUser(updated) 호출 시 조건 처리
  const updateUser = (updated: Partial<User>) => {
    setUser((prevUser) => {
      if (!prevUser) return null;
      return { ...prevUser, ...updated };
    });
  };

  // 4. useEffect 조건 처리
  useEffect(() => {
    console.log('현재 유저 정보:', user);
  }, [user]);

  return { user, isLoading, login, logout, updateUser };
};