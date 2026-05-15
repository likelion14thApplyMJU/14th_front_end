const person = { name: "강아지", age: 22, city: "서울"};

const { name, age, city } = person;

console.log(name);
console.log(age);
console.log(city);


const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];

console.log(combined);


function executeAfter(num, callback) {
    if (num > 0) {
        callback();
    }
}

executeAfter(5, () => console.log("양수입니다!"));
executeAfter(-3, () => console.log("양수입니다!"));


const scores = [45, 82, 90, 33, 76, 58, 91, 60];
const result1 = scores.filter((score1) => score1 >= 60);

console.log(result1);

const scores = [45, 82, 90, 33, 76, 58, 91, 60];
const result2 = scores.map((score2) => score2 + 5);

console.log(result2);

const scores = [45, 82, 90, 33, 76, 58, 91, 60];
const result3 = scores.reduce((acc, cur) => acc, cur, 0);

console.log(result3);


const title = document.getElementById("title")
title.textContent = "제목이 바뀌었습니다!";

console.log(title.textContent);


async function fetchPost() {
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
    console.log(response.data);
  } catch (error) {
        console.log("에러 발생:", error);
  }
}

fetchPost();