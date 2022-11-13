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

// console.log(LastPang(철수쌤));
// console.log(LastPang(영희쌤));
// console.log(LastPang(민수쌤));
// console.log(LastPang({ hello : 'hi' }));

type 이상한 = string | number | undefined;
type 방식 = {name: string, age:number};

type PositionX = {x:number, y:number};
type PositionY = {y:number, z:number};

type NewPosition = PositionX & PositionY;

let 동물 :방식 = {name :"name", age:20};

type Girlfriend = {
  readonly name : string
}

const 여친:Girlfriend = {
  name : "은진"
}

let position:NewPosition = {x:1, y:1, z:1}

type 색깔 = {
  color?:string, 
  size:number, 
  readonly position :number[]
};

let test2:색깔 = {
  color:"red",
  size:10,
  position:[1,2,3]
}

type user1 = {
  name : string,
  phone : number,
  email: string
}

type Child = {
  adult : boolean
};

type Check = user1&Child;
let jame:Check = {
  name:"kim",
  phone:123,
  email:"kk",
  adult:true
}
let 바보 :string = "바보"

let 접니다 :"대머리" | "솔로";
접니다 = "솔로"

function 함수2(a:"hello"):1|0{
  return 1;
}
함수2("hello");
type Rsp = ("가위"|"바위"|"보")

function 짱깬(input:Rsp):Rsp[]{
  return []
}

짱깬("가위");

var 자료 = {
  name:"kim"
} as const
// object value값을 그대로 타입으로 지정해줌
// object의 속성들에 모두 readonly를 붙여줌

function 내함수2(a:"kim"){

}
내함수2(자료.name);

type 함수타입 = (a:string)=> number;

const 함수3:함수타입= ()=>{
  return 1;
}
type UserInfo = {
  name:string,
  age?:number,
  plusOne(a:number):number,
  changeName:()=>void
}
let 회원정보:UserInfo = {
  name : "kim",
  age: 30,
  plusOne(a){
    return a+1;
  },
  changeName: ()=>{
    console.log("안녕");
  }
}
// console.log(회원정보.plusOne(10));
// console.log(회원정보.changeName);

type Zero = (x:string)=>string;
type Dash = (x:string)=>number;

const cutZero:Zero = (a)=>{
  if(a[0]==="0"){
    a.slice(0,1);
  }
  return a;
}

const removeDash:Dash= (a)=>{
  a = a.replace(/-/gi,"");
  return parseInt(a);
}
// console.log(removeDash("01037912975"));
// console.log(removeDash("010-3791-2975"));

type Zzambong = (a:string, b:Zero, c:Dash)=>void;

const 만들함수:Zzambong = function(a, b, c){
  console.log(c(b(a)))
};
만들함수("010-1111-2222", cutZero, removeDash);