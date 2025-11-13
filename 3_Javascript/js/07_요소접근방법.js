// 클래스로 요소 접근하는 테스트
function classTest() {

// 유사 배열이란?
// 배열처럼 index,lenght 를 가지고 있으나
// 배열 전공 기능(함수)를 제공하지 않음
// 제공하지 않은 기능 : pop(),push(),map(),filter() 등....  
// HTMLCollection,NodeList 는 유사 배열

// class 속성값이 cls-test인 요소 모두 얻어오기
  const divs = document.getElementsByClassName("cls-test");

  console.log(divs);

  divs[0].style.backgroundColor = "yellowgreen";
  divs[1].style.backgroundColor = "pink";
  divs[2].style.backgroundColor = "skyblue";

}

//-----------------------------------------------------------------------

// 태그명으로 요소 접근하는 테스트
function tagNameTest() {

  const tagList = document.getElementsByTagName("li");

  console.log(tagList);

    for( let i = 0 ; i < tagList.length ; i++ ){
      tagList[i].style.backgroundColor = tagList[i].innerText;  
    }
}

//-----------------------------------------------------------------------

// name으로 요소 접근하는 테스트
function nameTest() {

  // name 속성값이 hobby인 요소를 모두 얻어와 변수에 저장
  const hobbyList = document.getElementsByName("hobby");

  console.log(hobbyList);

  let str = ""; // 체크된 값 누적할 문자열
  let count = 0; // 체크된 수 카운트

  for(let i = 0 ; i < hobbyList.length ; i++){

    // checkbox, radio 전용 속성 (checked)

    // input요소.checked
    // -> 요소가 체크되었다면 true, 안되었다면 false 반환
    if(hobbyList[i].checked){
      str += hobbyList[i].value + " ";
      count++;
    }

    // id 가 name-div 요소에 내용으로 결과 출력
    document.getElementById("name-div").innerHTML
    = `${str} <br><br> 선택된 취미 개수 : ${count} `;

    // 요소.innerHTML
    // HTML 태그를 포함하여 작성한 문자열을 실제 HTML 요소로 해석하여 회면에 렌더링함

    // 요소.innerText
    // Text 내용만 요소 내부에 출력함(HTML 코드로 해석 X)
  }

}

//-----------------------------------------------------------------------

// css 선택자 요소로 접근하는 테스트
function cssTest() {
  // target-div 속성의 값이 css-div 요소 얻어오기
  const container = document.querySelector("[target-div='css-div']"); 

  // 요소의 테두리 변경하기
  container.style.border = "10px solid red";

  // 첫번째 자식 div 접근해서
  // 내용을 "CSS 선택지로 선택하여 값 변경됨" 적용해보기
  const div1 = document.querySelector("[target-div='css-div'] > div");
  div1.innerText = "CSS 선택지로 선택하여 값 변경됨";

  const div2 = document.querySelector("[target-div='css-div'] > div:last-child");
  div2.innerText = "첫번째 요소가 아니면 querySelector() 특징 활용 못함";

  // 모든 자식 div 한번에 선택(배열)
  const divList = document.querySelectorAll("[target-div='css-div'] > div");

  console.log(divList);

  divList[0].style.fontFamily = "궁서";
  divList[1].style.fontSize = "20px";

  for(let i = 0 ; i <divList.length ; i++ ){
    divList[i].onclick = function(){
      alert(`${i}번째 요소입니다.`);
    }
  }

}

//-----------------------------------------------------------------------

// 카카오톡 모양 채팅화면 만들기

function readValue() {

  // 채팅이 출력되는 배경요소
  const bg = document.querySelector("#chatting-bg");

  // 채팅 내용을 입력하는 input 요소
  const input = document.querySelector("#user-input");

  // 입력된 값이 없을 경우
  // 1) 진짜 안적음
  // 2) 공백만 적음

    // 문자열.trim() : 문자열 좌우 공백 제거
    if(input.value.trim() == 0){
      alert("채팅 내용을 입력해주세요");
      input.value = ""; // 이잔 input에 작성된 값 삭제 
      input.focus(); // input에 커서 활성화
      return; // 해당 함수 종료
    }

    bg.innerHTML += `<p><span>${input.value}</span></p>`;

    // bg.scrollTop : 현재 스크롤 위치 스크롤이 현재 얼마만큼 내려와있는지 나타냄
    // console.log(bg.scrollTop);
    // bg.scrollHeight : bg의 스크롤 전체 높이 스크롤바를 이용해 스크롤 할 수 있는 전체 높이
    // console.log(bg.scrollHeight);

    bg.scrollTop = bg.scrollHeight;
    input.value = "";
    input.focus();
}

// keydown : 키가 눌러졌을 때 (+ 꾹 누르고 있으면 계속 인식됨)
// keyup : 눌려지던 키가 떼어졌을 때(올라왔을 때)
document.querySelector("#user-input")
.addEventListener("keyup", function(e){
  // 매개변수 e : 이벤트 객체 (발생한 이벤트 정보를 담고 있는 객체)
 // console.log(e);

   // e ['key'] -> 매핑된 value
   // e.key -> 매핑된 value
   if(e.key == "Enter"){ // 엔터가 눌려지고 있을 떄
    readValue();
   }

});