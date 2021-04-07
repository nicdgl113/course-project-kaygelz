"use strict";

/*
Kaylee Gelz
DGL113 - Project
April 5
*/

//calculator
var myLink = document.getElementById("button");
function calculate() {
  var box = prompt("Enter Your Box Price"); // box total
  ///array containg box total
  var gst1 = box * 0.05; ///calculate gst
  var pst1 = box * 0.08; ///calculate pst
  var ship = 10; ///shipping
  var total1 = box + gst1 + pst1 + ship; ///calculate total
  let str1 = `Box: $${box} GST: $${gst1} PST: $${pst1} Shipping: $${ship} Total: $${total1}`; ///string
  let Total = total1;
  let str2 = `Your total is $${Total}`;
  let ele = document.getElementById("main");
  // append the result to the current content in main
  let htmlString = `${str1} ${str2}`;
  ele.innerHTML += htmlString;
}

///add event listener
myLink.addEventListener("click", calculate);

///function calls
calculate();
