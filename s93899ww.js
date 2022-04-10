$(document).ready(function(){
  
  var num;
  
  function convert(num) {
    var binary = [];
    var num = document.getElementById("inputbinar").value;
    num = parseInt(num);
    if (!Number.isInteger(num)) {
      return NaN;
    }
    while (num / 2 != 0) {
        binary.unshift(num % 2);
        num = Math.floor(num / 2);
    }
    if (binary.length == 2) {
        binary.unshift("0");
      }
    if (binary.length == 3) {
        binary.unshift("0");
      }
    if (binary.length == 1) {
      binary.unshift("000");
    }   
    binary = binary.join("");
    return binary;
  } 

  $("buttonbin").click(function(){
      var insert = convert(num);
      answer.innerHTML = insert;
  });
});
