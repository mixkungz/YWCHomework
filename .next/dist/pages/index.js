'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _head = require('../components/head');

var _head2 = _interopRequireDefault(_head);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _layout = require('../components/layout');

var _layout2 = _interopRequireDefault(_layout);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _sweetalert = require('sweetalert2');

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