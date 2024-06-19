// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Hai Tran
// Created on: May 2024
// This file contains the JS functions for index.html

window.onload = function () {
  let count = 1
  let countdown = setInterval(function () {
    count--
    if (count < 0) {
      window.location.href = "menuScene.html"
    }
  }, 1000)
}
