let display = document.getElementById("display");
function addNum(value){
  display.value += value;
}

function calculate(value){
  display.value = eval(display.value);
}

function clearAll(value){
  display.value ="";
}

function del(value){
  display.value = display.value.slice(0,-1);
}