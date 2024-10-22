var panda = {
    name : '푸바오',
    // 객체 내에 프로퍼티로 가지고 있는 함수를 메소드라고 한다.
    eat : function(food){
        // this 는 panda 를 가르킨다. 자바에서 this와 동일
        console.log(`${this.name} 는 ${food}(을)를 맛있게 먹어요`);
    }
};

var panda2 = {
    name : '푸바오',
    // ES6 에서 메소드 정의 시 function 키워드 생략 가능
    eat(food){
        console.log(`${this.name} 는 ${food}(을)를 맛있게 먹어요`);
    }
};

panda2.eat('대나무');