let 이름:string = "김동엽";
let 나이 : number = 27;
let 출생지역 :string= "강릉";

let 노래:{제목:string, 가수:string|number} = {제목:"노래", 가수:"자이언티"};

type 오브젝트 = {
  member : string[],
  days : number,
  started : boolean
}

let 테스트 :오브젝트 =  {
  member : ['kim', 'park'],
  days : 30,
  started : true,
}

let user :string = "kim";
let age : undefined | number = undefined;
let married :boolean = false;
let 철수 : (string | undefined | number | boolean)[] = [user, age, married];

type 학교타입 = {
  score : (number | boolean)[],
  teacher : string,
  friend: string | (string[])
}

let 학교 : 학교타입 = {
  score : [100, 97, 84],
  teacher : 'Phil',
  friend : 'John'
}
학교.score[4] = false;
학교.friend = ['Lee' , 학교.teacher]

function 함수(x? :number) : void {
  if(x!==undefined){
    console.log(x*2)
  }
}

function 출력(이름?:string) : string{
  if(이름 !== undefined){
    return `안녕하세요 ${이름}`
  }else{
    return "이름이 없습니디"
  }
}

function 자릿수(숫자 :string | number) :number{
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

function 결혼여부 (소득 :number, 집보유 : boolean, 매력점수:string) :string|void{
  let num :number = 0;
  if(매력점수 === "상"){
    num+=100;
  }
  if(집보유){
    num+=500
  }
  num+=소득;
  if(num>=600){
    return "결혼가능"
  }
}

function 내함수(x:string | number){
  let arr :number[] = [];
  arr[0] = x as number;
  // assertion 문법은 Narrowing 할때 씁니다.
  // 타입을 변경하는 문법이 아님.
  // 무슨 타입이 들어올지 100% 확실할 때 사용
  // 가능하면 if문으로 typeof 사용하기, as문법은 타입에러 체크 x
  // <number> x = 옛날 as 문법
}

function setNum(num: (number | string)[]){
  let arr:number[] = [];
  for(let i of num){
    if(typeof(i)==="string"){
      arr.push(Number(i));
    }
    else{
      arr.push(i);
    }
  }
  return arr;
}
// console.log(setNum([1,2,"3","4", 5]));
function LastPang(sam:{subject:string | string[]}):string{
  if (typeof (sam.subject) === "object") {
    return sam.subject[sam.subject.length - 1];
  }
  else if(typeof (sam.subject) === "string"){
    return sam.subject;
  }
  else{
    return "없음"
  }
}

let 철수쌤 = { subject : 'math' }
let 영희쌤 = { subject : ['science', 'english'] }
let 민수쌤 = { subject : ['science', 'art', 'korean'] }

console.log(LastPang(철수쌤));
console.log(LastPang(영희쌤));
console.log(LastPang(민수쌤));
console.log(LastPang({ hello : 'hi' }));

type 이상한 = string | number | undefined;
type 방식 = {name: string, age:number};

type PositionX = {x:number};
type PositionY = {y:number};

type NewPosition = PositionX & PositionY;

let 동물 :방식 = {name :"name", age:20};

type Girlfriend = {
  readonly name : string
}

const 여친:Girlfriend = {
  name : "은진"
}

let position:NewPosition = {x:1, y:1}