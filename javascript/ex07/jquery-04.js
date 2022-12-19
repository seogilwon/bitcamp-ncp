//1. 태그 찾기
//2. 태그 만들기
//3. append()만들기
//4. 리팩토링
function jQuery(selector) {
  let el = [];   //생성한태그나 찾은 태그를 담는 배열

  if (selector.startsWith("<")) {
    el[0] = document.createElement(selector.substring(1, selector.length -1));

  } else {
    let nodeList = document.querySelectorAll(selector);
    for (let e of nodeList) {
      el.push(e);
   }
  }
  
  el.append = function(childBox) {  //자식태그를 복제해서 각 부모태그에 붙인다.
    for (let parent of el) {
      for (let child of childBox) {     //자식들이 들어있는 상자에서 자식을 한개씩꺼내 복제하여 각 부모의 자식으로붙인다.
        console.log(child);
      parent.appendChild(child.cloneNode(true));
    }
  }

  for (let child of childBox) {      //자식태그는 제거한다.
    if (child.parentElement != null || child.parentElement != undefined) {
     child.parentElement.removeChild(child);
   }
  }
};
return el;
};

var $ = jQuery;