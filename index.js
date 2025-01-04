// document.querySelector("HTML").style.fontSize = "20px";

$("H1").css("display", "flex");
$("H1").css("justify-content", "center");
$("H1").css("margin-top", "64px");
// document.querySelector("H1").style.display = "flex";
// document.querySelector("H1").style.justifyContent = "center";
// document.querySelector("H1").style.marginTop = "4rem";

$("p").css("padding", "32px");
$("p").css("max-width", "600px");
$("p").css("margin", "0 auto");
// document.querySelector("p").style.padding = "1rem";

$("#buttons").css("display", "flex");
$("#buttons").css("justify-content", "center");
$("#buttons").css("gap", "1rem");

// $("button").text("Button");
$("button").css("padding", "10px");

// document.getElementById("btns").style.display = "flex";
// document.getElementById("btns").style.justifyContent = "center";
// document.getElementById("btns").style.gap = "1rem";
// // Below lines of code is equlivalent to $("button").text("Button"); using jQuery
// for (var i = 0; i < document.querySelectorAll(".btn").length; i++) {
//   document.querySelectorAll("button")[i].textContent = "Button";
//   document.querySelectorAll("button")[i].style.padding = "12px";
// }

document.querySelector("button").addEventListener("click", function () {
  var r = Math.floor(Math.random() * 255) + 100;
  var g = Math.floor(Math.random() * 255) + 100;
  var b = Math.floor(Math.random() * 255) + 100;
  document.querySelector("body").style.backgroundColor =
    "rgb(" + r + "," + g + "," + b + ")";
  document.querySelector("button").style.backgroundColor =
    "rgb(" + (b - 100) + "," + (g - 100) + "," + (r - 100) + ")";
});

document.addEventListener("keypress", function (e) {
  if (e.key === " ") {
    document.querySelector("H1").textContent = e.code;
  } else {
    document.querySelector("H1").textContent = e.key;
  }
});
