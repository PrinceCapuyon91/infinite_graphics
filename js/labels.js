$(".buttonControl").on("click", function () {
  var showSelector = $(this).data("show");
  $(".project").hide();
  $(showSelector).show();
});

//** FUNCTION FOR CHANGING THE PRICE */
let button_1 = "12.00";
let button_2 = "13.26";
let button_3 = "14.05";
let button_4 = "15.05";
let button_5 = "16.69";
let button_6 = "17.19";
let button_7 = "18.11";
let button_8 = "19.26";

document.getElementById("button1").addEventListener("click", function () {
  document.getElementById("price").innerHTML = button_1;
});

document.getElementById("button2").addEventListener("click", function () {
  document.getElementById("price").innerHTML = button_2;
});

document.getElementById("button3").addEventListener("click", function () {
  document.getElementById("price").innerHTML = button_3;
});

document.getElementById("button4").addEventListener("click", function () {
  document.getElementById("price").innerHTML = button_4;
});

document.getElementById("button5").addEventListener("click", function () {
  document.getElementById("price").innerHTML = button_5;
});

document.getElementById("button6").addEventListener("click", function () {
  document.getElementById("price").innerHTML = button_6;
});

document.getElementById("button7").addEventListener("click", function () {
  document.getElementById("price").innerHTML = button_7;
});

document.getElementById("button8").addEventListener("click", function () {
  document.getElementById("price").innerHTML = button_8;
});

//** Getting the main price from dropdown menu */
let mainPrice = parseInt(document.getElementById("price").innerHTML);
let dropPrice = parseInt(document.getElementById("buttonPrice").innerHTML);

//** Converting strings into numbers */
let finalPrice = mainPrice * dropPrice;
finalPrice = finalPrice.toFixed(2);

//** Displaying final price */
document.getElementById("buttonPrice").addEventListener("click", function () {
  document.getElementById("price").innerHTML = finalPrice;
});

console.log(typeof finalPrice);
