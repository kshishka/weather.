/*
function raschet_osadkov() {
	var osadki= document.getElementById("osadki").value;
	var city= document.getElementById("city").value;
	kolvo=1200-osadki;
	document.getElementById("kolvo").value = kolvo;
}
alert("Сумма");
var kolvoosadkov=prompt("введите количество осадков");
var kolvoosadkov=["200" , "500" , "700" , "1000" ,
"1200" ];
alert(kolvoosadkov[1]);
var s= 0;
for (let i = 0; i < 5; i++) { // выведет 0, затем 1, затем 2
s=kolvoosadkov[i]*1+s;
alert(s);
}
var s= 0;
for(var i = 0;i < kolvoosadkov.lenght-1; i++) {
s=  s+ kolvoosadkov[i] * 1;
}
alert(s);

var snow = {
	firstname: "снег",
	uslovia: "плохой",
	temperature:"0",
	
};
document.write("<br> название погоды:" + snow.firstname + "является" + snow.uslovia + "погодой и требует" + snow.temperature +"градусов </br>");
*/

var i=0;
var imgs=new Array('weather.jpg','weather1.png','weather2.png','weather3.png','weather4.png');
function imgsrc() {
var image=document.getElementById("image");
image.src=imgs[i++];
}

function sortList() {
  var list, i, switching, b, shouldSwitch;
  list = document.getElementById("spisok");
  switching = true;
  while (switching) {
    switching = false;
    b = list.getElementsByTagName("LI");
    for (i = 0; i < (b.length - 1); i++) {
      shouldSwitch = false;
      if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      b[i].parentNode.insertBefore(b[i + 1], b[i]);
      switching = true;
    }
  }
}

const button = document.getElementById("change");

const colors = ["#F0FFF0", "#221e4d"];
button.addEventListener("click", () => {
document.body.style.backgroundColor = colors[getRandomNumber()];
});
function getRandomNumber() {
return Math.floor(Math.random() * colors.length);
}

$(document).ready(function() {
   $(".now p").click(function(){
        window.location=$(this).find("a").attr("href"); return false;
    });

});
$( "#ss" ).css( "color", "red" );

$('div').css('background-color', 'green')