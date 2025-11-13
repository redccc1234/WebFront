function nameFn(name){
  console.log(`Helle,[${name}]!`);
}
nameFn("name");


function sumFn(a,b){
  console.log(`a+b=${a+b}`);
}
sumFn(3,2);


function multFn(a,b){
  console.log(`a*b=${a*b}`);
}
multFn(4,5);


function compare(a,b) {
  
  if(a>b){
    console.log("첫 번째 숫자가 더 큽니다");
  }else{
    console.log("두 번째 숫자가 더 크거나 같습니다");
  }
}
compare(2,3);


const string = "안녕하세요";

function input(string) {
 console.log(`길이 : ${string}`);
}
input(string.length);


