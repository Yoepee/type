// d.ts는 타입정의 보관용 파일
// ts파일 정의가 너무 길면 d.ts파일만들기도함
// import/export할게 많으면 namespace 또는 import* as 쓰셔도 ㄱㅊ
type Age8 = number;
interface Person4 {name:string}

// d.ts를 레퍼런스용으로 만들기도함
// "declaration": true 옵션을 tsconfig.json에 적용하면 자동으로
// d.ts는 자동으로 오버라이드되지않음