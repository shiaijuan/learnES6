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
/******/ 	__webpack_require__.p = "/js/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/*
{
var b = 10;
let a = 10;
}

console.log(b);
console.log(a);
*/

/*
for(var i=0 ; i<10 ; i++){
	
}
console.log(i);
*/


/*
for(let i=0 ; i<10 ; i++){
	
}
console.log(i);
*/

/*
var a = [];
for (var i = 0; i < 10; i++) {
  a[i] = function () {
    console.log(i);
  };
}
a[1]()	//执行console.log(i)，此时i已经是10了
*/


/*
var a = [];
for (let i = 0; i < 10; i++) {
  a[i] = function () {
    console.log(i);
  };
}
a[8]()	//执行console.log(i)，此时i已经是10了
*/



/*
var a=0;
for(let i=0; i<3; i++){
	a++
	let i= 'abc'+a;
	console.log(i);
}

*/


/*
console.log(foo);
var foo=2;


console.log(bar);
let bar=2;
*/

/*
var tmp = 123;
if(true){
	tmp='abc';
	let tmp;
}
*/


/*
if (true) {
  // TDZ暂时性死区开始
  //tmp = 'abc'; // ReferenceError
  //console.log(tmp); // ReferenceError

  let tmp; // TDZ结束
  console.log(tmp); // undefined

  tmp = 123;
  console.log(tmp); // 123
}
*/




/*
typeof x;
let x;
*/



/*
function bar(x = y, y = 2) {
  return [x, y];
}

bar(); // 报错
*/



/*
function bar(x = 2, y = x) {
  return [x, y];
}
bar(); // [2, 2]
console.log(bar());
*/


/*
var x=x;	//不报错
let a=a;	//报错
*/


/*
(function saj(){
	let a=10;
	var a=1;
	console.log(a);
}())
*/

/*
(function saj(){
	var a=10;
	let a=11;
	console.log(a);
}()) 
*/

/*
(function saj(){
	let a=10;
	let a=11;
	console.log(a);
}())
*/



/*
(function saj(){
	var a=10;
	var a=1;
	console.log(a);
}())
*/

/*
function func(arg) {
  let arg; // 报错
}
*/

/*
function func(arg) {	//相当于var arg
  let arg; // 报错
  console.log(arg);
}
func('saj');
*/

/*
function func(arg) {
  var a=arg;
  {
    let arg=a; // 不报错
    console.log(arg);
  }
}

func("saj")
*/






/*
var tmp = new Date();

function f() {
  console.log(tmp);
  if (false) {
    var tmp = 'hello world';
  }
}

f(); // undefined
*/



/*
let f=10;
function fn(){
  f=7;  //暂时性死区
  let f=2;
}
fn();
*/

/*
var btns = document.querySelectorAll('button');
for(var i=0;i<btns.length;i++){
   btns[i].onclick = function(){
     console.log(i);
   }
}
*/



/*
var btns = document.querySelectorAll('button');
for(var i=0;i<btns.length;i++){
   btns[i].index=i;
   btns[i].onclick = function(){
     console.log(this.index);
   }
}

*/

/*
var btns = document.querySelectorAll('button');
for(var i=0;i<btns.length;i++){
   (function(i){
       btns[i].onclick = function(){
         console.log(i);
       }
   })(i)
}
*/


/*
var btns = document.querySelectorAll('button');
for(let i=0;i<btns.length;i++){
    btns[i].onclick = function(){
       console.log(i);
    }
}
*/

/*
//在循环语句是一个父作用域，在循环体之中是一个子作用域
for(let i=0;i<3;i++){
  let i=10;
  console.log(i);
}

console.log(i);
*/














//---const声明常量-------------------------------------------
//1. 声明的时候必须赋值
/*
var a;
let b;


const saj="shiaijuan";
console.log(saj);*/

//const abc;  //报错


//2.
//(1) 储存的基本数据类型，值不可改变
/*const a=1;
a = {};*/

const obj = { a:10 };
obj.a=30;
console.log(obj.a);

//(1) 储存的对象，引用不可以改变，里面数据可变
/*const obj = { a : 10 };
obj.a=20;*/


/***/ })
/******/ ]);