// 메소드 오버라이딩
// 부모 메소드의 전체를 바꾸지않고, 일부 기능만 변경하고 싶을때
// => 부모 메서드의 기능을 확장하고 싶을때 사용한다.
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
    // 움직여서 살빼기
    move(lostWeight){
        if(this.weight > lostWeight)
            this.weight -= lostWeight;
        console.log(`${this.name} 는(은) 움직임으로 인해 ${lostWeight} kg 이 감량되어  ${this.weight}kg 이 되었습니다.`);
    }
}
class Bear extends Animal {
    attack(target) {
        console.log(`${this.name} 는(은) ${target} 을 공격합니다.`);
    }
    // Animal의 move 를 확장시키는 Bear 의 move
    move(target){
        // spuer. 부모 클래스의 메서드를 참조
        super.move(0.1);
        this.attack(target)
    }
}
let bear = new Bear('지리산 반달가슴곰',150);
bear.move('서브웨이 이달의 메뉴')