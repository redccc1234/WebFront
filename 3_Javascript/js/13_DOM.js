// Node 확인하기

// Node 탐색 방법
document.querySelector("#btn1").addEventListener("click",() => {

  const ul = document.querySelector("#test"); // ul

  // ul의 모든 자식 Node 얻어오기
  // 요소.childNodes -> 배열
  const list = ul.childNodes;
  console.log(list);
  // text(개행/공백),comment(주석),태그(요소)
  // 모두 Node로써 취급된다

  // 자식 Node 중 첫번째 li 요소
  console.log(list[3]);

  // 1. 부모 Node 찾기(요소.parentNode)
  // #li1 부모 Node를 찾아서 배경색 변경하기
  list[3].parentNode.style.backgroundColor = "skyblue";

  // 2. 첫번째 자식 Node 찾기 (요소.firstChild)
  // ul 의 첫번째 자식 Node 찾기
  console.log(ul.firstChild);

  // 3. 마지막 자식 Node 찾기 (요소.lastChild)
  console.log(ul.lastChild);

  // 4. 원하는 위치(index)에 존재하는 자식 Node 찾기
  // (요소.ChildNodes[index])
  // ul의 자식 Node 중 3번째 li 태그를 찾아서 배경색 pink 지정
  ul.childNodes[9].style.backgroundColor = "pink";

  // 5. 이전 / 다음 형제 Node 찾기
  // 이전 형제 Node : 요소.previousSibling
  // 다음 형제 Node : 요소.nextSibling
  // (참고) -> 탐색용 코드는 연달아서 작성 가능!

  // ul.childNodes[9]의 다음 다음 형제 Node 선택
  // == ul.childNodes[11]
  console.log(ul.childNodes[9].nextSibling.nextSibling);

  // ul 의 마지막 자식 Node의 이전 형제 노드 선택
  console.log(ul.lastChild.previousSibling);


  // Node 추가

  // 1. 마지막 자식 Node로 추가 (요소.appendChild(Node))

  // -> list[11]의 마지막 자식으로 "ZZZ"라는 TextNode 추가
  list[11].appendChild(document.createTextNode("ZZZ"));

  // 2. 마지막 자식으로 추가 (요소.append("내용" or Node))
  list[11].append("12345","abcd","가나다라");

  // appendChild / append 둘 다 DOM 요소 내부에 자식 Node를 추가하는 함수
  // - appendChild : Node만 추가 가능 (createTextNode() 필수 작성) 한 번에 한개만 추가 가능
  // - append      : Node + 문자열 모두 가능 / 한 번에 여러개 추가 기능

  // 3. 첫 번째 자식으로 추기( 요소.prepend("내용" or Node))
  list[11].prepend("오늘","저녁","고기먹지롱");

  // 4. 이전 / 다음 형제로 추가 (요소.before("내용" or Node) / 요소.after("내용" or Node))
  // ul의 전 / 후에 내용 추가
  ul.before("이전입니다","ㅎㅎ");
  ul.after("이후입니다");
});

//-----------------------------------------------------------------------

document.querySelector("#btn2").addEventListener("click",()=>{

  // #test2 얻어오기 (ul)
  const ul = document.querySelector("#test2");

  // ul의 모든 자식 요소 얻어오기 (children)
  console.log(ul.children);
  
  // ul의 첫번쨰 자식 요소
  console.log(ul.firstElementChild);

  // ul의 마지막 자식 요소
  console.log(ul.lastElementChild);

  // ul의 부모 요소
  console.log(ul.parentElement);

  // ul의 바로 이전 형제 요소
  console.log(ul.previousElementSibling);

  // ul의 바로 다음 형제 요소
  console.log(ul.nextElementSibling);

});


