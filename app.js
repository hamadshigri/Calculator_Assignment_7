function any_Number(n){
  var result = document.getElementById("result");
  result.value += n;
}
function clear_Number(){
  var result = document.getElementById("result");
  result.value = "";
}
function show_Result(){
  var result = document.getElementById("result");
  result.value = eval(result.value);
}