const person = {
  name: "강아지",
  age: 22,
  address: {
    city: "서울",
    street: "강남구",
  },
};
const { name, age, address: { city } } = person;
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
const filtered = scores.filter(score => score >= 60);
console.log(filtered);
const added = scores.map(score => score + 5);
console.log(added);
const total = scores.reduce((acc, score) => acc + score, 0);
console.log(total); 

const title = document.getElementById('title');
const changeBtn = document.getElementById('changeBtn');
changeBtn.addEventListener('click', () => {
  title.textContent = '제목이 바뀌었습니다!';
});


async function fetchPost() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
    console.log(response.data);
  } catch (error) {
    console.log('에러 발생:', error);
  }
}
fetchPost(); // 나는 문어 꿈을 꾸는 문어~

