import {homeLoad, contactLoad, menuLoad} from './pageLoad.js';
import './style.css';

const loadEventListeners = () => {
    homeBtn.addEventListener('click', loadHome);
    menuBtn.addEventListener('click', loadMenu);
    contactBtn.addEventListener('click', loadContact);

}

const loadHome = () => {
    clearDiv();
    homeLoad();
}

const clearDiv = () => {
    let div = document.getElementById('content');
    while(div.firstChild) {
        div.removeChild(div.firstChild);
    }
    console.log("Done");
}

const loadMenu = () => {
    clearDiv();
    menuLoad();
}

const loadContact = () => {
    clearDiv();
    contactLoad();
}



homeLoad();

let homeBtn = document.querySelector("#home");
let menuBtn = document.querySelector("#menu");
let contactBtn = document.querySelector("#contact");

loadEventListeners();


