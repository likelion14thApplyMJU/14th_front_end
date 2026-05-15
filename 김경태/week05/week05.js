// 1. 구조 분해 할당으로 name, age, city 꺼내기
const person = {
    name: "강아지",
    age: 22,
    address: {
        city: "서울",
        street: "강남구",
    },
};
const {name, age, address : {city}} = person;
console.log(name, age, city);

// 2. 스프레드 연산자 배열 합치기
const arr1 = [1,2,3];
const arr2 = [4,5,6];

const combined = [...arr1, ...arr2];
console.log(combined);

// 3. 콜백함수 작성
function executeAfter(num, callback){
    if(num > 0) {
        callback();
    }
}

executeAfter(5, () => console.log("양수입니다!"));  // 실행됨
executeAfter(-3, () => console.log("양수입니다!")); // 실행 안 됨

// 고차함수
const scores = [45, 82, 90, 33, 76, 58, 91, 60];

const filter = scores.filter((score) => score >=60);
const map = scores.map((score) => score+5);
const reduce = scores.reduce((acc, score) => acc + score,0);

console.log(filter);
console.log(map);
console.log(reduce);

// Dom 조작
const title = document.getElementById("title");
const btn = document.getElementById("changeBtn");

btn.addEventListener("click", () => {
    title.textContent = "제목이 변경되었습니다!";
});

// Axios
async function fetchPost() {
    try{
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts",{
            title: "새로운 글",
            body: "글 내용입니다.",
            userId: 1,
        });
        console.log(response.data);
    }catch(error){
        console.log("Error: ", error.message);
    }
};

fetchPost();