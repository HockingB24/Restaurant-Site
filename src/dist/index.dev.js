"use strict";

var _pageLoad = require("./pageLoad.js");

require("./style.css");

var loadEventListeners = function loadEventListeners() {
  homeBtn.addEventListener('click', loadHome);
  menuBtn.addEventListener('click', loadMenu);
  contactBtn.addEventListener('click', loadContact);
};

var loadHome = function loadHome() {
  clearDiv();
  (0, _pageLoad.homeLoad)();
};

var clearDiv = function clearDiv() {
  var div = document.getElementById('content');

  while (div.firstChild) {
    div.removeChild(div.firstChild);
  }

  console.log("Done");
};

var loadMenu = function loadMenu() {
  clearDiv();
  (0, _pageLoad.menuLoad)();
};

var loadContact = function loadContact() {
  clearDiv();
  (0, _pageLoad.contactLoad)();
};

(0, _pageLoad.homeLoad)();
var homeBtn = document.querySelector("#home");
var menuBtn = document.querySelector("#menu");
var contactBtn = document.querySelector("#contact");
loadEventListeners();