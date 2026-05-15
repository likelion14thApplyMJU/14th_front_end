1.
const person = {
  name: "강아지",
  age: 22,
  address: {
    city: "서울",
    street: "강남구",
  },
};

// 구조 분해 할당으로 name, age, city 꺼내기

const {name, age, city} = person;

console.log(name);
console.log(age);
console.log(city);

2.
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// 스프레드 연산자 사용
const combined = [...arr1, ...arr2]

console.log(combined); // [1, 2, 3, 4, 5, 6]

3.
function executeAfter(num, callback) {
  console.log(num>0);
  callback();
}

executeAfter(5, () => console.log("양수입니다!"));  // 실행됨
executeAfter(-3, () => console.log("양수입니다!")); // 실행 안 됨

4.
const scores = [45, 82, 90, 33, 76, 58, 91, 60];

const oversixty = scores.filter((num) => num >=60);
console.log(oversixty);

const plusfive = scores.map((num) => num + 5);
console.log(plusfive);

const total = numbers.reduce((acc, cur) => acc + cur, 0)
console.log(total);

5.
const title = document.getElementById("title");
const changeBtn = document.getElementById("changeBtn");
changeBtn.addEventListener("click", () => {
    console.log("제목이 바뀌었습니다!");
})

6.
async function fetchPost() {
  try { 
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
    console.log("성공:", response.data);
  } catch (error) {
    console.log("에러 발생:", error.message);
  } finally {
    console.log("요청 완료"); 
  }
}

fetchPost();

7.
localStorage.setItem("username");