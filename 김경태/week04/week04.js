// 1. 반지름 입력받아 원의 넓이 구하기
const PI = 3.14;
let radius = prompt("원의 반지름을 입력하세요.");
let area = PI * radius * radius;
alert(`넓이는 ${area}입니다.`);

// 2. 배열 작성 후, 배열 맨 뒤 추가
let foods = ['치즈', '요구르트', '우유'];
foods.push('아이스크림');
console.log(foods);

// 3. [2]에 빵 추가
foods.splice(2, 0, '빵');
console.log(foods);

// 4. 숫자 입력 후, 양수, 음수, 0 판별
const num = Number(prompt('숫자를 입력하세요'));
if(num > 0) {
    alert('양수입니다.');
}
else if(num < 0) {
    alert('음수입니다');
}
else {
    alert('0입니다.');
}

// 5. 홀짝 판별
const num2 = Number(prompt('숫자를 입력해주세요'));
if(num2 % 2 === 0) {
    alert('짝수입니다.');
}
else {
    alert('홀수입니다.');
}

// 6. 1~10 더하기
let num3=0;
for(let i =0; i<=10; i++) {
    num3+=i;
}
console.log(num3);

// 7. 별찍기
for (let i=1 ; i<=5 ; i++) {
	let star = "";

	for (let j=1; j<=i ;j++) {
		star += "*";
}
	console.log(star);
}

// 8. a와 b입력 받고, a~b 더하기
let a = Number(prompt('a를 입력해주세요'));
let b = Number(prompt('b를 입력해주세요'));
let num4 = 0;
if(a > b) {
    for(let i = b; i<=a; i++){
        num4+=i;
    }
    console.log(`${num4}`);
}
else if(a < b) {
        for(let i = a; i<=b; i++){
        num4+=i;
    }
    console.log(`${num4}`);

}
else{
    console.log(`${num4}`)
}

// 9. 출력
console.log(`이름 : ${student.name}, 졸업여부 : ${student.isGraduated}, 두번째 과목 : ${student.subjects[1]}, 사는도시 : ${student.address.city} `);

// 10. 출력되는 문자열, 홍길동은(는) 20세이고, 서울에 살고 있습니다.

// 11. 화살표함수로 고치기
const greeting = (name) => {
    return `안녕하세요, ${name}님!`;
}

console.log(greeting('김미미'));