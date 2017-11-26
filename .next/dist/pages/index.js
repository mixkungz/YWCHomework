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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _head = require('../components/head');

var _head2 = _interopRequireDefault(_head);

var _reactTable = require('react-table');

var _reactTable2 = _interopRequireDefault(_reactTable);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/phachara/Desktop/Project/2017/Homework/ywc/pages/index.js?entry';
// import ReactTable from 'react-table'


var contacts = [{
  name: 'mx',
  phone: '0022'
}, {
  name: 'ds',
  phone: '021'
}];

var Main = function (_React$Component) {
  (0, _inherits3.default)(Main, _React$Component);

  function Main() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Main);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Main.__proto__ || (0, _getPrototypeOf2.default)(Main)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
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
      search: []

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
      } else if (input == 'ds') {
        _this.setState({ select: _this.state.allDesign });
      } else if (input == 'mk') {
        _this.setState({ select: _this.state.allMarketing });
      } else if (input == 'ct') {
        _this.setState({ select: _this.state.allContent });
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Main, [{
    key: 'render',
    value: function render() {
      var _this3 = this;

      var data = [{
        name: 'Tanner Linsley',
        age: 26
      }, {
        name: 'Tanner Linsley',
        age: 16
      }, {
        name: 'Tanner Linsley',
        age: 13
      }];
      var columns = [{
        Header: 'Name',
        accessor: 'name'
      }, {
        Header: 'Age',
        accessor: 'age',
        Cell: function Cell(props) {
          return _react2.default.createElement('span', { className: 'number', __source: {
              fileName: _jsxFileName,
              lineNumber: 233
            }
          }, props.value);
        } // Custom cell components!
      }];
      var filteredContacts = this.props.contacts;
      // console.log(this.state.select)
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 238
        }
      }, _react2.default.createElement(_head2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 239
        }
      }), _react2.default.createElement('div', { className: 'container', __source: {
          fileName: _jsxFileName,
          lineNumber: 240
        }
      }, _react2.default.createElement('div', { className: 'row', __source: {
          fileName: _jsxFileName,
          lineNumber: 241
        }
      }, _react2.default.createElement('div', { className: 'col-6 mx-auto', __source: {
          fileName: _jsxFileName,
          lineNumber: 242
        }
      }, _react2.default.createElement('button', { className: 'btn btn-success btn-block', onClick: function onClick() {
          return _this3.change('pg');
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 244
        }
      }, 'Programming'), _react2.default.createElement('button', { className: 'btn btn-success btn-block', onClick: function onClick() {
          return _this3.change('ds');
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 245
        }
      }, 'Design'), _react2.default.createElement('button', { className: 'btn btn-success btn-block', onClick: function onClick() {
          return _this3.change('mk');
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 246
        }
      }, 'Marketing'), _react2.default.createElement('button', { className: 'btn btn-success btn-block', onClick: function onClick() {
          return _this3.change('ct');
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 247
        }
      }, 'Content'), _react2.default.createElement('input', { type: 'text', onChange: this.searchChange, __source: {
          fileName: _jsxFileName,
          lineNumber: 249
        }
      }), _react2.default.createElement('table', { 'class': 'table', __source: {
          fileName: _jsxFileName,
          lineNumber: 250
        }
      }, _react2.default.createElement('thead', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 251
        }
      }, _react2.default.createElement('tr', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 252
        }
      }, _react2.default.createElement('th', { scope: 'col', __source: {
          fileName: _jsxFileName,
          lineNumber: 253
        }
      }, '#'), _react2.default.createElement('th', { scope: 'col', __source: {
          fileName: _jsxFileName,
          lineNumber: 254
        }
      }, 'Real Name'))), _react2.default.createElement('tbody', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 257
        }
      }, this.state.select.map(function (data) {
        return _react2.default.createElement('tr', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 260
          }
        }, _react2.default.createElement('th', { scope: 'row', __source: {
            fileName: _jsxFileName,
            lineNumber: 261
          }
        }, data.interviewRef), _react2.default.createElement('td', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 262
          }
        }, data.firstName, ' ', data.lastName));
      })))))));
    }
  }]);

  return Main;
}(_react2.default.Component);

