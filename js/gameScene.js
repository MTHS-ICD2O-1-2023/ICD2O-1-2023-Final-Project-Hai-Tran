// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Hai Tran
// Created on: May 2024
// This file contains the JS functions for gameScene

let count = 10
let countdown = setInterval(function () {
  document.getElementById("result").innerHTML =
    "Current time left to make a move: " + "<br />" + count
  count--
  if (count < 0) {
    clearInterval(countdown)
  }
}, 1000)

window.onload = function() {
  let currentPlayer = "X"
  // this function mark the cell with an "X" or "O"
  let cell1 = document.getElementById("cell-1")
  cell1.addEventListener("click", function () {
    document.getElementById("cell-1").innerHTML = currentPlayer
  })
}