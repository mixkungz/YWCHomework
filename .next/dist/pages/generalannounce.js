'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _layout = require('../components/layout');

var _layout2 = _interopRequireDefault(_layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/phachara/Desktop/Project/2017/Homework/ywc/pages/generalannounce.js?entry';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n.box{\n    min-height:100vh;\n    overflow:hidden;\n    background-color:#1e262f;\n}\n.logo{\n    max-width:250px;\n}\nth,tr,td{\n    background:white;\n}\n.btn-edit{\n    background:#4ccdea;\n    color:white\n}\n'], ['\n.box{\n    min-height:100vh;\n    overflow:hidden;\n    background-color:#1e262f;\n}\n.logo{\n    max-width:250px;\n}\nth,tr,td{\n    background:white;\n}\n.btn-edit{\n    background:#4ccdea;\n    color:white\n}\n']);

(0, _styledComponents.injectGlobal)(_templateObject);

var Announce = function (_React$Component) {
  (0, _inherits3.default)(Announce, _React$Component);

  function Announce() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Announce);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Announce.__proto__ || (0, _getPrototypeOf2.default)(Announce)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      all: [],
      allMorning: [],
      allMorningProgramming: [],
      allMorningDesign: [],
      allMorningMarketing: [],
      allMorningContent: [],
      allAfternoon: [],
      allAfternoonProgramming: [],
      allAfternoonDesign: [],
      allAfternoonMarketing: [],
      allAfternoonContent: [],
      allProgramming: [],
      allDesign: [],
      allMarketing: [],
      allContent: [],
      rtData: [],
      rtCol: [{
        Header: 'Code',
        accessor: 'code'
      }, {
        Header: 'RealName',
        accessor: 'realname'
      }],
      select: [],
      search: [],
      branchNow: ''

    }, _this.componentWillMount = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      var data;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return (0, _axios2.default)({
                method: 'get',
                url: 'https://ywc15.ywc.in.th/api/interview'
              }).then(function (response) {
                return response;
              });

            case 2:
              data = _context.sent;

              _this.setState({ all: data.data });
              _this.setState({ select: data.data });

              // allmorning 
              _context.next = 7;
              return (0, _axios2.default)({
                method: 'get',
                url: 'http://localhost:3001/namelist/morning'
              }).then(function (response) {
                return response;
              });

            case 7:
              data = _context.sent;

              _this.setState({ allMorning: data.data });

              // allmorningpg
              _context.next = 11;
              return (0, _axios2.default)({
                method: 'get',
                url: 'http://localhost:3001/namelist/morning/pg'
              }).then(function (response) {
                return response;
              });

            case 11:
              data = _context.sent;

              _this.setState({ allMorningProgramming: data.data });

              // allmorningds
              _context.next = 15;
              return (0, _axios2.default)({
                method: 'get',
                url: 'http://localhost:3001/namelist/morning/ds'
              }).then(function (response) {
                return response;
              });

            case 15:
              data = _context.sent;

              _this.setState({ allMorningDesign: data.data });

              // allmorningct
              _context.next = 19;
              return (0, _axios2.default)({
                method: 'get',
                url: 'http://localhost:3001/namelist/morning/ct'
              }).then(function (response) {
                return response;
              });

            case 19:
              data = _context.sent;

              _this.setState({ allMorningContent: data.data });

              // allmorningmk
              _context.next = 23;
              return (0, _axios2.default)({
                method: 'get',
                url: 'http://localhost:3001/namelist/morning/mk'
              }).then(function (response) {
                return response;
              });

            case 23:
              data = _context.sent;

              _this.setState({ allMorningMarketing: data.data });

              // allafternoon
              _context.next = 27;
              return (0, _axios2.default)({
                method: 'get',
                url: 'http://localhost:3001/namelist/afternoon'
              }).then(function (response) {
                return response;
              });

            case 27:
              data = _context.sent;

              _this.setState({ allAfternoon: data.data });

              // allafternoonpg
              _context.next = 31;
              return (0, _axios2.default)({
                method: 'get',
                url: 'http://localhost:3001/namelist/afternoon/pg'
              }).then(function (response) {
                return response;
              });

            case 31:
              data = _context.sent;

              _this.setState({ allAfternoonProgramming: data.data });

              // allafternoonmk
              _context.next = 35;
              return (0, _axios2.default)({
                method: 'get',
                url: 'http://localhost:3001/namelist/afternoon/mk'
              }).then(function (response) {
                return response;
              });

            case 35:
              data = _context.sent;

              _this.setState({ allAfternoonMarketing: data.data });

              // allafternoonct
              _context.next = 39;
              return (0, _axios2.default)({
                method: 'get',
                url: 'http://localhost:3001/namelist/afternoon/ct'
              }).then(function (response) {
                return response;
              });

            case 39:
              data = _context.sent;

              _this.setState({ allAfternoonContent: data.data });

              // allafternoonds
              _context.next = 43;
              return (0, _axios2.default)({
                method: 'get',
                url: 'http://localhost:3001/namelist/afternoon/ds'
              }).then(function (response) {
                return response;
              });

            case 43:
              data = _context.sent;

              _this.setState({ allAfternoonDesign: data.data });

              // allpg
              _context.next = 47;
              return (0, _axios2.default)({
                method: 'get',
                url: 'http://localhost:3001/namelist/programming'
              }).then(function (response) {
                return response;
              });

            case 47:
              data = _context.sent;

              _this.setState({ allProgramming: data.data });

              // allmk
              _context.next = 51;
              return (0, _axios2.default)({
                method: 'get',
                url: 'http://localhost:3001/namelist/marketing'
              }).then(function (response) {
                return response;
              });

            case 51:
              data = _context.sent;

              _this.setState({ allMarketing: data.data });

              // allct
              _context.next = 55;
              return (0, _axios2.default)({
                method: 'get',
                url: 'http://localhost:3001/namelist/content'
              }).then(function (response) {
                return response;
              });

            case 55:
              data = _context.sent;

              _this.setState({ allContent: data.data });

              // allds
              _context.next = 59;
              return (0, _axios2.default)({
                method: 'get',
                url: 'http://localhost:3001/namelist/design'
              }).then(function (response) {
                return response;
              });

            case 59:
              data = _context.sent;

              _this.setState({ allDesign: data.data });

              console.log(_this.state);
            // END ComponentWillMount

            case 62:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this2);
    })), _this.searchChange = function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(e) {
        var input, msg, res;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                input = e.target.value;
                msg = input.toUpperCase();

                if (msg.length == 0) {
                  _this.setState({ select: _this.state.all });
                } else {
                  res = _this.state.all.filter(function (input) {
                    return input.firstName.indexOf(msg) > -1 || input.lastName.indexOf(msg) > -1 || input.interviewRef.indexOf(msg) > -1;
                  });

                  console.log(res);
                  _this.setState({ select: res });
                  console.log(_this.state.search);
                }

              case 3:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }));

      return function (_x) {
        return _ref3.apply(this, arguments);
      };
    }(), _this.change = function (input) {

      if (input == 'pg') {
        _this.setState({ select: _this.state.allProgramming });
        _this.setState({ branchNow: 'pg' });
      } else if (input == 'ds') {
        _this.setState({ select: _this.state.allDesign });
        _this.setState({ branchNow: 'ds' });
      } else if (input == 'mk') {
        _this.setState({ select: _this.state.allMarketing });
        _this.setState({ branchNow: 'mk' });
      } else if (input == 'ct') {
        _this.setState({ select: _this.state.allContent });
        _this.setState({ branchNow: 'ct' });
      }
    }, _this.timeChange = function (e) {
      if (e.target.value == 'all') {
        _this.setState({ select: _this.state.all });
      } else if (e.target.value == 'morning') {
        if (_this.state.branchNow == 'pg') {
          _this.setState({ select: _this.state.allMorningProgramming });
        } else if (_this.state.branchNow == 'ds') {
          _this.setState({ select: _this.state.allMorningDesign });
        } else if (_this.state.branchNow == 'mk') {
          _this.setState({ select: _this.state.allMorningMarketing });
        } else if (_this.state.branchNow == 'ct') {
          _this.setState({ select: _this.state.allMorningContent });
        }
      } else if (e.target.value == 'afternoon') {
        if (_this.state.branchNow == 'pg') {
          _this.setState({ select: _this.state.allAfternoonProgramming });
        } else if (_this.state.branchNow == 'ds') {
          _this.setState({ select: _this.state.allAfternoonDesign });
        } else if (_this.state.branchNow == 'mk') {
          _this.setState({ select: _this.state.allAfternoonMarketing });
        } else if (_this.state.branchNow == 'ct') {
          _this.setState({ select: _this.state.allAfternoonContent });
        }
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Announce, [{
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(_layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 261
        }
      }, _react2.default.createElement('div', { className: 'container', __source: {
          fileName: _jsxFileName,
          lineNumber: 262
        }
      }, _react2.default.createElement('div', { className: 'row', __source: {
          fileName: _jsxFileName,
          lineNumber: 263
        }
      }, _react2.default.createElement('div', { className: 'col', __source: {
          fileName: _jsxFileName,
          lineNumber: 264
        }
      }, _react2.default.createElement('div', { className: 'text-center mt-4', __source: {
          fileName: _jsxFileName,
          lineNumber: 265
        }
      }, _react2.default.createElement('img', { src: '/static/img/logo.png', className: 'logo', __source: {
          fileName: _jsxFileName,
          lineNumber: 266
        }
      })))), _react2.default.createElement('div', { className: 'row my-2', __source: {
          fileName: _jsxFileName,
          lineNumber: 270
        }
      }, _react2.default.createElement('div', { className: 'col', __source: {
          fileName: _jsxFileName,
          lineNumber: 271
        }
      }, _react2.default.createElement('input', { type: 'text', className: 'form-control', onChange: this.searchChange, __source: {
          fileName: _jsxFileName,
          lineNumber: 272
        }
      }))), _react2.default.createElement('div', { className: 'row', __source: {
          fileName: _jsxFileName,
          lineNumber: 275
        }
      }, _react2.default.createElement('div', { className: 'col-5 mx-auto mt-4', __source: {
          fileName: _jsxFileName,
          lineNumber: 276
        }
      }, _react2.default.createElement('select', { className: 'form-control', id: 'exampleFormControlSelect1', onChange: this.timeChange, __source: {
          fileName: _jsxFileName,
          lineNumber: 277
        }
      }, _react2.default.createElement('option', { value: 'all', __source: {
          fileName: _jsxFileName,
          lineNumber: 278
        }
      }, 'All'), _react2.default.createElement('option', { value: 'morning', __source: {
          fileName: _jsxFileName,
          lineNumber: 279
        }
      }, 'Morning'), _react2.default.createElement('option', { value: 'afternoon', __source: {
          fileName: _jsxFileName,
          lineNumber: 280
        }
      }, 'Afternoon')))), _react2.default.createElement('div', { className: 'row my-4', __source: {
          fileName: _jsxFileName,
          lineNumber: 284
        }
      }, _react2.default.createElement('div', { className: 'col', __source: {
          fileName: _jsxFileName,
          lineNumber: 286
        }
      }, _react2.default.createElement('button', { className: 'btn btn-edit btn-block', onClick: function onClick() {
          return _this3.change('pg');
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 287
        }
      }, 'Programming')), _react2.default.createElement('div', { className: 'col', __source: {
          fileName: _jsxFileName,
          lineNumber: 289
        }
      }, _react2.default.createElement('button', { className: 'btn btn-edit btn-block', onClick: function onClick() {
          return _this3.change('ds');
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 290
        }
      }, 'Design')), _react2.default.createElement('div', { className: 'col', __source: {
          fileName: _jsxFileName,
          lineNumber: 292
        }
      }, _react2.default.createElement('button', { className: 'btn btn-edit btn-block', onClick: function onClick() {
          return _this3.change('mk');
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 293
        }
      }, 'Marketing')), _react2.default.createElement('div', { className: 'col', __source: {
          fileName: _jsxFileName,
          lineNumber: 295
        }
      }, _react2.default.createElement('button', { className: 'btn btn-edit btn-block', onClick: function onClick() {
          return _this3.change('ct');
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 296
        }
      }, 'Content'))), _react2.default.createElement('div', { className: 'mx-auto', __source: {
          fileName: _jsxFileName,
          lineNumber: 300
        }
      }, _react2.default.createElement('table', { className: 'table w-100', __source: {
          fileName: _jsxFileName,
          lineNumber: 301
        }
      }, _react2.default.createElement('thead', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 302
        }
      }, _react2.default.createElement('tr', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 303
        }
      }, _react2.default.createElement('th', { scope: 'col', __source: {
          fileName: _jsxFileName,
          lineNumber: 304
        }
      }, '#'), _react2.default.createElement('th', { scope: 'col', __source: {
          fileName: _jsxFileName,
          lineNumber: 305
        }
      }, 'Real Name'))), _react2.default.createElement('tbody', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 308
        }
      }, this.state.select.map(function (data, index) {
        return _react2.default.createElement('tr', { key: index, __source: {
            fileName: _jsxFileName,
            lineNumber: 311
          }
        }, _react2.default.createElement('th', { scope: 'row', __source: {
            fileName: _jsxFileName,
            lineNumber: 312
          }
        }, data.interviewRef), _react2.default.createElement('td', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 313
          }
        }, data.firstName, ' ', data.lastName));
      }))))));
    }
  }]);

  return Announce;
}(_react2.default.Component);

