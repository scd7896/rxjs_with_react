webpackHotUpdate("static/development/pages/index.js",{

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/dist/client/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _component_Test__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../component/Test */ "./component/Test.js");


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;






var index = function index() {
  var firstExample = function firstExample() {
    var subject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
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
    var observable = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])([1, 2, 3]);
    observable.subscribe(subject);
  };

  var secondExample = function secondExample() {
    var source = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["interval"])(500);
    var subject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    var multicasted = source.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["multicast"])(subject));
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
    var source = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["interval"])(500);
    var subject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    var refCounted = source.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["multicast"])(subject), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["refCount"])());
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

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {// const mouse = fromEvent(window, 'mousemove').pipe(
    //     map(el => el)
    // )
    // mouse.subscribe({
    //     next : (v)=> mouseOddEvent(v),
    //     error : (err)=>console.error(err)
    // })
  }, []);
  var arr = [1, 2, 3, 4, 5];

  var mapTest = function mapTest() {
    var observable = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(arr);
    observable.subscribe({
      next: function next(el) {
        return console.log(el);
      }
    });
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
//# sourceMappingURL=index.js.870a073e1e27e9e9ac5b.hot-update.js.map