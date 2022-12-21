// 기존 jQuery에 기능(메서드) 추가

ElementBox.prototype.button = function() {  
  this.el.forEach((e) => {           //각각의 엘리먼트에 대해서
    e.classList.add("btn")
  });
};