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

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Main.__proto__ || (0, _getPrototypeOf2.default)(Main)).call.apply(_ref, [this].concat(args))), _this), _this.componentWillMount = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
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

              console.log(data.data);

            case 4:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this2);
    })), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Main, [{
    key: 'render',
    value: function render() {
      var data = [{
        name: 'Tanner Linsley',
        age: 26,
        friend: {
          name: 'Jason Maurer',
          age: 23
        }
      }, {
        name: 'Tanner Linsley',
        age: 16,
        friend: {
          name: 'Jason Maurer',
          age: 23
        }
      }, {
        name: 'Tanner Linsley',
        age: 13,
        friend: {
          name: 'Jason Maurer',
          age: 23
        }
      }, {
        name: 'Tanner Linsley',
        age: 6,
        friend: {
          name: 'Jason Maurer',
          age: 23
        }
      }, {
        name: 'Tanner Linsley',
        age: 27,
        friend: {
          name: 'Jason Maurer',
          age: 23
        }
      }, {
        name: 'Tanner Linsley',
        age: 226,
        friend: {
          name: 'Jason Maurer',
          age: 23
        }
      }];
      var columns = [{
        Header: 'Name',
        accessor: 'name' // String-based value accessors!
      }, {
        Header: 'Age',
        accessor: 'age',
        Cell: function Cell(props) {
          return _react2.default.createElement('span', { className: 'number', __source: {
              fileName: _jsxFileName,
              lineNumber: 68
            }
          }, props.value);
        } // Custom cell components!
      }, {
        id: 'friendName', // Required because our accessor is not a string
        Header: 'Friend Name',
        accessor: function accessor(d) {
          return d.friend.name;
        } // Custom value accessors!
      }, {
        Header: function Header(props) {
          return _react2.default.createElement('span', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 74
            }
          }, 'Friend Age');
        }, // Custom header components!
        accessor: 'friend.age'
      }];

      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, _react2.default.createElement(_head2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }));
    }
  }]);

  return Main;
}(_react2.default.Component);

exports.default = Main;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkhlYWQiLCJSZWFjdFRhYmxlIiwiQXhpb3MiLCJzdHlsZWQiLCJpbmplY3RHbG9iYWwiLCJNYWluIiwiY29tcG9uZW50V2lsbE1vdW50IiwibWV0aG9kIiwidXJsIiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJuYW1lIiwiYWdlIiwiZnJpZW5kIiwiY29sdW1ucyIsIkhlYWRlciIsImFjY2Vzc29yIiwiQ2VsbCIsInByb3BzIiwidmFsdWUiLCJpZCIsImQiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPLEFBQVc7Ozs7Ozs7QUFKbEI7OztJQU9NLEE7Ozs7Ozs7Ozs7Ozs7Ozt3TSxBQUNILDhGQUFxQixtQkFBQTtVQUFBO29FQUFBO2tCQUFBOzJDQUFBO2lCQUFBOzhCQUFBOzt3QkFDSyxBQUNiLEFBQ1I7cUJBRmUsQUFBTSxBQUVoQjtBQUZnQixBQUNyQixlQURlLEVBQUEsQUFHZCxLQUFLLFVBQUEsQUFBUyxVQUFVLEFBQ3pCO3VCQUFBLEFBQU8sQUFDUjtBQU5pQixBQUNEOztpQkFBYjtBQURjLDhCQU9sQjs7c0JBQUEsQUFBUSxJQUFJLEtBUE0sQUFPbEIsQUFBaUI7O2lCQVBDO2lCQUFBOzhCQUFBOztBQUFBO2tCQUFBO0E7Ozs7OzZCQVNYLEFBQ1A7VUFBTTtjQUFRLEFBQ0osQUFDTjthQUZVLEFBRUwsQUFDTDs7Z0JBQVEsQUFDQSxBQUNOO2VBTE8sQUFBQyxBQUdGLEFBRUQ7QUFGQyxBQUNOO0FBSlEsQUFDVixPQURTO2NBT1QsQUFDUSxBQUNOO2FBRkYsQUFFTyxBQUNMOztnQkFBUSxBQUNBLEFBQ047ZUFaSyxBQU9ULEFBR1UsQUFFRDtBQUZDLEFBQ047QUFKSixBQUNFO2NBTUEsQUFDTSxBQUNOO2FBRkEsQUFFSyxBQUNMOztnQkFBUSxBQUNBLEFBQ047ZUFuQkssQUFjUCxBQUdRLEFBRUQ7QUFGQyxBQUNOO0FBSkYsQUFDQTtjQU1BLEFBQ00sQUFDTjthQUZBLEFBRUssQUFDTDs7Z0JBQVEsQUFDQSxBQUNOO2VBMUJLLEFBcUJQLEFBR1EsQUFFRDtBQUZDLEFBQ047QUFKRixBQUNBO2NBTUEsQUFDTSxBQUNOO2FBRkEsQUFFSyxBQUNMOztnQkFBUSxBQUNBLEFBQ047ZUFqQ0ssQUE0QlAsQUFHUSxBQUVEO0FBRkMsQUFDTjtBQUpGLEFBQ0E7Y0FNQSxBQUNNLEFBQ047YUFGQSxBQUVLLEFBQ0w7O2dCQUFRLEFBQ0EsQUFDTjtlQXhDUixBQUFhLEFBbUNQLEFBR1EsQUFFRCxBQUdiO0FBTGMsQUFDTjtBQUpGLEFBQ0E7VUFPQTtnQkFBVyxBQUNMLEFBQ1I7a0JBRmEsQUFFSCxPQUZFLEFBQUMsQUFFSTtBQUZKLEFBQ2IsT0FEWTtnQkFHWCxBQUNPLEFBQ1I7a0JBRkMsQUFFUyxBQUNWO2NBQU0scUJBQUE7aUNBQVMsY0FBQSxVQUFNLFdBQU4sQUFBZ0I7d0JBQWhCOzBCQUFBLEFBQTBCO0FBQTFCO1dBQUEsUUFBVCxBQUFTLEFBQWdDO0FBSDlDLFVBSFcsQUFHWCxBQUc0RDtBQUg1RCxBQUNEO1lBR0MsQUFDRyxjQUFjLEFBQ2xCO2dCQUZDLEFBRU8sQUFDUjtrQkFBVSxxQkFBQTtpQkFBSyxFQUFBLEFBQUUsT0FBUCxBQUFjO0FBSHZCLFVBUFcsQUFPWCxBQUc0QjtBQUg1QixBQUNEO2dCQUlRLHVCQUFBO2lDQUFTLGNBQUE7O3dCQUFBOzBCQUFBO0FBQUE7QUFBQSxXQUFBLEVBQVQsQUFBUztBQURoQixXQUN5QyxBQUMxQztrQkFiSixBQUFnQixBQVdYLEFBRVMsQUFHWjtBQUxHLEFBQ0Q7OzZCQUtFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0k7QUFESjtBQUFBLE9BQUEsa0JBQ0ksQUFBQzs7b0JBQUQ7c0JBRlIsQUFDSSxBQUNJLEFBS1Q7QUFMUztBQUFBOzs7OztFQXhFRyxnQkFBTSxBLEFBZ0Z6Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvcGhhY2hhcmEvRGVza3RvcC9Qcm9qZWN0LzIwMTcvSG9tZXdvcmsveXdjIn0=