// 생성자 함수

const student1 = {
    name : 'aaa',
    age : 16,
    getInfo : function(){
        return `${this.name}(은)는 ${this.age}세 입니다`
    }
};

const student2 = {
    name : 'ddd',
    age : 17,
    getInfo : function(){
        return `${this.name}(은)는 ${this.age}세 입니다`
    }
};
// 생성자 함수로 객체 생성
// 생성자함수는 함수명 앞에 대문자를 써주는게 좋음
function Student(name, age){
    this.name = name;
    this.age = age;
    this.getInfo = function(){
        return `${this.name}(은)는 ${this.age}세 입니다`
    }
};
// 인스턴트 생성
const student3 = new Student('bbbaaa' ,30);
// 메서드 호출
console.log(student1.getInfo());
console.log(student2.getInfo());
console.log(student3.getInfo());
