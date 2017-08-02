/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	__webpack_require__.p = "dist";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Promise

/**
 * 基本概念：
 *  Promise：是ES6中新增的异步编程解决方案，体现在代码中它是一个对象，
 *          可以通过 Promise 构造函数来实例化。
 *          
 *  - new Promise(cb)  ===> 实例的基本使用  Pending Resolved Rejected
 *
 *  > 两个原型方法：
 *    - Promise.prototype.then()  
 *    - Promise.prototype.catch()
 *
 *  > 两个常用的静态方法：
 *    - Promise.all()
 *    - Promise.resolve()
 */
var imgs = ['http://i1.piimg.com/1949/4f411ed22ce88950.jpg', 'http://i1.piimg.com/1949/5a35e8c2b246ba6f.jpg', 'http://i1.piimg.com/1949/1afc870a86dfec5f.jpg'];

// new Promise(cb)
// Pending (进行中) ===> Resolved (已完成)
// Pending (进行中) ===> Rejected (已失败)

// const p = new Promise(function (resolve, reject){
//   const img = new Image();
//   img.src = '';
//   img.onload = function (){
//     resolve(this);
//   };
//   img.onerror = function (){
//     reject(new Error('图片加载失败'));
//   };
// });

// console.log(123);
// 
// p.then(function (img){
//   console.log('加载完成');
//   document.body.appendChild(img)
// }).catch(function (err){
//   console.log(err);
// })
// 
// console.log(456);

function loadImg(url) {
  var p = new Promise(function (resolve, reject) {
    var img = new Image();
    img.src = url;
    img.onload = function () {
      resolve(this);
    };
    img.onerror = function () {
      reject(new Error('图片加载失败'));
    };
  });
  return p;
}

// loadImg(imgs[0]).then(function (img){
//   document.body.appendChild(img)
// })

/**
 * Promise.all 可以将多个Promise实例包装成一个新的Promise实例
 * 
 *  - 当所有Promise实例的状态都变成resolved，Promise.all的状态才会变成resolved，此时返回值组成一个数组，传递给then中的resolve函数。
 *  - 只要其中有一个被rejected，Promise.all的状态就变成rejected，此时第一个被reject的实例的返回值，会传递给p的回调函数。
 */

// const allDone = Promise.all([loadImg(imgs[0]), loadImg(imgs[1]), loadImg('')]);
// 
// allDone.then(function (datas){
//   datas.forEach(function(item, i) {
//     document.body.appendChild(item);
//   });
// }).catch(function (err){
//   console.log(err);
// })

// 参数是Promise实例，将不做任何修改、原封不动地返回这个实例。
// Promise.resolve(loadImg(imgs[0])).then(function (img){
//   document.body.appendChild(img);
// })

// 将对象转为Promise对象，然后就立即执行thenable对象的then方法。
// Promise.resolve({
//   then(resolve, reject){
//     const img = new Image();
//     img.src = imgs[1];
//     img.onload = function (){
//       resolve(this);
//     }
//   }
// }).then(function (img){
//   document.body.appendChild(img);
// });

// Promise.resolve('miaov').then(function (str){
//   console.log(str);
// })

var p = Promise.resolve();

console.log(p);

/***/ })
/******/ ]);