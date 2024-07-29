function Student(name, age) {
    // 1. 암묵적으로 인스턴스가 생성되고 this 에 바인딩 되는 과정
    console.log(this);
    

    // 2. this 에 바인딩 되어있는 인스턴스를 초기화
    this.name = name;
    this.age = age;
    this.getInfo = function () {
        return `${this.name}(은)는 ${this.age}세 입니다`
    }
    // return{}; 명시적으로 객체를 반환하면 암묵적으로 this 반환을 무시
    // return 1; 명시적 으로 원시값을 반환하면 원시값 반환을 무시
}
// 3. 완성된 인스턴스가 바인딩 된 this 암묵적으로 반환
// 생성자 내부에서 return 은 생략하느 것이 기본
const student = new Student('aaa',15);
console.log(student);
