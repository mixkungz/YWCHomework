webpackHotUpdate(5,{

/***/ 395:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(45);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(49);

var _inherits3 = _interopRequireDefault(_inherits2);

var _taggedTemplateLiteral2 = __webpack_require__(391);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _head = __webpack_require__(392);

var _head2 = _interopRequireDefault(_head);

var _styledComponents = __webpack_require__(393);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _layout = __webpack_require__(407);

var _layout2 = _interopRequireDefault(_layout);

var _link = __webpack_require__(441);

var _link2 = _interopRequireDefault(_link);

var _sweetalert = __webpack_require__(453);

var _sweetalert2 = _interopRequireDefault(_sweetalert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/phachara/Desktop/Project/2017/Homework/ywc/pages/index.js?entry';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  .box{\n    min-height:100vh;\n    overflow:hidden;\n    background-color:#1e262f;\n  }\n  .heading-text{\n    text-shadow: 1px 2px 6px rgba(51,204,234,0.91);\n    color:white;\n    text-align:center;\n  }\n  .mybtn{\n    padding : 0.5em 4em 0.5em 4em;\n    background:transparent;\n    color:white;\n    border:1px solid #4ccdea;\n  }\n  .mybtn:hover{\n    background:#4ccdea;\n    color:white;\n    transition:0.7s;\n  }\n  .logo{\n    padding-top:20%;\n    max-width:250px;\n  }\n  @media only screen and (max-width: 500px) {\n    .mybtn{\n      padding : 0.5em 2em 0.5em 2em;\n    }\n  }\n'], ['\n  .box{\n    min-height:100vh;\n    overflow:hidden;\n    background-color:#1e262f;\n  }\n  .heading-text{\n    text-shadow: 1px 2px 6px rgba(51,204,234,0.91);\n    color:white;\n    text-align:center;\n  }\n  .mybtn{\n    padding : 0.5em 4em 0.5em 4em;\n    background:transparent;\n    color:white;\n    border:1px solid #4ccdea;\n  }\n  .mybtn:hover{\n    background:#4ccdea;\n    color:white;\n    transition:0.7s;\n  }\n  .logo{\n    padding-top:20%;\n    max-width:250px;\n  }\n  @media only screen and (max-width: 500px) {\n    .mybtn{\n      padding : 0.5em 2em 0.5em 2em;\n    }\n  }\n']);
// import ReactTable from 'react-table'


(0, _styledComponents.injectGlobal)(_templateObject);

var Main = function (_React$Component) {
  (0, _inherits3.default)(Main, _React$Component);

  function Main() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Main);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Main.__proto__ || (0, _getPrototypeOf2.default)(Main)).call.apply(_ref, [this].concat(args))), _this), _this.future = function () {
      console.log('ttttt');
      (0, _sweetalert2.default)({
        title: '( ͡° ͜ʖ ͡°)',
        text: 'Future Feature',
        timer: 3000
      });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Main, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, _react2.default.createElement('div', { className: 'text-center', __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, _react2.default.createElement('img', { src: '/static/img/logo.png', className: 'logo', __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      })), _react2.default.createElement('h1', { className: 'heading-text', __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, '\u0E2D\u0E22\u0E32\u0E01\u0E1F\u0E31\u0E07\u0E1C\u0E25\u0E41\u0E1A\u0E1A\u0E44\u0E2B\u0E19\u0E2B\u0E25\u0E48\u0E30'), _react2.default.createElement('div', { className: 'd-flex justify-content-center align-item-center', __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, _react2.default.createElement('p', { className: '', style: { display: 'flex', justifyContent: 'center' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, _react2.default.createElement('span', { className: 'mybtn mx-3 my-3', onClick: this.future, __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, '\u0E15\u0E37\u0E48\u0E19\u0E40\u0E15\u0E49\u0E19'), _react2.default.createElement(_link2.default, { href: '/generalannounce', __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, _react2.default.createElement('span', { className: 'mybtn mx-3 my-3', __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, '\u0E0A\u0E34\u0E25\u0E46')))));
    }
  }]);

  return Main;
}(_react2.default.Component);

exports.default = Main;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkhlYWQiLCJzdHlsZWQiLCJpbmplY3RHbG9iYWwiLCJMYXlvdXQiLCJMaW5rIiwiU3dhbCIsIk1haW4iLCJmdXR1cmUiLCJjb25zb2xlIiwibG9nIiwidGl0bGUiLCJ0ZXh0IiwidGltZXIiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQVc7Ozs7QUFDbEIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU87Ozs7QUFDUCxBQUFPOzs7Ozs7Ozs7QUFMUDs7O0FBT0E7O0ksQUFpQ007Ozs7Ozs7Ozs7Ozs7O3dNLEFBRUosU0FBUyxZQUFLLEFBQ1o7Y0FBQSxBQUFRLElBQVIsQUFBWSxBQUNaOztlQUFLLEFBQ0ksQUFDUDtjQUZHLEFBRUcsQUFDTjtlQUhGLEFBQUssQUFHSSxBQUVWO0FBTE0sQUFDSDtBOzs7Ozs2QkFNSyxBQUNMOzZCQUNNLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsY0FBQSxTQUFLLFdBQUwsQUFBZTtvQkFBZjtzQkFBQSxBQUNJO0FBREo7Z0RBQ1MsS0FBTCxBQUFTLHdCQUF1QixXQUFoQyxBQUEwQztvQkFBMUM7c0JBRk4sQUFDRSxBQUNJLEFBRUo7QUFGSTsyQkFFSixjQUFBLFFBQUksV0FBSixBQUFjO29CQUFkO3NCQUFBO0FBQUE7U0FKRixBQUlFLEFBQ0EsdUlBQUEsY0FBQSxTQUFLLFdBQUwsQUFBZTtvQkFBZjtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQSxPQUFHLFdBQUgsQUFBYSxJQUFHLE9BQU8sRUFBQyxTQUFELEFBQVMsUUFBTyxnQkFBdkMsQUFBdUIsQUFBK0I7b0JBQXREO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBLFVBQU0sV0FBTixBQUFnQixtQkFBa0IsU0FBUyxLQUEzQyxBQUFnRDtvQkFBaEQ7c0JBQUE7QUFBQTtTQURGLEFBQ0UsQUFDQSxxRUFBQSxBQUFDLGdDQUFLLE1BQU4sQUFBVztvQkFBWDtzQkFBQSxBQUE4QjtBQUE5Qjt5QkFBOEIsY0FBQSxVQUFNLFdBQU4sQUFBZ0I7b0JBQWhCO3NCQUFBO0FBQUE7U0FUMUMsQUFDTSxBQUtFLEFBQ0UsQUFFRSxBQUE4QixBQU0zQzs7Ozs7RUEzQmMsZ0JBQU0sQSxBQThCekI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL3BoYWNoYXJhL0Rlc2t0b3AvUHJvamVjdC8yMDE3L0hvbWV3b3JrL3l3YyJ9

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/phachara/Desktop/Project/2017/Homework/ywc/pages/index.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/phachara/Desktop/Project/2017/Homework/ywc/pages/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(84)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5jYTk5MGZiZTg3YmUzZjNjMzY2Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/YjFmODJhZCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgUmVhY3RUYWJsZSBmcm9tICdyZWFjdC10YWJsZSdcbmltcG9ydCBIZWFkIGZyb20gJy4uL2NvbXBvbmVudHMvaGVhZCdcbmltcG9ydCBzdHlsZWQgLCB7IGluamVjdEdsb2JhbCB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBTd2FsIGZyb20gJ3N3ZWV0YWxlcnQyJ1xuXG5pbmplY3RHbG9iYWxgXG4gIC5ib3h7XG4gICAgbWluLWhlaWdodDoxMDB2aDtcbiAgICBvdmVyZmxvdzpoaWRkZW47XG4gICAgYmFja2dyb3VuZC1jb2xvcjojMWUyNjJmO1xuICB9XG4gIC5oZWFkaW5nLXRleHR7XG4gICAgdGV4dC1zaGFkb3c6IDFweCAycHggNnB4IHJnYmEoNTEsMjA0LDIzNCwwLjkxKTtcbiAgICBjb2xvcjp3aGl0ZTtcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgfVxuICAubXlidG57XG4gICAgcGFkZGluZyA6IDAuNWVtIDRlbSAwLjVlbSA0ZW07XG4gICAgYmFja2dyb3VuZDp0cmFuc3BhcmVudDtcbiAgICBjb2xvcjp3aGl0ZTtcbiAgICBib3JkZXI6MXB4IHNvbGlkICM0Y2NkZWE7XG4gIH1cbiAgLm15YnRuOmhvdmVye1xuICAgIGJhY2tncm91bmQ6IzRjY2RlYTtcbiAgICBjb2xvcjp3aGl0ZTtcbiAgICB0cmFuc2l0aW9uOjAuN3M7XG4gIH1cbiAgLmxvZ297XG4gICAgcGFkZGluZy10b3A6MjAlO1xuICAgIG1heC13aWR0aDoyNTBweDtcbiAgfVxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gICAgLm15YnRue1xuICAgICAgcGFkZGluZyA6IDAuNWVtIDJlbSAwLjVlbSAyZW07XG4gICAgfVxuICB9XG5gXG5cbmNsYXNzIE1haW4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gIFxuICBmdXR1cmUgPSAoKSA9PntcbiAgICBjb25zb2xlLmxvZygndHR0dHQnKVxuICAgIFN3YWwoe1xuICAgICAgdGl0bGU6ICcoIM2hwrAgzZzKliDNocKwKScsXG4gICAgICB0ZXh0OiAnRnV0dXJlIEZlYXR1cmUnLFxuICAgICAgdGltZXI6IDMwMDBcbiAgICB9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPExheW91dD5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL2ltZy9sb2dvLnBuZ1wiIGNsYXNzTmFtZT1cImxvZ29cIiAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImhlYWRpbmctdGV4dFwiPuC4reC4ouC4suC4geC4n+C4seC4h+C4nOC4peC5geC4muC4muC5hOC4q+C4meC4q+C4peC5iOC4sDwvaDE+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbS1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJcIiBzdHlsZT17e2Rpc3BsYXk6J2ZsZXgnLGp1c3RpZnlDb250ZW50OidjZW50ZXInfX0+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJteWJ0biBteC0zIG15LTNcIiBvbkNsaWNrPXt0aGlzLmZ1dHVyZX0+4LiV4Li34LmI4LiZ4LmA4LiV4LmJ4LiZPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9nZW5lcmFsYW5ub3VuY2VcIj48c3BhbiBjbGFzc05hbWU9XCJteWJ0biBteC0zIG15LTNcIj7guIrguLTguKXguYY8L3NwYW4+PC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0xheW91dD5cbiAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1haW5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcz9lbnRyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7O0FBTkE7QUFDQTtBQUNBO0FBS0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FBa0NBO0FBQ0E7O0FBR0E7QUFDQTtBQUVBO0FBSkE7Ozs7OztBQU9BO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBRUE7QUFGQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1BOzs7OztBQTNCQTtBQUNBO0FBNkJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=