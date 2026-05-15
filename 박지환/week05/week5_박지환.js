//1. 구조 분해 할당으로 변수 추출하기
const person = {
  name: "강아지",
  age: 22,
  address: {
    city: "서울",
    street: "강남구",
  },
};

// 구조 분해 할당으로 name, age, city 꺼내기
const { name, age, address: { city } } = person;
console.log(name);
console.log(age);
console.log(city); 

//2. 스프레드 연산자로 배열 합치기
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// 스프레드 연산자 사용
const combined = [...arr1, ...arr2];

console.log(combined); // [1, 2, 3, 4, 5, 6]

//3. 콜백 함수 작성하기
function executeAfter(num, callback) {
  // num이 양수일 때만 callback 실행
  if (num > 0) {
    callback();
  }
}

executeAfter(5, () => console.log("양수입니다!"));  // 실행됨
executeAfter(-3, () => console.log("양수입니다!")); // 실행 안 됨

//4. 고차 함수 활용하기
const scores = [45, 82, 90, 33, 76, 58, 91, 60];
// 고차 함수 사용하여 60점 이상인 점수만 필터링
const passingScores = scores.filter(score => score >= 60);
console.log(passingScores);
const add = passingScores.map(score => score + 5);
console.log(add);
const sum = passingScores.reduce((acc, score) => acc + score, 0);
console.log(sum);

//5. DOM 조작하기
const title = document.getElementById("title");
const changeBtn = document.getElementById("changeBtn");
changeBtn.addEventListener("click", () => {
  title.textContent = "제목이 바뀌었습니다!";
});

//6. Axios로 데이터 가져오기
async function fetchPost() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
    console.log(response.data);
  } catch (error) {
    console.error('데이터를 가져오는 중 오류가 발생했습니다:', error);
  }
}
fetchPost();

//7. localStorage 활용하기
let name = localStorage.getItem('name');
if (!name) {
  name = prompt("이름을 입력하세요:");
  localStorage.setItem('name', name);
}
alert(`안녕하세요, ${name}님!`);