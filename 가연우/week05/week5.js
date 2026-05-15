// =============================
// 1. 구조 분해 할당으로 변수 추출하기
// =============================
const person = {
  name: "강아지",
  age: 22,
  address: {
    city: "서울",
    street: "강남구",
  },
};

const { name, age, address: { city } } = person;

console.log(name); // 강아지
console.log(age);  // 22
console.log(city); // 서울


// =============================
// 2. 스프레드 연산자로 배열 합치기
// =============================
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const combined = [...arr1, ...arr2];

console.log(combined); // [1, 2, 3, 4, 5, 6]


// =============================
// 3. 콜백 함수 작성하기
// =============================
function executeAfter(num, callback) {
  if (num > 0) {
    callback();
  }
}

executeAfter(5, () => console.log("양수입니다!"));  // 실행됨
executeAfter(-3, () => console.log("양수입니다!")); // 실행 안 됨


// =============================
// 4. 고차 함수 활용하기
// =============================
const scores = [45, 82, 90, 33, 76, 58, 91, 60];

// filter: 60점 이상
const passed = scores.filter(score => score >= 60);
console.log(passed); // [82, 90, 76, 91, 60]

// map: 모든 점수에 5점 추가
const boosted = scores.map(score => score + 5);
console.log(boosted); // [50, 87, 95, 38, 81, 63, 96, 65]

// reduce: 합계
const total = scores.reduce((acc, score) => acc + score, 0);
console.log(total); // 535


// =============================
// 5. DOM 조작하기
// =============================
const changeBtn = document.getElementById("changeBtn");

changeBtn.addEventListener("click", () => {
  document.getElementById("title").textContent = "제목이 바뀌었습니다!";
});


// =============================
// 6. Axios로 데이터 가져오기
// =============================
async function fetchPost() {
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
    console.log(response.data);
  } catch (error) {
    console.error("데이터를 불러오는 데 실패했습니다:", error);
  }
}

fetchPost();


// =============================
// 7. localStorage 활용하기
// =============================
const savedName = localStorage.getItem("username");

if (savedName) {
  // 이미 저장된 이름이 있으면 그대로 사용
  alert(`안녕하세요, ${savedName}님!`);
} else {
  // 없으면 입력받아 저장
  const inputName = prompt("이름을 입력하세요");
  localStorage.setItem("username", inputName);
  alert(`안녕하세요, ${inputName}님!`);
}