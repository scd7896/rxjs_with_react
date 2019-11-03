module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./component/Test.js":
/*!***************************!*\
  !*** ./component/Test.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Test = ({
  el
}) => {
  return __jsx("div", null, el);
};

/* harmony default export */ __webpack_exports__["default"] = (Test);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _component_Test__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../component/Test */ "./component/Test.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const index = () => {
  const {
    0: arr,
    1: setArr
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([1, 2, 3, 4, 5]);

  const firstExample = () => {
    const subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    subject.subscribe({
      next: v => console.log(`observer A ${v}`)
    });
    subject.subscribe({
      next: v => console.log(`observer B ${v}`)
    });
    const observable = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])([1, 2, 3]);
    observable.subscribe(subject);
  };

  const secondExample = () => {
    const source = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(500);
    const subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    const multicasted = source.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["multicast"])(subject));
    let subscription1, subscription2, subscriptionConnect;
    subscription1 = multicasted.subscribe({
      next: v => console.log(`observarA : ${v}`),
      complete: () => console.log("구독종료")
    });
    subscriptionConnect = multicasted.connect();
    setTimeout(() => {
      subscription2 = multicasted.subscribe({
        next: v => console.log(`observerB : ${v}`)
      });
    }, 600);
    setTimeout(() => {
      subscription1.unsubscribe();
    }, 1200);
    setTimeout(() => {
      subscription2.unsubscribe();
      subscriptionConnect.unsubscribe();
    }, 2000);
  };

  const thirdClick = () => {
    //refCount는 현재 subject에 구독중인 옵저버 숫자를 파악한다.
    const source = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(500);
    const subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    const refCounted = source.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["multicast"])(subject), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["refCount"])());
    let subscription1, subscription2;
    console.log('observer A 구독시작');
    subscription1 = refCounted.subscribe({
      next: v => console.log(`observer A 카운팅 : ${v}`)
    });
    setTimeout(() => {
      console.log('observerB 구독시작');
      subscription2 = refCounted.subscribe({
        next: v => console.log(`observer B 카운팅 : ${v}`)
      });
    }, 600);
    setTimeout(() => {
      console.log('observerA 구독 종료');
      subscription1.unsubscribe();
    }, 2000);
    setTimeout(() => {
      console.log('observerB 구독 종료 ');
      subscription2.unsubscribe();
    }, 3000);
  };

  const mouseOddEvent = event => {
    if (event.clientX % 2 !== 0) {
      console.log("홀수");
    } else {
      console.log("짝수");
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {// const mouse = fromEvent(window, 'mousemove').pipe(
    //     map(el => el)
    // )
    // mouse.subscribe({
    //     next : (v)=> mouseOddEvent(v),
    //     error : (err)=>console.error(err)
    // })
  }, []);

  const mapTest = () => {
    const observable = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(arr).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(el => el));
    observable.subscribe({
      next: el => __jsx(_component_Test__WEBPACK_IMPORTED_MODULE_4__["default"], {
        el: el
      })
    });
  };

  const addArr = () => {
    setArr([...arr, 6]);
  };

  const moveToNext = () => {
    next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push('/second');
  };

  return __jsx("div", null, __jsx("button", {
    onClick: firstExample
  }, "\uCC98\uC74C \uC608\uC81C"), __jsx("button", {
    onClick: secondExample
  }, "\uB450\uBC88\uC9F8 \uC608\uC81C"), __jsx("button", {
    onClick: thirdClick
  }, "\uC138\uBC88\uC9F8 \uC608\uC81C"), mapTest(), __jsx("button", {
    onClick: addArr
  }, "\uBC30\uC5F4\uB298\uB824\uBC84\uB9AC\uAE30"), __jsx(_component_Test__WEBPACK_IMPORTED_MODULE_4__["default"], {
    el: 3
  }), __jsx("button", {
    onClick: moveToNext
  }, " \uB2E4\uC74C\uC608\uC81C\uB85C"));
};

index.getInitialProps = async context => {
  console.log(context.store);
  return {};
};

/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/kimserver/GitHub/TraB/RxJs/RxJs_Next_js/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "rxjs":
/*!***********************!*\
  !*** external "rxjs" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rxjs");

/***/ }),

/***/ "rxjs/operators":
/*!*********************************!*\
  !*** external "rxjs/operators" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rxjs/operators");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map