import { useState } from 'react';
import { useUser } from '../hooks/useUser';

export const UserProfile = () => {
  const { user, isLoading, login, logout, updateUser } = useUser();
  const [inputId, setInputId] = useState<string>('');

  // 로딩 중이면 "로딩 중..." 을 표시하세요.
  if (isLoading) {
    return <div>로딩 중...</div>;
  }

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px', width: '320px' }}>
      {/* 로그아웃 상태 (user === null) 면 id를 입력할 수 있는 input과 "로그인" 버튼을 표시 */}
      {user === null ? (
        <form 
          onSubmit={(e) => {
            e.preventDefault(); // FormEvent 에러 우회 및 기본 브라우저 새로고침 차단
            const idNum = parseInt(inputId, 10);
            if (!isNaN(idNum)) {
              login(idNum);
            }
          }}
        >
          <p style={{ color: '#666' }}>로그아웃 상태입니다.</p>
          <input
            type="number"
            placeholder="유저 ID 입력 (1~5)"
            value={inputId}
            onChange={(e) => setInputId(e.target.value)}
            style={{ marginRight: '8px', padding: '6px' }}
          />
          <button type="submit">로그인</button>
        </form>
      ) : (
        /* 로그인 상태면 유저의 name, email, age 를 표시하고 "로그아웃" 버튼과 나이를 수정할 수 있는 버튼을 표시 */
        <div>
          <h3>회원 정보</h3>
          <div style={{ lineHeight: '1.6', marginBottom: '15px' }}>
            <p><strong>이름:</strong> {user.name}</p>
            <p><strong>이메일:</strong> {user.email}</p>
            <p><strong>나이:</strong> {user.age}세</p>
          </div>
          
          <button 
            onClick={() => updateUser({ age: user.age + 1 })} 
            style={{ marginRight: '8px', padding: '6px 12px' }}
          >
            나이 수정 (+1)
          </button>
          <button onClick={logout} style={{ padding: '6px 12px' }}>
            로그아웃
          </button>
        </div>
      )}
    </div>
  );
};