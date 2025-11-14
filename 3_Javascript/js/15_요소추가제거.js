// 공통적으로 사용되는 요소를 전역변수로 선언

const addBtn = document.querySelector("#add"); // 추가

const calcBtn = document.querySelector("#calc"); // 계산

const container = document.querySelector(".container"); 
// div-> 동적으로 만들어진 요소를 최종적으로 붙어야하는 대상

// 추가 버튼 클릭 시
addBtn.addEventListener("click",()=>{

  // div 요소 생성
  const row =document.createElement("div");

  // row 요소에 class 추가
  row.classList.add("row");

  // input 요소 생성
  const input = document.createElement("input");

  // input 요소에 속성 추가
  input.setAttribute("type","number");
  // input.type = "number";

  // 클래스명 "input-number" 추가
  input.setAttribute("class","input-number");
  // input.classList.add("input-number");

  // span 요소 생성
  const span = document.createElement("span");

  // span 태그에 클래스로 remove-row 추가
  span.classList.add("remove-row");

  // span 태그 내용으로 &times; 추가 (innerHTML 사용) 
  span.innerHTML = "&times;";

  // div.row 요소에 자식으로 input과 span 추가
  row.append(input,span);

  // 완성된 div.row 를 container의 마지막 자식으로 추가
  container.append(row);

  // ****************************************************

  // 클릭된 X버튼의 부모 요소를 제거

  // 만들어진 X버튼(span)에 이벤트 리스너/ 핸들러 추가
  span.addEventListener("click",(e)=>{
      
    // 현재 이벤트가 발생한 요소의 부모 요소를 탐색 (선택)
    const parent = e.target.parentElement; // div.row

    // 부모 요소를 제거하기
    parent.remove();

  });
});

// 계산 버튼 클릭 시
calcBtn.addEventListener("click",(input)=>{

  // 모든 .input-number 요소 얻어오기
  const numbers = document.querySelectorAll(".input-number");

  // for문으로 모든 요소 접근하요 작성된 값(value)을 얻어와
  // 숫자로 변경한 후 합계 저장 변수에 누적
  let sum = 0 ;

  for( let i = 0 ; i < numbers.length ; i++ ){
    sum += Number(numbers[i].value);
  }

  /*
  for( let temp of numbers){}
  */

  // alert() 결과 출력
  alert("결과 : " + sum);

});





