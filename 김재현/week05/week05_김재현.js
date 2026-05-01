// 1번
const person = {
  name: "강아지",
  age: 22,
  address: {
    city: "서울",
    street: "강남구",
  },
};
// 구조 분해 할당으로 name, age, city 꺼내기
const {name, age, address: {city, street}} = person;
console.log(name);
console.log(age);
console.log(city);

// 2번
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
// 스프레드 연산자 사용
const combined = [...arr1, ...arr2];
console.log(combined);

// 3번
function executeAfter(num, callback) {
  if (num > 0){
    callback();
  }
}
executeAfter(5, () => console.log("양수입니다!"));  // 실행됨
executeAfter(-3, () => console.log("양수입니다!")); // 실행 안 됨

// 4번
const scores = [45, 82, 90, 33, 76, 58, 91, 60];
const upper60 = scores.filter((score) => score >= 60);
const total = scores.reduce((acc, cur) => acc + cur, 0);
const add5 = scores.map((scores) => scores + 5);
console.log(upper60);
console.log(total);
console.log(add5);

// 5번
let title = document.getElementById("title");
let changeBtn = document.getElementById("changeBtn");
changeBtn.addEventListener("click", () => {
  title.textContent = "제목이 바뀌었습니다!";
});

// 6번
async function fetchPost() {
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
    console.log(response.data);
  } catch(error) {
    console.log("에러 발생: ", error.message);
  }
}
fetchPost();

// 7번
let input = prompt("이름을 입력하세요.")
if(localStorage.getItem("username") === null){
  localStorage.setItem("username", input);
}
alert("안녕하세요,"+localStorage.getItem("username")+"님!");