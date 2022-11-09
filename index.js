var 이름 = "김동엽";
var 나이 = 27;
var 출생지역 = "강릉";
var 노래 = { 제목: "노래", 가수: "자이언티" };
var 테스트 = {
    member: ['kim', 'park'],
    days: 30,
    started: true,
};
var user = "kim";
var age = undefined;
var married = false;
var 철수 = [user, age, married];
var 학교 = {
    score: [100, 97, 84],
    teacher: 'Phil',
    friend: 'John'
};
학교.score[4] = false;
학교.friend = ['Lee', 학교.teacher];
function 함수(x) {
    if (x !== undefined) {
        console.log(x * 2);
    }
}
function 출력(이름) {
    if (이름 !== undefined) {
        return "\uC548\uB155\uD558\uC138\uC694 ".concat(이름);
    }
    else {
        return "이름이 없습니디";
    }
}
function 자릿수(숫자) {
    // let num:number = 0;
    // if(typeof(숫자)==="string"){
    //   num = 숫자.split("").length;
    // }else{
    //   if(숫자<0){
    //     숫자 = 숫자 * -1;
    //   }
    //   do{
    //     num++;
    //     숫자 = 숫자/10;
    //   }while(숫자>1)
    // }
    // return num;
    return 숫자.toString().length;
}
function 결혼여부(소득, 집보유, 매력점수) {
    var num = 0;
    if (매력점수 === "상") {
        num += 100;
    }
    if (집보유) {
        num += 500;
    }
    num += 소득;
    if (num >= 600) {
        return "결혼가능";
    }
}
function 내함수(x) {
    var arr = [];
    arr[0] = x;
    // assertion 문법은 Narrowing 할때 씁니다.
    // 타입을 변경하는 문법이 아님.
    // 무슨 타입이 들어올지 100% 확실할 때 사용
    // 가능하면 if문으로 typeof 사용하기, as문법은 타입에러 체크 x
    // <number> x = 옛날 as 문법
}
function setNum(num) {
    var arr = [];
    for (var _i = 0, num_1 = num; _i < num_1.length; _i++) {
        var i = num_1[_i];
        if (typeof (i) === "string") {
            arr.push(Number(i));
        }
        else {
            arr.push(i);
        }
    }
    return arr;
}
// console.log(setNum([1,2,"3","4", 5]));
function LastPang(sam) {
    if (typeof (sam.subject) === "object") {
        return sam.subject[sam.subject.length - 1];
    }
    else if (typeof (sam.subject) === "string") {
        return sam.subject;
    }
    else {
        return "없음";
    }
}
var 철수쌤 = { subject: 'math' };
var 영희쌤 = { subject: ['science', 'english'] };
var 민수쌤 = { subject: ['science', 'art', 'korean'] };
console.log(LastPang(철수쌤));
console.log(LastPang(영희쌤));
console.log(LastPang(민수쌤));
console.log(LastPang({ hello: 'hi' }));
var 동물 = { name: "name", age: 20 };
var 여친 = {
    name: "은진"
};
var position = { x: 1, y: 1 };
