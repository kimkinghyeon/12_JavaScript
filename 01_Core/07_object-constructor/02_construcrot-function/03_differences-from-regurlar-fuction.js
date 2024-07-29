// 일반 함수와의 차이점
function Student(name, age){
    this.name = name;
    this.age = age;
    this.getInfo = function(){
        return `${this.name}(은)는 ${this.age}세 입니다`
    }
};
/* 
일반 함수와 생성자 함수의 특별한 형식적 차이는 없다.
(첫 문자를 대문자로 기술하여 구별하려고 한다.)
new 연산자와 함께 호출되면 생성자 함수로 동작하는 것
-> 만약 new 연산자를 함께 호출하지 않으면 일반함수로 동작
 */

const student = Student('aaa',30);
// 일반함수로서 호출된 Student 는 return 이 없기 떄문에  undefined 가 나온다.
console.log(student);
console.log(age);

// 일반 함수로 호출된 Student 내의 this 는 전역 객체를 가르킨다.

/* 
new.target
new 연산자와 함께 생성자 함수로 호출되면 함수내부의 new.target은 함수 자신을 가르킨다.
new 연산자 없이 함수로 호출된 함수 내부의 new.target은 undefined */

function Dog(name,age){
    if(!new.target){
        // new 연산자와 함께 재귀 호출하여 생성된 인스턴스를 반환한다.
        return new Dog(name,age);
    }
    this.name = name;
    this.age = age;
};
const dog = Dog('구찌',10);
console.log(dog);
