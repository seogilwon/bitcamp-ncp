//1. 태그 찾기
function jQuery(selector) {
  return document.querySelectorAll(selector);
}

var $ = jQuery; //유일하게 $를 변수명으로 사용가능// $표시를 jQuery의 변수로 사용하는것이 일반적// jquery를 사용하는이유: cross browser문제를해결 그리고 코드간결성