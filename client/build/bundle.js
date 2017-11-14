/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var requestHelper = __webpack_require__(1)
var dropdownMaker = __webpack_require__(2)

var renderUserList = () => {
  var url = 'http://localhost:3000/api/transactions'
  var usersSelect = document.querySelector('#username-input')
  requestHelper.getRequest(url, function (users) {
    dropdownMaker.makeDropdown(users, usersSelect)
  })
}

window.addEventListener('load', renderUserList)


/***/ }),
/* 1 */
/***/ (function(module, exports) {

var requestHelper = {}

requestHelper.getRequest = function (url, callback) {
  var xhr = new XMLHttpRequest()
  xhr.open('GET', url)
  xhr.addEventListener('load', function () {
    var jsonString = xhr.responseText
    var data = JSON.parse(jsonString)
    callback(data)
  })
  xhr.send()
}

requestHelper.postRequest = function (url, payload, callback) {
  var xhr = new XMLHttpRequest()
  xhr.open('POST', url)
  xhr.setRequestHeader('Content-Type', 'application/json')
  xhr.addEventListener('load', function () {
    var data = JSON.parse(xhr.responseText)
    callback(data)
  })
  var jsonString = JSON.stringify(payload)
  xhr.send(jsonString)
}

requestHelper.updateRequest = function (url, data, callback) {
  var jsonString = JSON.stringify(data)
  var xhr = new XMLHttpRequest()
  xhr.open('PUT', url)
  xhr.setRequestHeader('Content-Type', 'application/json')
  xhr.addEventListener('load', function () {
    var returnedData = JSON.parse(xhr.responseText)
    callback(returnedData)
  })
  xhr.send(jsonString)
}

requestHelper.deleteRequest = function (url, callback) {
  var xhr = new XMLHttpRequest()
  xhr.open('DELETE', url)
  xhr.addEventListener('load', function () {
    var jsonString = xhr.responseText
    var data = JSON.parse(jsonString)
    callback(data)
  })
  xhr.send()
}

module.exports = requestHelper


/***/ }),
/* 2 */
/***/ (function(module, exports) {

var dropdownMaker = {}

dropdownMaker.makeDropdown = function (items, select) {
  while (select.firstChild) {
    select.removeChild(select.firstChild)
  }
  var firstOption = document.createElement('option')
  firstOption.innerText = 'Choose a user'
  firstOption.disabled = true
  firstOption.selected = true
  select.appendChild(firstOption)
  var users = []
  items.forEach(function (item) {
    if (!users.includes(item.user)) {
      var option = document.createElement('option')
      option.innerText = item.user
      select.appendChild(option)
      users.push(item.user)
    }
  })
}

module.exports = dropdownMaker


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map