"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));
var React = _interopRequireWildcard(require("react"));
var _next = require("@alifd/next");
var _lodashEs = require("lodash-es");
var _formItemContent = _interopRequireDefault(require("./form-item-content"));
var _excluded = ["hint", "addonAfter", "children", "label"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var FormItem = _next.Form.Item;
var Row = _next.Grid.Row,
  Col = _next.Grid.Col;
var formItemKeys = Object.keys(FormItem.propTypes);
var BanmaFormItem = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var hint = props.hint,
    addonAfter = props.addonAfter,
    children = props.children,
    label = props.label,
    otherProps = (0, _objectWithoutPropertiesLoose2["default"])(props, _excluded);
  // 获取props中符合Form.Item属性对象
  var formItem = (0, _lodashEs.omit)((0, _lodashEs.pick)(otherProps, formItemKeys), ['defaultValue', 'onChange', 'hidden']) || {};
  return /*#__PURE__*/React.createElement(Row, {
    align: "baseline"
  }, /*#__PURE__*/React.createElement(Col, {
    span: 24
  }, /*#__PURE__*/React.createElement(FormItem, (0, _extends2["default"])({
    label: label
  }, formItem, {
    ref: ref
  }), children !== undefined ? children : /*#__PURE__*/React.createElement(_formItemContent["default"], otherProps))), hint && /*#__PURE__*/React.createElement(_next.Balloon, {
    v2: true,
    trigger: /*#__PURE__*/React.createElement(_next.Icon, {
      className: "banma-hint",
      type: "help"
    }),
    triggerType: "hover"
  }, hint), addonAfter && /*#__PURE__*/React.createElement("span", {
    className: "margin-left"
  }, addonAfter));
});
var _default = exports["default"] = BanmaFormItem;