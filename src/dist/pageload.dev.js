"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.menuLoad = exports.contactLoad = exports.homeLoad = void 0;

var homeLoad = function homeLoad() {
  var contentDiv = document.querySelector("#content");
  var myImage = document.createElement("img");
  myImage.src = "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F9%2F2018%2F02%2Fbarbuzzo-best-italian-restaurants-philly-FT-BLOG0218.jpg";
  myImage.alt = "Spaghetti on a plate";
  myImage.setAttribute("width", "400");
  myImage.setAttribute("height", "400");
  myImage.classList.add('imgHome');
  var topHeading = document.createElement("h1");
  topHeading.innerHTML = "Mama Mia's Italian Restaurante";
  topHeading.classList.add('homeHead');
  var para1 = document.createElement("p");
  para1.classList.add('homePara');
  para1.innerHTML = "Welcome to our restaurant's website! We serve only the finest Italian food, with ingredients sourced straight from Italy. You're going to love our dishes!";
  contentDiv.appendChild(myImage);
  contentDiv.appendChild(topHeading);
  contentDiv.appendChild(para1);
};

exports.homeLoad = homeLoad;

var contactLoad = function contactLoad() {
  var contentDiv = document.querySelector("#content");
  var phoneNum = document.createElement("p");
  phoneNum.innerHTML = "111-222-1234";
  var emailAddress = document.createElement("p");
  emailAddress.innerHTML = "realEmail@gmail.com";
  var restaurantAddress = document.createElement("p");
  restaurantAddress.innerHTML = "123 Restaurante Drive, New York City, NY";
  contentDiv.appendChild(phoneNum);
  contentDiv.appendChild(emailAddress);
  contentDiv.appendChild(restaurantAddress);
};

exports.contactLoad = contactLoad;

var menuLoad = function menuLoad() {
  var contentDiv = document.querySelector('#content'); //Item 1: Spaghetti

  var spgImg = "https://www.foodiecrush.com/wp-content/uploads/2017/09/My-Moms-Homemade-Spaghetti-and-Meat-Sauce-foodiecrush.com-017-683x1024-1.jpg"; //spgImg.classList.add('menuImg');

  var spgAltText = "Spaghetti with Meatballs";
  var spgHeading = 'Spaghetti with Meatballs';
  var spgDesc = "Spaghetti and Meatballs served with Pasta Sauce and Parmesan Cheese";
  var spaghetDiv = menuItem(spgImg, spgAltText, spgHeading, spgDesc); //Item 2: Lasagna

  var lsgImg = "https://www.jessicagavin.com/wp-content/uploads/2017/07/meat-lasagna-1200.jpg"; //lsgImg.classList.add('menuImg');

  var lsgAltText = "Lasagna";
  var lsgHeading = "Lasagna with Ground Beef";
  var lsgDesc = "Lasagna served with Ground Beef and Italian Sausage on the inside";
  var lasagnaDiv = menuItem(lsgImg, lsgAltText, lsgHeading, lsgDesc); //Item 3: Fettucine Alfredo

  var fetImg = "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F8135663.jpg"; //fetImg.classList.add('menuImg');

  var fetAltText = "Fettucine Alfredo";
  var fetHeading = "Fettucine Alfredo";
  var fetDesc = "Dish of fettucine served in a sauce of cream, butter, and Parmesan cheese";
  var fettucineDiv = menuItem(fetImg, fetAltText, fetHeading, fetDesc);
  contentDiv.appendChild(spaghetDiv);
  contentDiv.appendChild(lasagnaDiv);
  contentDiv.appendChild(fettucineDiv);
};

exports.menuLoad = menuLoad;

var menuItem = function menuItem(imgSrc, altText, menuHead, menuDesc) {
  var contentDiv = document.querySelector('#content');
  var itemDiv = document.createElement('div');
  var itemPic = document.createElement("img");
  itemPic.src = imgSrc;
  itemPic.alt = altText;
  itemPic.setAttribute("width", "300");
  itemPic.setAttribute("height", "300");
  itemPic.classList.add('menuImg');
  var itemHeading = document.createElement("h2");
  itemHeading.innerHTML = menuHead;
  var itemDesc = document.createElement("p");
  itemDesc.innerHTML = menuDesc;
  itemDiv.appendChild(itemPic);
  itemDiv.appendChild(itemHeading);
  itemDiv.appendChild(itemDesc);
  itemDiv.classList.add('menuItem');
  return itemDiv;
};