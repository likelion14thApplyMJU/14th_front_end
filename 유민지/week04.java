1.
const pi = 3.14;
let radius = Number(prompt('반지름을 입력하세요'));
let area = pi * radius * radius;
alert(area);

2.
const foods = ['치즈', '요구르트', '우유'];
foods.push('아이스크림');
console.log(foods);

3.
foods.splice(2, 0, '빵');
console.log(foods);

4.
const num = Number(prompt('숫자를 입력하세요'));
if (num > 0) {
  alert('양수');
} else if (num === 0) {
  alert('0');
} else {
  alert('음수');
}

5.
const num = Number(prompt('숫자를 입력하세요'));
if (num % 2 === 0) {
  alert('짝수');
} else {
  alert('홀수');
}

6.
let num = 0;
for (let i = 1; i <= 10; i++) {
  num += i;
}
console.log(num);

7.
for (let i = 1; i <= 5; i++) {
  let stars = "";
  for (let j = 0; j <=i; j++) {
    stars += "*";
  }
  console.log(stars);
}

8.
let a = Number(prompt('a를 입력해주세요'));
let b = Number(prompt('b를 입력해주세요'));

function addRange(a, b) {
  let num = 0;
  for (let i = a; i <= b; i++) {
    num += i;
  }
  return num;
}
consloe.log(add(a,b));

9.
console.log(student name, student isGraduated, student subjects[1], 
student address);

10.
홍길동은(는) 20세이고, 서울에 살고 있습니다.

11.
const greeting = (name) => {
   안녕하세요, ${name}님!`;
}`

console.log(greeting("김미미"));
