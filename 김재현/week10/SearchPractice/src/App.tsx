import { useState, useEffect, useRef } from "react";

const USERS: string[] = [
  "맹구", "유리", "철수", "짱구",
  "수지", "치타", "훈이",
];

function App() {

  const [filteredUsers, setFilteredUsers] = useState<string[]>(USERS);
  const [inputText, setInputText] = useState<string>("");

  const textChangeHandler = (e : React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setInputText(inputValue)
    // setFilteredUsers(USERS.filter(name => name.includes(inputValue)));
  }

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFilteredUsers(USERS.filter(name => name.includes(inputText)));
    }, 300);

    return () => clearTimeout(timer);

  },[inputText]);

  useEffect(() => {
    inputRef.current?.focus()
;  }, [])

    return (
      <div>
        <input ref={inputRef} value={inputText} onChange={textChangeHandler}/>
        {filteredUsers.length === 0 ? <p>검색 결과 없음</p> : <ul>{filteredUsers.map(name => <li key={name}>{name}</li>)}</ul>}
      </div>
    )
  }

export default App;