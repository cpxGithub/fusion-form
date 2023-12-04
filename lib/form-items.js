"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));
var _react = _interopRequireDefault(require("react"));
var _formItemsBase = _interopRequireDefault(require("./form-items-base"));
var _formItemsDynamic = _interopRequireDefault(require("./form-items-dynamic"));
var BanmaFormItems = exports["default"] = /*#__PURE__*/function (_React$Component) {
  (0, _inheritsLoose2["default"])(BanmaFormItems, _React$Component);
  function BanmaFormItems() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    // 渲染动态表单
    _this.handleRender = function (item) {
      return /*#__PURE__*/_react["default"].createElement(_formItemsDynamic["default"], item);
    };
    return _this;
  }
  var _proto = BanmaFormItems.prototype;
  _proto.render = function render() {
    return /*#__PURE__*/_react["default"].createElement(_formItemsBase["default"], (0, _extends2["default"])({}, this.props, {
      customRender: this.handleRender
    }));
  };
  return BanmaFormItems;
}(_react["default"].Component);