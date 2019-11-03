webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithoutHoles; });
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);

function _arrayWithoutHoles(arr) {
  if (_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArray; });
/* harmony import */ var _core_js_array_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/from */ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js");
/* harmony import */ var _core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/is-iterable */ "./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js");
/* harmony import */ var _core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1__);


function _iterableToArray(iter) {
  if (_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default()(Object(iter)) || Object.prototype.toString.call(iter) === "[object Arguments]") return _core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default()(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableSpread; });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _toConsumableArray; });
/* harmony import */ var _arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js");
/* harmony import */ var _nonIterableSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js");



function _toConsumableArray(arr) {
  return Object(_arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || Object(_nonIterableSpread__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/dist/client/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _component_Test__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../component/Test */ "./component/Test.js");



var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;






var index = function index() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([1, 2, 3, 4, 5]),
      arr = _useState[0],
      setArr = _useState[1];

  var firstExample = function firstExample() {
    var subject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    subject.subscribe({
      next: function next(v) {
        return console.log("observer A ".concat(v));
      }
    });
    subject.subscribe({
      next: function next(v) {
        return console.log("observer B ".concat(v));
      }
    });
    var observable = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])([1, 2, 3]);
    observable.subscribe(subject);
  };

  var secondExample = function secondExample() {
    var source = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["interval"])(500);
    var subject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    var multicasted = source.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["multicast"])(subject));
    var subscription1, subscription2, subscriptionConnect;
    subscription1 = multicasted.subscribe({
      next: function next(v) {
        return console.log("observarA : ".concat(v));
      },
      complete: function complete() {
        return console.log("구독종료");
      }
    });
    subscriptionConnect = multicasted.connect();
    setTimeout(function () {
      subscription2 = multicasted.subscribe({
        next: function next(v) {
          return console.log("observerB : ".concat(v));
        }
      });
    }, 600);
    setTimeout(function () {
      subscription1.unsubscribe();
    }, 1200);
    setTimeout(function () {
      subscription2.unsubscribe();
      subscriptionConnect.unsubscribe();
    }, 2000);
  };

  var thirdClick = function thirdClick() {
    //refCount는 현재 subject에 구독중인 옵저버 숫자를 파악한다.
    var source = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["interval"])(500);
    var subject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    var refCounted = source.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["multicast"])(subject), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["refCount"])());
    var subscription1, subscription2;
    console.log('observer A 구독시작');
    subscription1 = refCounted.subscribe({
      next: function next(v) {
        return console.log("observer A \uCE74\uC6B4\uD305 : ".concat(v));
      }
    });
    setTimeout(function () {
      console.log('observerB 구독시작');
      subscription2 = refCounted.subscribe({
        next: function next(v) {
          return console.log("observer B \uCE74\uC6B4\uD305 : ".concat(v));
        }
      });
    }, 600);
    setTimeout(function () {
      console.log('observerA 구독 종료');
      subscription1.unsubscribe();
    }, 2000);
    setTimeout(function () {
      console.log('observerB 구독 종료 ');
      subscription2.unsubscribe();
    }, 3000);
  };

  var mouseOddEvent = function mouseOddEvent(event) {
    if (event.clientX % 2 !== 0) {
      console.log("홀수");
    } else {
      console.log("짝수");
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {// const mouse = fromEvent(window, 'mousemove').pipe(
    //     map(el => el)
    // )
    // mouse.subscribe({
    //     next : (v)=> mouseOddEvent(v),
    //     error : (err)=>console.error(err)
    // })
  }, []);

  var mapTest = function mapTest() {
    var observable = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(arr);
    observable.subscribe({
      next: function next(el) {
        return console.log(el);
      }
    });
  };

  var addArr = function addArr() {
    setArr([].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(arr), [6]));
  };

  return __jsx("div", null, __jsx("button", {
    onClick: firstExample
  }, "\uCC98\uC74C \uC608\uC81C"), __jsx("button", {
    onClick: secondExample
  }, "\uB450\uBC88\uC9F8 \uC608\uC81C"), __jsx("button", {
    onClick: thirdClick
  }, "\uC138\uBC88\uC9F8 \uC608\uC81C"), mapTest(), __jsx("button", {
    onClick: addArr
  }, "\uBC30\uC5F4\uB298\uB824\uBC84\uB9AC\uAE30"));
};

index.getInitialProps =
/*#__PURE__*/
function () {
  var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log(context.store);
            return _context.abrupt("return", {});

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ })

})
//# sourceMappingURL=index.js.c63daf074d26eaa903f3.hot-update.js.map