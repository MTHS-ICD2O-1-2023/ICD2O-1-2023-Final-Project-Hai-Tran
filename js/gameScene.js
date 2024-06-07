// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Hai Tran
// Created on: May 2024
// This file contains the JS functions for gameScene

window.onload = function () {
  let count = 10
  let countdown = setInterval(function () {
    document.getElementById("count-down").innerHTML =
      "Current time left to make a move: " + "<br />" + count + "s"
    count--
    if (count < 0) {
      checkWin()
    }
  }, 1000)

  let currentPlayer = "X"

  // this function mark the cell with an "X" or "O"
  let cells = document.getElementsByClassName("cell")
  for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", function () {
      if (cells[i].innerHTML !== "") {
        return
      }
      cells[i].innerHTML = currentPlayer
      checkWin()
    })
  }

  function checkWin() {
    if (
      // this function check win for row
      (cells[0].innerHTML !== "" &&
        cells[0].innerHTML === cells[1].innerHTML &&
        cells[1].innerHTML === cells[2].innerHTML) ||
      (cells[3].innerHTML !== "" &&
        cells[3].innerHTML === cells[4].innerHTML &&
        cells[4].innerHTML === cells[5].innerHTML) ||
      (cells[6].innerHTML !== "" &&
        cells[6].innerHTML === cells[7].innerHTML &&
        cells[7].innerHTML === cells[8].innerHTML)
    ) {
      clearInterval(countdown)
      document.getElementById("match-result").innerHTML =
        "The winner is " + currentPlayer
    } else if (count < 0) {
      clearInterval(countdown)
      document.getElementById("match-result").innerHTML =
        "The winner is " + currentPlayer
    } else if (
      // this function check win for column
      (cells[0].innerHTML !== "" &&
        cells[0].innerHTML === cells[3].innerHTML &&
        cells[3].innerHTML === cells[6].innerHTML) ||
      (cells[1].innerHTML !== "" &&
        cells[1].innerHTML === cells[4].innerHTML &&
        cells[4].innerHTML === cells[7].innerHTML) ||
      (cells[2].innerHTML !== "" &&
        cells[2].innerHTML === cells[5].innerHTML &&
        cells[5].innerHTML === cells[8].innerHTML)
    ) {
      clearInterval(countdown)
      document.getElementById("match-result").innerHTML =
        "The winner is " + currentPlayer
    } else {
      switchPlayer()
    }
  }

  // this function switch back and forth between "X" and "O"
  function switchPlayer() {
    if (currentPlayer == "X") {
      currentPlayer = "O"
    } else {
      currentPlayer = "X"
    }
  }
}
