//1번 문제
const person = {
  name: "강아지",
  age: 22,
  address: {
    city: "서울",
    street: "강남구",
  }
};

const {name, age, address: {city}} = person;

//2번 문제
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// 스프레드 연산자 사용
const combined = [...arr1, ...arr2];// 여기를 완성해주세요

console.log(combined); // [1, 2, 3, 4, 5, 6]

//3번 문제
function executeAfter(num, callback) {
  // num이 양수일 때만 callback 실행
  if (num > 0) {
        callback();
  } else {
    console.log('양수를 입력해주세요');
  }
}

executeAfter(5, () => console.log("양수입니다!"));  // 실행됨
executeAfter(-3, () => console.log("양수입니다!")); // 실행 안 됨

//4번 문제
const scores = [45, 82, 90, 33, 76, 58, 91, 60];

const filterTest = scores.filter((num) => num > 60);
const mapTest = scores.map((num) => num + 5);
const reduceTest = scores.reduce((acc, cur) => acc + cur, 0);

console.log(filterTest);
console.log(mapTest);
console.log(reduceTest);

//5번 문제
const title = document.getElementById("title");
const changeBtn = document.getElementById("changeBtn");

changeBtn.addEventListener("click", () => {
    title.textContent = "제목이 바뀌었습니다."
})

//6번 문제
async function fetchPost() {
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
    console.log(response.data);
  } catch (error) {
    console.error("에러 발생:", error);
  }
}

fetchPost();

//7번 문제
// localStorage.removeItem("name");
let savedName = localStorage.getItem("name");

if (savedName) {
  alert(`안녕하세요, ${savedName}님`);
} else {
  savedName = prompt("이름을 입력하세요:");
  localStorage.setItem("name", savedName);
  alert(`안녕하세요, ${localStorage.getItem("name")}님!`);
}