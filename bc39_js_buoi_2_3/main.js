

// *Bai 1
document.getElementById("btnCount").onclick = function () {
  var tienluong1ngay = document.getElementById("tienluong1ngay").value * 1;
  var songaylam = document.getElementById("songaylam").value * 1;
  
  // xu ly
  console.log(tienluong1ngay, songaylam);
  var total = tienluong1ngay * songaylam;
  var result = "Tong tien";
  result += "<br />";
  result += total + "VND";

  // in ket qua

  document.getElementById("infocount").innerHTML = result;

}


// Bai 2
// 
document.getElementById("btncount").onclick = function () {
  var number1 = document.getElementById("number1").value * 1;
  var number2 = document.getElementById("number2").value * 1;
  var number3 = document.getElementById("number3").value * 1;
  var number4 = document.getElementById("number4").value * 1;
  var number5 = document.getElementById("number5").value * 1;


  // xu ly
  console.log(number1, number2, number3, number4, number5);
  var total = (number1 + number2 + number3 + number4 + number5) / 5;
  
  
  
  // in ket qua
  document.getElementById("infotrungbinh").innerHTML = total;

}



// Bai 3


