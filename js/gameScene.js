// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Hai Tran
// Created on: May 2024
// This file contains the JS functions for gameScene


  let count = 10
  let countdown = setInterval(function() {
      document.getElementById("result").innerHTML = "Current time left to make a move: " + "<br />" +count
      count--
      if (count < 0) {
          clearInterval(countdown)
      }
  }, 1000)