exports.default = Main;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkhlYWQiLCJSZWFjdFRhYmxlIiwiQXhpb3MiLCJzdHlsZWQiLCJpbmplY3RHbG9iYWwiLCJjb250YWN0cyIsIm5hbWUiLCJwaG9uZSIsIk1haW4iLCJzdGF0ZSIsImFsbCIsImFsbE1vcm5pbmciLCJhbGxNb3JuaW5nUHJvZ3JhbW1pbmciLCJhbGxNb3JuaW5nRGVzaWduIiwiYWxsTW9ybmluZ01hcmtldGluZyIsImFsbE1vcm5pbmdDb250ZW50IiwiYWxsQWZ0ZXJub29uIiwiYWxsQWZ0ZXJub29uUHJvZ3JhbW1pbmciLCJhbGxBZnRlcm5vb25EZXNpZ24iLCJhbGxBZnRlcm5vb25NYXJrZXRpbmciLCJhbGxBZnRlcm5vb25Db250ZW50IiwiYWxsUHJvZ3JhbW1pbmciLCJhbGxEZXNpZ24iLCJhbGxNYXJrZXRpbmciLCJhbGxDb250ZW50IiwicnREYXRhIiwicnRDb2wiLCJIZWFkZXIiLCJhY2Nlc3NvciIsInNlbGVjdCIsInNlYXJjaCIsImNvbXBvbmVudFdpbGxNb3VudCIsIm1ldGhvZCIsInVybCIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJzZXRTdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJzZWFyY2hDaGFuZ2UiLCJlIiwiaW5wdXQiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm1zZyIsInRvVXBwZXJDYXNlIiwibGVuZ3RoIiwicmVzIiwiZmlsdGVyIiwiZmlyc3ROYW1lIiwiaW5kZXhPZiIsImxhc3ROYW1lIiwiaW50ZXJ2aWV3UmVmIiwiY2hhbmdlIiwiYWdlIiwiY29sdW1ucyIsIkNlbGwiLCJwcm9wcyIsImZpbHRlcmVkQ29udGFjdHMiLCJtYXAiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPLEFBQVc7Ozs7Ozs7QUFKbEI7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c0JBQUEsQUFFRTtBQUZGO3lCQUVFLGNBQUEsWUFBUSxXQUFSLEFBQWtCLDZCQUE0QixTQUFTLG1CQUFBO2lCQUFJLE9BQUEsQUFBSyxPQUFULEFBQUksQUFBWTtBQUF2RTtvQkFBQTtzQkFBQTtBQUFBO1NBRkYsQUFFRSxBQUNBLGdDQUFBLGNBQUEsWUFBUSxXQUFSLEFBQWtCLDZCQUE0QixTQUFTLG1CQUFBO2lCQUFJLE9BQUEsQUFBSyxPQUFULEFBQUksQUFBWTtBQUF2RTtvQkFBQTtzQkFBQTtBQUFBO1NBSEYsQUFHRSxBQUNBLDJCQUFBLGNBQUEsWUFBUSxXQUFSLEFBQWtCLDZCQUE0QixTQUFTLG1CQUFBO2lCQUFJLE9BQUEsQUFBSyxPQUFULEFBQUksQUFBWTtBQUF2RTtvQkFBQTtzQkFBQTtBQUFBO1NBSkYsQUFJRSxBQUNBLDhCQUFBLGNBQUEsWUFBUSxXQUFSLEFBQWtCLDZCQUE0QixTQUFTLG1CQUFBO2lCQUFJLE9BQUEsQUFBSyxPQUFULEFBQUksQUFBWTtBQUF2RTtvQkFBQTtzQkFBQTtBQUFBO1NBTEYsQUFLRSxBQUVBLHFEQUFPLE1BQVAsQUFBWSxRQUFPLFVBQVUsS0FBN0IsQUFBa0M7b0JBQWxDO3NCQVBGLEFBT0UsQUFDQTtBQURBOzBCQUNBLGNBQUEsV0FBTyxTQUFQLEFBQWE7b0JBQWI7c0JBQUEsQUFDSTtBQURKO3lCQUNJLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0k7QUFESjtBQUFBLHlCQUNJLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUEsUUFBSSxPQUFKLEFBQVU7b0JBQVY7c0JBQUE7QUFBQTtTQURGLEFBQ0UsQUFDQSxzQkFBQSxjQUFBLFFBQUksT0FBSixBQUFVO29CQUFWO3NCQUFBO0FBQUE7U0FKVixBQUNJLEFBQ0ksQUFFRSxBQUdOLGdDQUFBLGNBQUE7O29CQUFBO3NCQUFBLEFBRU07QUFGTjtBQUFBLGNBRU0sQUFBSyxNQUFMLEFBQVcsT0FBWCxBQUFrQixJQUFJLFVBQUEsQUFBQyxNQUFEOytCQUNwQixjQUFBOztzQkFBQTt3QkFBQSxBQUNFO0FBREY7QUFBQSxTQUFBLGtCQUNFLGNBQUEsUUFBSSxPQUFKLEFBQVU7c0JBQVY7d0JBQUEsQUFBaUI7QUFBakI7Z0JBREYsQUFDRSxBQUFzQixBQUN0QiwrQkFBQSxjQUFBOztzQkFBQTt3QkFBQSxBQUFLO0FBQUw7QUFBQSxnQkFBQSxBQUFVLFdBQVksVUFISixBQUNwQixBQUVFLEFBQTJCO0FBekJ2RCxBQUNJLEFBRUksQUFDRSxBQUNFLEFBUUUsQUFPSSxBQUVNLEFBZXpCOzs7OztFQXBRYyxnQkFBTSxBLEFBdVF6Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvcGhhY2hhcmEvRGVza3RvcC9Qcm9qZWN0LzIwMTcvSG9tZXdvcmsveXdjIn0=