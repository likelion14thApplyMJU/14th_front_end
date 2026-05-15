// ### 1. 구조 분해 할당으로 변수 추출하기
// 아래 객체에서 구조 분해 할당을 사용해 `name`, `age`, `city`를 변수로 꺼내고 출력하는 코드를 작성하세요.

const person = {
  name: "강아지",
  age: 22,
  address: {
    city: "서울",
    street: "강남구",
  },
};

// 구조 분해 할당으로 name, age, city 꺼내기

const { name, age, address : {city, street} } = person;

console.log(name);
console.log(age);
console.log(city);

// ***************************************************************************************

// ### 2. 스프레드 연산자로 배열 합치기
// 아래 두 배열을 스프레드 연산자를 사용해 하나로 합치는 코드를 작성하세요.

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// 스프레드 연산자 사용
const combined = [...arr1, ...arr2]

console.log(combined); // [1, 2, 3, 4, 5, 6]

// ***************************************************************************************

// ### 3. 콜백 함수 작성하기
// executeAfter 함수는 숫자와 콜백 함수를 받아서, 숫자가 양수일 때만 콜백 함수를 실행합니다. 아래 코드를 완성하세요.

function executeAfter(num, callback) {
  if (num > 0) {
    callback();
  }
}

executeAfter(5, () => console.log("양수입니다!"));  // 실행됨
executeAfter(-3, () => console.log("양수입니다!")); // 실행 안 됨

// ***************************************************************************************

// ### 4. 고차 함수 활용하기
// 아래 배열을 사용해서 각 문제를 고차 함수로 풀어보세요.

const scores = [45, 82, 90, 33, 76, 58, 91, 60];

// filter를 사용해 60점 이상인 점수만 골라내세요
const highsixty = scores.filter((num) => num >= 60);
console.log(highsixty)

// map을 사용해 모든 점수에 5점을 더한 새 배열을 만드세요
const plusfive = scores.map((num) => num + 5);
console.log(plusfive);

// reduce를 사용해 모든 점수의 합계를 구하세요
const total = scores.reduce((acc, cur) => acc + cur, 0);
console.log(total);

// ***************************************************************************************

// ### 5. DOM 조작하기
// 아래 HTML을 기반으로 Javascript 코드를 작성하세요.
// <h1 id="title">원래 제목</h1>
// <button id="changeBtn">제목 바꾸기</button>
// 버튼을 클릭하면 h1의 텍스트가 “제목이 바뀌었습니다!”로 변경되도록 addEventListener를 사용해 코드를 작성하세요.

const title = document.getElementById("title");

const changeBtn = document.getElementById("changeBtn");

changeBtn.addEventListener("click", () => {
    title.textContent = "제목이 바뀌었습니다!";
})

// ***************************************************************************************

// ### 6. Axios로 데이터 가져오기
// 아래 URL에서 async/await와 try/catch를 사용해 데이터를 가져오고 콘솔에 출력하는 코드를 작성하세요.
// URL: https://jsonplaceholder.typicode.com/posts/1

async function fetchPost() {
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
        console.log(response.data);
    } catch (error) {
        console.log(error);
    }
}

fetchPost();

// ***************************************************************************************

// ### 7. localStorage 활용하기
// 아래 조건에 맞게 코드를 작성하세요.

// - prompt()로 이름을 입력받아 localStorage에 저장하세요.
// - 저장된 이름을 불러와서 안녕하세요, OOO님! 형태로 alert()에 출력하세요.
// - 이름을 저장할 때 localStorage에 이미 이름이 있다면, 저장하지 않고 기존 이름을 그대로 사용하세요.

let storedname = localStorage.getItem("username");

if (!storedname) {
    storedname = prompt("이름을 입력하세요");
    localStorage.setItem("username", storedname);
}

alert(`안녕하세요, ${storedname}님!`);
