/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */

/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/placePhotos.js":
/*!****************************!*\
  !*** ./src/placePhotos.js ***!
  \****************************/
/***/ (() => {

        eval("const photoConfig = [\n  [0, 10], // Summer Wu\n  [100, 101], // Andy Travis\n  [500, 501], // Andy Travis (2)\n  [400, 401], // Ben Gates\n  [200, 206], // Jessica Davids\n  [300, 318], // Aiden Engvall\n  [700, 701], // Alex McConnell\n  [800, 803], // Lucy Wu\n  [900, 901], // Hendrik Sorensen\n  [1000, 1002], // Jacob Sorensen\n  [1100, 1101], // Erik Sorensen\n  [600, 605], // Sahil Sawant\n]\n\nconst exclude = [\n  7, // Summer Wu\n  8,\n  10,\n  501, // Andy Travis\n  200, // Jessica Davids\n  201,\n  204,\n  206,\n  300, // Aiden Engvall\n  301,\n  302,\n  303,\n  304,\n  306,\n  310,\n  311,\n  312,\n  315,\n  316,\n  317,\n  318,\n  803,\n]\n\nlet realExclusionOrder = []\n\nfunction placePhotos() {\n  let currentCard = 0\n\n  for (let subject = photoConfig.length - 1; subject >= 0; subject--) {\n    // console.log(`subject${subject}`);\n\n    let range = []\n    for (let i = photoConfig[subject][0]; i <= photoConfig[subject][1]; i++) {\n      range.push(i)\n    }\n    // console.log(range)\n\n    while (range.length > 0) {\n      // console.log(range.length);\n      let randomPhotoIndex = Math.floor(Math.random() * range.length)\n      let photoName = range[randomPhotoIndex]\n\n      let flexContainer = document.getElementsByClassName('flexContainer')[0]\n      let newCard = document.createElement('div')\n      let newCardImage = document.createElement('img')\n      newCard.appendChild(newCardImage)\n      newCardImage.classList.add('cardImage')\n      newCard.classList.add('card')\n      flexContainer.appendChild(newCard)\n\n      let photoCards = document.getElementsByClassName('card')\n      photoCards[\n        currentCard\n      ].style.backgroundImage = `url('./images/small/${photoName}.png')`\n\n      let photoCardImages = document.getElementsByClassName('cardImage')\n      photoCardImages[currentCard].setAttribute(\n        'src',\n        `./images/portfolio/${photoName}.png`\n      )\n      photoCardImages[currentCard].setAttribute('loading', 'lazy')\n      photoCardImages[currentCard].setAttribute('draggable', 'false')\n      photoCardImages[currentCard].classList.add('cardImage')\n      photoCardImages[currentCard].addEventListener('load', (e) => {\n        e.target.classList.add('loaded')\n      })\n      // if (photoCardImages[currentCard].complete)\n      //     photoCardImages[currentCard].classList.add('loaded')\n\n      if (exclude.includes(photoName)) {\n        realExclusionOrder.push(currentCard)\n      }\n\n      currentCard++\n      range.splice(randomPhotoIndex, 1) // remove element at index\n    }\n  }\n\n  // remove cards with excluded images\n  for (let exclusion = exclude.length - 1; exclusion >= 0; exclusion--) {\n    let photoCards = document.getElementsByClassName('card')\n    photoCards[realExclusionOrder[exclusion]].remove()\n  }\n}\n\nplacePhotos()\n\n\n//# sourceURL=webpack://personal-website/./src/placePhotos.js?");

        /***/
})

    /******/
});
/************************************************************************/
/******/
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/placePhotos.js"]();
  /******/
  /******/
})()
  ;
