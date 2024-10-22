/*
    for in 반복문
    객체의 모든 키를 순회할 수 있다.
*/

var panda = {
    name : '푸바오',
    age : 4,
    getInfo : function() {
        return `${this.name}는 ${this.age}살 입니다.`;
    }
};

for(var key in panda) {
    console.log(`key = ${key}`);    // key 구문
    console.log(`panda[key] = ${panda[key]}`);  // key 에 해당하는 value
};