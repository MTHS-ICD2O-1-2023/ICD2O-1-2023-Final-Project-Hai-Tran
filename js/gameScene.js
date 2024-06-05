// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Hai Tran
// Created on: May 2024
// This file contains the JS functions for gameScene

window.onload = function () {
  let count = 10
  let countdown = setInterval(function () {
    document.getElementById("result").innerHTML =
      "Current time left to make a move: " + "<br />" + count
    count--
    if (count < 0) {
      clearInterval(countdown)
    }
  }, 1000)

  let currentPlayer = "X"

  // this function mark the cell with an "X" or "O"
  let cell1 = document.getElementById("cell-1")
  cell1.addEventListener("click", function () {
    document.getElementById("cell-1").innerHTML = currentPlayer
    switchPlayer()
  })

  let cell2 = document.getElementById("cell-2")
  cell2.addEventListener("click", function () {
    document.getElementById("cell-2").innerHTML = currentPlayer
    switchPlayer()
  })

  let cell3 = document.getElementById("cell-3")
  cell3.addEventListener("click", function () {
    document.getElementById("cell-3").innerHTML = currentPlayer
    switchPlayer()
  })

  let cell4 = document.getElementById("cell-4")
  cell4.addEventListener("click", function () {
    document.getElementById("cell-4").innerHTML = currentPlayer
    switchPlayer()
  })

  let cell5 = document.getElementById("cell-5")
  cell5.addEventListener("click", function () {
    document.getElementById("cell-5").innerHTML = currentPlayer
    switchPlayer()
  })

  let cell6 = document.getElementById("cell-6")
  cell6.addEventListener("click", function () {
    document.getElementById("cell-6").innerHTML = currentPlayer
    switchPlayer()
  })

  let cell7 = document.getElementById("cell-7")
  cell7.addEventListener("click", function () {
    document.getElementById("cell-7").innerHTML = currentPlayer
    switchPlayer()
  })

  let cell8 = document.getElementById("cell-8")
  cell8.addEventListener("click", function () {
    document.getElementById("cell-8").innerHTML = currentPlayer
    switchPlayer()
  })

  let cell9 = document.getElementById("cell-9")
  cell9.addEventListener("click", function () {
    document.getElementById("cell-9").innerHTML = currentPlayer
    switchPlayer()
  })

  // this function switch back and forth between "X" and "O"
  function switchPlayer() {
    if (currentPlayer == "X") {
      currentPlayer = "O"
    } else {
      currentPlayer = "X"
    }
  }
}
