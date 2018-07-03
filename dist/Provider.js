'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _set = require('keypather/set');

var _set2 = _interopRequireDefault(_set);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WrapperProvider = function WrapperProvider(initializeProvider, Provider, initialState) {
  return function (_Component) {
    _inherits(EnhancedProvider, _Component);

    function EnhancedProvider(props) {
      _classCallCheck(this, EnhancedProvider);

      var _this = _possibleConstructorReturn(this, (EnhancedProvider.__proto__ || Object.getPrototypeOf(EnhancedProvider)).call(this));

      _this.state = props.initialState || initialState;
      _this.updateState = function (data) {
        return _this._updateState(data);
      };
      initializeProvider(_this);
      return _this;
    }

    _createClass(EnhancedProvider, [{
      key: '_updateState',
      value: function _updateState(data) {
        var newState = Object.assign({}, this.state);
        (0, _set2.default)(newState, data.key, data.payload, { force: true });
        this.setState(newState);
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          Provider,
          { value: this.state },
          this.props.children
        );
      }
    }]);

    return EnhancedProvider;
  }(_react.Component);
};

exports.default = WrapperProvider;