// 클래스 상속
class Animal {
    constructor(name,weight){
        this.name = name;
        this.weight = weight;
    }
    // 먹으면 살찌는
    eat(foodWeight){
        this.weight += foodWeight;
        console.log(`${this.name} 는(은) ${foodWeight} kg 의 식사를하고 ${this.weight}kg 이 되었습니다.`);
    }
    // 움지겨서 살빼기
    move(lostWeight){
        if(this.weight > lostWeight)
            this.weight -= lostWeight;
        console.log(`${this.name} 는(은) 움직임으로 인해 ${lostWeight} kg 이 감량되어  ${this.weight}kg 이 되었습니다.`);
    }
}
let animal = new Animal("구찌",10);
animal.eat(1);
animal.move(0.5);
// 상속은 extends 를 사용한다.
class Human extends Animal{
    develop(language){
        console.log(`${this.name} 는(은) ${language}로 개발을 합니다. 정말 즐거워요!`);
    }
}
let human = new Human('동동',80);
human.eat(1);
human.move(5);
human.develop('javaScript');