exports.default = Announce;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2dlbmVyYWxhbm5vdW5jZS5qcyJdLCJuYW1lcyI6WyJIZWFkIiwiQXhpb3MiLCJzdHlsZWQiLCJpbmplY3RHbG9iYWwiLCJMYXlvdXQiLCJBbm5vdW5jZSIsInN0YXRlIiwiYWxsIiwiYWxsTW9ybmluZyIsImFsbE1vcm5pbmdQcm9ncmFtbWluZyIsImFsbE1vcm5pbmdEZXNpZ24iLCJhbGxNb3JuaW5nTWFya2V0aW5nIiwiYWxsTW9ybmluZ0NvbnRlbnQiLCJhbGxBZnRlcm5vb24iLCJhbGxBZnRlcm5vb25Qcm9ncmFtbWluZyIsImFsbEFmdGVybm9vbkRlc2lnbiIsImFsbEFmdGVybm9vbk1hcmtldGluZyIsImFsbEFmdGVybm9vbkNvbnRlbnQiLCJhbGxQcm9ncmFtbWluZyIsImFsbERlc2lnbiIsImFsbE1hcmtldGluZyIsImFsbENvbnRlbnQiLCJydERhdGEiLCJydENvbCIsIkhlYWRlciIsImFjY2Vzc29yIiwic2VsZWN0Iiwic2VhcmNoIiwiYnJhbmNoTm93IiwiY29tcG9uZW50V2lsbE1vdW50IiwibWV0aG9kIiwidXJsIiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsInNldFN0YXRlIiwiY29uc29sZSIsImxvZyIsInNlYXJjaENoYW5nZSIsImUiLCJpbnB1dCIsInRhcmdldCIsInZhbHVlIiwibXNnIiwidG9VcHBlckNhc2UiLCJsZW5ndGgiLCJyZXMiLCJmaWx0ZXIiLCJmaXJzdE5hbWUiLCJpbmRleE9mIiwibGFzdE5hbWUiLCJpbnRlcnZpZXdSZWYiLCJjaGFuZ2UiLCJ0aW1lQ2hhbmdlIiwibWFwIiwiaW5kZXgiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU87Ozs7QUFDUCxBQUFPLEFBQVc7Ozs7QUFDbEIsQUFBTyxBQUFZOzs7Ozs7Ozs7O0FBRW5COztJQWtCTSxBOzs7Ozs7Ozs7Ozs7Ozs7Z04sQUFDRjtXQUFNLEFBQ0UsQUFDSjtrQkFGRSxBQUVTLEFBQ1g7NkJBSEUsQUFHb0IsQUFDdEI7d0JBSkUsQUFJZSxBQUNqQjsyQkFMRSxBQUtrQixBQUNwQjt5QkFORSxBQU1nQixBQUNsQjtvQkFQRSxBQU9XLEFBQ2I7K0JBUkUsQUFRc0IsQUFDeEI7MEJBVEUsQUFTaUIsQUFDbkI7NkJBVkUsQUFVb0IsQUFDdEI7MkJBWEUsQUFXa0IsQUFDcEI7c0JBWkUsQUFZYSxBQUNmO2lCQWJFLEFBYVEsQUFDVjtvQkFkRSxBQWNXLEFBQ2I7a0JBZkUsQUFlUyxBQUNYO2NBaEJFLEFBZ0JLLEFBQ1A7O2dCQUFPLEFBQ0csQUFDUjtrQkFGSSxBQUFDLEFBRUs7QUFGTCxBQUNMLE9BREk7Z0JBR0gsQUFDTyxBQUNSO2tCQXRCQSxBQWlCSSxBQUdILEFBRVMsQUFFWjtBQUpHLEFBQ0Q7Y0FyQkEsQUF3QkssQUFDUDtjQXpCRSxBQXlCSyxBQUNQO2lCQTFCRSxBQTBCUSxBOztBQTFCUixBQUNGLGEsQUE0QkYsOEZBQXFCLG1CQUFBO1VBQUE7b0VBQUE7a0JBQUE7MkNBQUE7aUJBQUE7OEJBQUE7O3dCQUVJLEFBQ2IsQUFDUjtxQkFGZSxBQUFNLEFBRWhCO0FBRmdCLEFBQ3JCLGVBRGUsRUFBQSxBQUdkLEtBQUssVUFBQSxBQUFTLFVBQVUsQUFDekI7dUJBQUEsQUFBTyxBQUNSO0FBUGtCLEFBRUY7O2lCQUFiO0FBRmUsOEJBUW5COztvQkFBQSxBQUFLLFNBQVMsRUFBQyxLQUFJLEtBQW5CLEFBQWMsQUFBVSxBQUN4QjtvQkFBQSxBQUFLLFNBQVMsRUFBQyxRQUFPLEtBQXRCLEFBQWMsQUFBYSxBQUUzQjs7QUFYbUI7OEJBQUE7O3dCQVlBLEFBQ1QsQUFDUjtxQkFGVyxBQUFNLEFBRVo7QUFGWSxBQUNqQixlQURXLEVBQUEsQUFHVixLQUFLLFVBQUEsQUFBUyxVQUFVLEFBQ3pCO3VCQUFBLEFBQU8sQUFDUjtBQWpCa0IsQUFZTjs7aUJBQWI7QUFabUIsOEJBa0JuQjs7b0JBQUEsQUFBSyxTQUFTLEVBQUMsWUFBVyxLQUExQixBQUFjLEFBQWlCLEFBRS9COztBQXBCbUI7OEJBQUE7O3dCQXFCQSxBQUNULEFBQ1I7cUJBRlcsQUFBTSxBQUVaO0FBRlksQUFDakIsZUFEVyxFQUFBLEFBR1YsS0FBSyxVQUFBLEFBQVMsVUFBVSxBQUN6Qjt1QkFBQSxBQUFPLEFBQ1I7QUExQmtCLEFBcUJOOztpQkFBYjtBQXJCbUIsOEJBMkJuQjs7b0JBQUEsQUFBSyxTQUFTLEVBQUMsdUJBQXNCLEtBQXJDLEFBQWMsQUFBNEIsQUFFMUM7O0FBN0JtQjs4QkFBQTs7d0JBOEJBLEFBQ1QsQUFDUjtxQkFGVyxBQUFNLEFBRVo7QUFGWSxBQUNqQixlQURXLEVBQUEsQUFHVixLQUFLLFVBQUEsQUFBUyxVQUFVLEFBQ3pCO3VCQUFBLEFBQU8sQUFDUjtBQW5Da0IsQUE4Qk47O2lCQUFiO0FBOUJtQiw4QkFvQ25COztvQkFBQSxBQUFLLFNBQVMsRUFBQyxrQkFBaUIsS0FBaEMsQUFBYyxBQUF1QixBQUVyQzs7QUF0Q21COzhCQUFBOzt3QkF1Q0EsQUFDVCxBQUNSO3FCQUZXLEFBQU0sQUFFWjtBQUZZLEFBQ2pCLGVBRFcsRUFBQSxBQUdWLEtBQUssVUFBQSxBQUFTLFVBQVUsQUFDekI7dUJBQUEsQUFBTyxBQUNSO0FBNUNrQixBQXVDTjs7aUJBQWI7QUF2Q21CLDhCQTZDbkI7O29CQUFBLEFBQUssU0FBUyxFQUFDLG1CQUFrQixLQUFqQyxBQUFjLEFBQXdCLEFBRXRDOztBQS9DbUI7OEJBQUE7O3dCQWdEQSxBQUNULEFBQ1I7cUJBRlcsQUFBTSxBQUVaO0FBRlksQUFDakIsZUFEVyxFQUFBLEFBR1YsS0FBSyxVQUFBLEFBQVMsVUFBVSxBQUN6Qjt1QkFBQSxBQUFPLEFBQ1I7QUFyRGtCLEFBZ0ROOztpQkFBYjtBQWhEbUIsOEJBc0RuQjs7b0JBQUEsQUFBSyxTQUFTLEVBQUMscUJBQW9CLEtBQW5DLEFBQWMsQUFBMEIsQUFFeEM7O0FBeERtQjs4QkFBQTs7d0JBeURBLEFBQ1QsQUFDUjtxQkFGVyxBQUFNLEFBRVo7QUFGWSxBQUNqQixlQURXLEVBQUEsQUFHVixLQUFLLFVBQUEsQUFBUyxVQUFVLEFBQ3pCO3VCQUFBLEFBQU8sQUFDUjtBQTlEa0IsQUF5RE47O2lCQUFiO0FBekRtQiw4QkErRG5COztvQkFBQSxBQUFLLFNBQVMsRUFBQyxjQUFhLEtBQTVCLEFBQWMsQUFBbUIsQUFFakM7O0FBakVtQjs4QkFBQTs7d0JBa0VBLEFBQ1QsQUFDUjtxQkFGVyxBQUFNLEFBRVo7QUFGWSxBQUNqQixlQURXLEVBQUEsQUFHVixLQUFLLFVBQUEsQUFBUyxVQUFVLEFBQ3pCO3VCQUFBLEFBQU8sQUFDUjtBQXZFa0IsQUFrRU47O2lCQUFiO0FBbEVtQiw4QkF3RW5COztvQkFBQSxBQUFLLFNBQVMsRUFBQyx5QkFBd0IsS0FBdkMsQUFBYyxBQUE4QixBQUU1Qzs7QUExRW1COzhCQUFBOzt3QkEyRUEsQUFDVCxBQUNSO3FCQUZXLEFBQU0sQUFFWjtBQUZZLEFBQ2pCLGVBRFcsRUFBQSxBQUdWLEtBQUssVUFBQSxBQUFTLFVBQVUsQUFDekI7dUJBQUEsQUFBTyxBQUNSO0FBaEZrQixBQTJFTjs7aUJBQWI7QUEzRW1CLDhCQWlGbkI7O29CQUFBLEFBQUssU0FBUyxFQUFDLHVCQUFzQixLQUFyQyxBQUFjLEFBQTRCLEFBRTFDOztBQW5GbUI7OEJBQUE7O3dCQW9GQSxBQUNULEFBQ1I7cUJBRlcsQUFBTSxBQUVaO0FBRlksQUFDakIsZUFEVyxFQUFBLEFBR1YsS0FBSyxVQUFBLEFBQVMsVUFBVSxBQUN6Qjt1QkFBQSxBQUFPLEFBQ1I7QUF6RmtCLEFBb0ZOOztpQkFBYjtBQXBGbUIsOEJBMEZuQjs7b0JBQUEsQUFBSyxTQUFTLEVBQUMscUJBQW9CLEtBQW5DLEFBQWMsQUFBMEIsQUFFeEM7O0FBNUZtQjs4QkFBQTs7d0JBNkZBLEFBQ1QsQUFDUjtxQkFGVyxBQUFNLEFBRVo7QUFGWSxBQUNqQixlQURXLEVBQUEsQUFHVixLQUFLLFVBQUEsQUFBUyxVQUFVLEFBQ3pCO3VCQUFBLEFBQU8sQUFDUjtBQWxHa0IsQUE2Rk47O2lCQUFiO0FBN0ZtQiw4QkFtR25COztvQkFBQSxBQUFLLFNBQVMsRUFBQyxvQkFBbUIsS0FBbEMsQUFBYyxBQUF5QixBQUV2Qzs7QUFyR21COzhCQUFBOzt3QkFzR0EsQUFDVCxBQUNSO3FCQUZXLEFBQU0sQUFFWjtBQUZZLEFBQ2pCLGVBRFcsRUFBQSxBQUdWLEtBQUssVUFBQSxBQUFTLFVBQVUsQUFDekI7dUJBQUEsQUFBTyxBQUNSO0FBM0drQixBQXNHTjs7aUJBQWI7QUF0R21CLDhCQTRHbkI7O29CQUFBLEFBQUssU0FBUyxFQUFDLGdCQUFlLEtBQTlCLEFBQWMsQUFBcUIsQUFFbkM7O0FBOUdtQjs4QkFBQTs7d0JBK0dBLEFBQ1QsQUFDUjtxQkFGVyxBQUFNLEFBRVo7QUFGWSxBQUNqQixlQURXLEVBQUEsQUFHVixLQUFLLFVBQUEsQUFBUyxVQUFVLEFBQ3pCO3VCQUFBLEFBQU8sQUFDUjtBQXBIa0IsQUErR047O2lCQUFiO0FBL0dtQiw4QkFxSG5COztvQkFBQSxBQUFLLFNBQVMsRUFBQyxjQUFhLEtBQTVCLEFBQWMsQUFBbUIsQUFFakM7O0FBdkhtQjs4QkFBQTs7d0JBd0hBLEFBQ1QsQUFDUjtxQkFGVyxBQUFNLEFBRVo7QUFGWSxBQUNqQixlQURXLEVBQUEsQUFHVixLQUFLLFVBQUEsQUFBUyxVQUFVLEFBQ3pCO3VCQUFBLEFBQU8sQUFDUjtBQTdIa0IsQUF3SE47O2lCQUFiO0FBeEhtQiw4QkE4SG5COztvQkFBQSxBQUFLLFNBQVMsRUFBQyxZQUFXLEtBQTFCLEFBQWMsQUFBaUIsQUFFL0I7O0FBaEltQjs4QkFBQTs7d0JBaUlBLEFBQ1QsQUFDUjtxQkFGVyxBQUFNLEFBRVo7QUFGWSxBQUNqQixlQURXLEVBQUEsQUFHVixLQUFLLFVBQUEsQUFBUyxVQUFVLEFBQ3pCO3VCQUFBLEFBQU8sQUFDUjtBQXRJa0IsQUFpSU47O2lCQUFiO0FBakltQiw4QkF1SW5COztvQkFBQSxBQUFLLFNBQVMsRUFBQyxXQUFVLEtBQXpCLEFBQWMsQUFBZ0IsQUFFOUI7O3NCQUFBLEFBQVEsSUFBSSxNQUFaLEFBQWlCLEFBQ2pCO0FBMUltQjs7aUJBQUE7aUJBQUE7OEJBQUE7O0FBQUE7a0JBQUE7QSxlQTRJckIsQTsyRkFBZSxrQkFBQSxBQUFPLEdBQVA7d0JBQUE7d0VBQUE7b0JBQUE7K0NBQUE7bUJBQ1Q7QUFEUyx3QkFDRixFQUFBLEFBQUUsT0FEQSxBQUNPLEFBQ2hCO0FBRlMsc0JBRUgsTUFGRyxBQUVILEFBQU0sQUFDaEI7O29CQUFHLElBQUEsQUFBSSxVQUFQLEFBQWUsR0FBRSxBQUNmO3dCQUFBLEFBQUssU0FBUyxFQUFDLFFBQU8sTUFBQSxBQUFLLE1BQTNCLEFBQWMsQUFBbUIsQUFDbEM7QUFGRCx1QkFHSSxBQUNFO0FBREYsOEJBQ1EsQUFBSyxNQUFMLEFBQVcsSUFBWCxBQUFlLE9BQU8saUJBQUE7MkJBQVMsTUFBQSxBQUFNLFVBQU4sQUFBZ0IsUUFBaEIsQUFBd0IsT0FBSyxDQUE3QixBQUE4QixLQUFLLE1BQUEsQUFBTSxTQUFOLEFBQWUsUUFBZixBQUF1QixPQUFLLENBQS9ELEFBQWdFLEtBQUssTUFBQSxBQUFNLGFBQU4sQUFBbUIsUUFBbkIsQUFBMkIsT0FBSyxDQUE5RyxBQUErRztBQUQ3SSxBQUNRLEFBQ1YsbUJBRFU7OzBCQUNWLEFBQVEsSUFBUixBQUFZLEFBQ1o7d0JBQUEsQUFBSyxTQUFTLEVBQUMsUUFBZixBQUFjLEFBQVEsQUFDdEI7MEJBQUEsQUFBUSxJQUFJLE1BQUEsQUFBSyxNQUFqQixBQUF1QixBQUN4QjtBQVhZOzttQkFBQTttQkFBQTtpQ0FBQTs7QUFBQTtxQkFBQTtBOzs7OztlLEFBYWYsU0FBUyxVQUFBLEFBQUMsT0FBUyxBQUVqQjs7VUFBRyxTQUFILEFBQVUsTUFBSyxBQUNiO2NBQUEsQUFBSyxTQUFTLEVBQUMsUUFBTyxNQUFBLEFBQUssTUFBM0IsQUFBYyxBQUFtQixBQUNqQztjQUFBLEFBQUssU0FBUyxFQUFDLFdBQWYsQUFBYyxBQUFXLEFBQzFCO0FBSEQsaUJBSVEsU0FBSCxBQUFVLE1BQUssQUFDbEI7Y0FBQSxBQUFLLFNBQVMsRUFBQyxRQUFPLE1BQUEsQUFBSyxNQUEzQixBQUFjLEFBQW1CLEFBQ2pDO2NBQUEsQUFBSyxTQUFTLEVBQUMsV0FBZixBQUFjLEFBQVcsQUFDMUI7QUFISSxPQUFBLFVBSUcsU0FBSCxBQUFVLE1BQUssQUFDbEI7Y0FBQSxBQUFLLFNBQVMsRUFBQyxRQUFPLE1BQUEsQUFBSyxNQUEzQixBQUFjLEFBQW1CLEFBQ2pDO2NBQUEsQUFBSyxTQUFTLEVBQUMsV0FBZixBQUFjLEFBQVcsQUFDMUI7QUFISSxPQUFBLE1BSUEsSUFBRyxTQUFILEFBQVUsTUFBSyxBQUNsQjtjQUFBLEFBQUssU0FBUyxFQUFDLFFBQU8sTUFBQSxBQUFLLE1BQTNCLEFBQWMsQUFBbUIsQUFDakM7Y0FBQSxBQUFLLFNBQVMsRUFBQyxXQUFmLEFBQWMsQUFBVyxBQUMxQjtBQUNGO0EsYSxBQUNELGFBQWEsVUFBQSxBQUFDLEdBQUssQUFDakI7VUFBRyxFQUFBLEFBQUUsT0FBRixBQUFTLFNBQVosQUFBbUIsT0FBTSxBQUN2QjtjQUFBLEFBQUssU0FBUyxFQUFDLFFBQU8sTUFBQSxBQUFLLE1BQTNCLEFBQWMsQUFBbUIsQUFDbEM7QUFGRCxpQkFHUSxFQUFBLEFBQUUsT0FBRixBQUFTLFNBQVosQUFBbUIsV0FBVSxBQUNoQztZQUFHLE1BQUEsQUFBSyxNQUFMLEFBQVcsYUFBZCxBQUEwQixNQUFLLEFBQzdCO2dCQUFBLEFBQUssU0FBUyxFQUFDLFFBQU8sTUFBQSxBQUFLLE1BQTNCLEFBQWMsQUFBbUIsQUFDbEM7QUFGRCxtQkFHUSxNQUFBLEFBQUssTUFBTCxBQUFXLGFBQWQsQUFBMEIsTUFBSyxBQUNsQztnQkFBQSxBQUFLLFNBQVMsRUFBQyxRQUFPLE1BQUEsQUFBSyxNQUEzQixBQUFjLEFBQW1CLEFBQ2xDO0FBRkksU0FBQSxVQUdHLE1BQUEsQUFBSyxNQUFMLEFBQVcsYUFBZCxBQUEwQixNQUFLLEFBQ2xDO2dCQUFBLEFBQUssU0FBUyxFQUFDLFFBQU8sTUFBQSxBQUFLLE1BQTNCLEFBQWMsQUFBbUIsQUFDbEM7QUFGSSxTQUFBLE1BR0EsSUFBRyxNQUFBLEFBQUssTUFBTCxBQUFXLGFBQWQsQUFBMEIsTUFBSyxBQUNsQztnQkFBQSxBQUFLLFNBQVMsRUFBQyxRQUFPLE1BQUEsQUFBSyxNQUEzQixBQUFjLEFBQW1CLEFBQ2xDO0FBQ0Y7QUFiSSxPQUFBLE1BY0EsSUFBRyxFQUFBLEFBQUUsT0FBRixBQUFTLFNBQVosQUFBbUIsYUFBWSxBQUNsQztZQUFHLE1BQUEsQUFBSyxNQUFMLEFBQVcsYUFBZCxBQUEwQixNQUFLLEFBQzdCO2dCQUFBLEFBQUssU0FBUyxFQUFDLFFBQU8sTUFBQSxBQUFLLE1BQTNCLEFBQWMsQUFBbUIsQUFDbEM7QUFGRCxtQkFHUSxNQUFBLEFBQUssTUFBTCxBQUFXLGFBQWQsQUFBMEIsTUFBSyxBQUNsQztnQkFBQSxBQUFLLFNBQVMsRUFBQyxRQUFPLE1BQUEsQUFBSyxNQUEzQixBQUFjLEFBQW1CLEFBQ2xDO0FBRkksU0FBQSxVQUdHLE1BQUEsQUFBSyxNQUFMLEFBQVcsYUFBZCxBQUEwQixNQUFLLEFBQ2xDO2dCQUFBLEFBQUssU0FBUyxFQUFDLFFBQU8sTUFBQSxBQUFLLE1BQTNCLEFBQWMsQUFBbUIsQUFDbEM7QUFGSSxTQUFBLE1BR0EsSUFBRyxNQUFBLEFBQUssTUFBTCxBQUFXLGFBQWQsQUFBMEIsTUFBSyxBQUNsQztnQkFBQSxBQUFLLFNBQVMsRUFBQyxRQUFPLE1BQUEsQUFBSyxNQUEzQixBQUFjLEFBQW1CLEFBQ2xDO0FBQ0Y7QUFDRjtBOzs7Ozs2QkFDSzttQkFDSjs7NkJBQ0ksQUFBQzs7b0JBQUQ7c0JBQUEsQUFDSTtBQURKO0FBQUEsT0FBQSxrQkFDSSxjQUFBLFNBQUssV0FBTCxBQUFlO29CQUFmO3NCQUFBLEFBQ0k7QUFESjt5QkFDSSxjQUFBLFNBQUssV0FBTCxBQUFlO29CQUFmO3NCQUFBLEFBQ0k7QUFESjt5QkFDSSxjQUFBLFNBQUssV0FBTCxBQUFlO29CQUFmO3NCQUFBLEFBQ0k7QUFESjt5QkFDSSxjQUFBLFNBQUssV0FBTCxBQUFlO29CQUFmO3NCQUFBLEFBQ0k7QUFESjtnREFDUyxLQUFMLEFBQVMsd0JBQXVCLFdBQWhDLEFBQTBDO29CQUExQztzQkFKaEIsQUFDSSxBQUNJLEFBQ0ksQUFDSSxBQUlaO0FBSlk7NkJBSVosY0FBQSxTQUFLLFdBQUwsQUFBZTtvQkFBZjtzQkFBQSxBQUNJO0FBREo7eUJBQ0ksY0FBQSxTQUFLLFdBQUwsQUFBZTtvQkFBZjtzQkFBQSxBQUNJO0FBREo7a0RBQ1csTUFBUCxBQUFZLFFBQU8sV0FBbkIsQUFBNkIsZ0JBQWUsVUFBVSxLQUF0RCxBQUEyRDtvQkFBM0Q7c0JBVlosQUFRSSxBQUNJLEFBQ0ksQUFHUjtBQUhROzRCQUdSLGNBQUEsU0FBSyxXQUFMLEFBQWU7b0JBQWY7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUEsU0FBSyxXQUFMLEFBQWU7b0JBQWY7c0JBQUEsQUFDQTtBQURBO3lCQUNBLGNBQUEsWUFBUSxXQUFSLEFBQWtCLGdCQUFlLElBQWpDLEFBQW9DLDZCQUE0QixVQUFVLEtBQTFFLEFBQStFO29CQUEvRTtzQkFBQSxBQUNNO0FBRE47eUJBQ00sY0FBQSxZQUFRLE9BQVIsQUFBYztvQkFBZDtzQkFBQTtBQUFBO1NBRE4sQUFDTSxBQUNBLHdCQUFBLGNBQUEsWUFBUSxPQUFSLEFBQWM7b0JBQWQ7c0JBQUE7QUFBQTtTQUZOLEFBRU0sQUFDQSw0QkFBQSxjQUFBLFlBQVEsT0FBUixBQUFjO29CQUFkO3NCQUFBO0FBQUE7U0FsQlosQUFhSSxBQUNFLEFBQ0EsQUFHTSxBQUlSLGlDQUFBLGNBQUEsU0FBSyxXQUFMLEFBQWU7b0JBQWY7c0JBQUEsQUFFSTtBQUZKO3lCQUVJLGNBQUEsU0FBSyxXQUFMLEFBQWU7b0JBQWY7c0JBQUEsQUFDSTtBQURKO3lCQUNJLGNBQUEsWUFBUSxXQUFSLEFBQWtCLDBCQUF5QixTQUFTLG1CQUFBO2lCQUFJLE9BQUEsQUFBSyxPQUFULEFBQUksQUFBWTtBQUFwRTtvQkFBQTtzQkFBQTtBQUFBO1NBSFIsQUFFSSxBQUNJLEFBRUosaUNBQUEsY0FBQSxTQUFLLFdBQUwsQUFBZTtvQkFBZjtzQkFBQSxBQUNJO0FBREo7eUJBQ0ksY0FBQSxZQUFRLFdBQVIsQUFBa0IsMEJBQXlCLFNBQVMsbUJBQUE7aUJBQUksT0FBQSxBQUFLLE9BQVQsQUFBSSxBQUFZO0FBQXBFO29CQUFBO3NCQUFBO0FBQUE7U0FOUixBQUtJLEFBQ0ksQUFFSiw0QkFBQSxjQUFBLFNBQUssV0FBTCxBQUFlO29CQUFmO3NCQUFBLEFBQ0k7QUFESjt5QkFDSSxjQUFBLFlBQVEsV0FBUixBQUFrQiwwQkFBeUIsU0FBUyxtQkFBQTtpQkFBSSxPQUFBLEFBQUssT0FBVCxBQUFJLEFBQVk7QUFBcEU7b0JBQUE7c0JBQUE7QUFBQTtTQVRSLEFBUUksQUFDSSxBQUVKLCtCQUFBLGNBQUEsU0FBSyxXQUFMLEFBQWU7b0JBQWY7c0JBQUEsQUFDSTtBQURKO3lCQUNJLGNBQUEsWUFBUSxXQUFSLEFBQWtCLDBCQUF5QixTQUFTLG1CQUFBO2lCQUFJLE9BQUEsQUFBSyxPQUFULEFBQUksQUFBWTtBQUFwRTtvQkFBQTtzQkFBQTtBQUFBO1NBbENaLEFBc0JJLEFBV0ksQUFDSSxBQUlBLDhCQUFBLGNBQUEsU0FBSyxXQUFMLEFBQWU7b0JBQWY7c0JBQUEsQUFDSTtBQURKO3lCQUNJLGNBQUEsV0FBTyxXQUFQLEFBQWlCO29CQUFqQjtzQkFBQSxBQUNJO0FBREo7eUJBQ0ksY0FBQTs7b0JBQUE7c0JBQUEsQUFDSTtBQURKO0FBQUEseUJBQ0ksY0FBQTs7b0JBQUE7c0JBQUEsQUFDSTtBQURKO0FBQUEseUJBQ0ksY0FBQSxRQUFJLE9BQUosQUFBVTtvQkFBVjtzQkFBQTtBQUFBO1NBREosQUFDSSxBQUNBLHNCQUFBLGNBQUEsUUFBSSxPQUFKLEFBQVU7b0JBQVY7c0JBQUE7QUFBQTtTQUpaLEFBQ0ksQUFDSSxBQUVJLEFBR1IsZ0NBQUEsY0FBQTs7b0JBQUE7c0JBQUEsQUFFUTtBQUZSO0FBQUEsY0FFUSxBQUFLLE1BQUwsQUFBVyxPQUFYLEFBQWtCLElBQUksVUFBQSxBQUFDLE1BQUQsQUFBTSxPQUFOOytCQUN0QixjQUFBLFFBQUksS0FBSixBQUFTO3NCQUFUO3dCQUFBLEFBQ0k7QUFESjtTQUFBLGtCQUNJLGNBQUEsUUFBSSxPQUFKLEFBQVU7c0JBQVY7d0JBQUEsQUFBaUI7QUFBakI7Z0JBREosQUFDSSxBQUFzQixBQUN0QiwrQkFBQSxjQUFBOztzQkFBQTt3QkFBQSxBQUFLO0FBQUw7QUFBQSxnQkFBQSxBQUFVLFdBQVksVUFISixBQUN0QixBQUVJLEFBQTJCO0FBckRuRSxBQUNJLEFBQ0ksQUFzQ1ksQUFDSSxBQU9JLEFBRVEsQUE2Q3ZDOzs7OztFQTNVa0IsZ0JBQU0sQSxBQThVN0I7O2tCQUFBLEFBQWUiLCJmaWxlIjoiZ2VuZXJhbGFubm91bmNlLmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9waGFjaGFyYS9EZXNrdG9wL1Byb2plY3QvMjAxNy9Ib21ld29yay95d2MifQ==