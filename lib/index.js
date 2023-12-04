"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = BanmaForm;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));
var _react = _interopRequireWildcard(require("react"));
var _next = require("@alifd/next");
var _classnames = _interopRequireDefault(require("classnames"));
var _formItems = _interopRequireDefault(require("./form-items"));
var _formContext = _interopRequireDefault(require("./form-context"));
require("./index.scss");
var _excluded = ["className", "items", "gutter", "columns", "field", "labelAlign", "parseName", "children", "labelCol", "wrapperCol", "colon"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function BanmaForm(props) {
  var className = props.className,
    items = props.items,
    gutter = props.gutter,
    columns = props.columns,
    field = props.field,
    labelAlign = props.labelAlign,
    parseName = props.parseName,
    children = props.children,
    labelCol = props.labelCol,
    wrapperCol = props.wrapperCol,
    colon = props.colon,
    otherProps = (0, _objectWithoutPropertiesLoose2["default"])(props, _excluded);
  var defaultField = _next.Field.useField({
    parseName: parseName
  });
  // field设置
  var formField = field || defaultField;
  // 相同属性
  var commonProps = {
    gutter: gutter,
    columns: columns,
    labelAlign: labelAlign,
    labelCol: labelCol,
    wrapperCol: wrapperCol,
    colon: colon
  };
  // fix 在弹窗使用时使用value属性未渲染值问题
  (0, _react.useEffect)(function () {
    formField.setValues(props.value);
  }, [props.value, formField]);
  return /*#__PURE__*/_react["default"].createElement(_next.Form, (0, _extends2["default"])({
    className: (0, _classnames["default"])('banma-form', className),
    useLabelForErrorMessage: true,
    fullWidth: true,
    field: formField
  }, otherProps), /*#__PURE__*/_react["default"].createElement(_formContext["default"].Provider, {
    value: (0, _extends2["default"])({}, commonProps, {
      field: formField
    })
  }, children || /*#__PURE__*/_react["default"].createElement(_formItems["default"], (0, _extends2["default"])({
    items: items
  }, commonProps))));
}
BanmaForm.Item = _next.Form.Item;
BanmaForm.Items = _formItems["default"];
BanmaForm.Submit = _next.Form.Submit;
BanmaForm.Reset = _next.Form.Reset;
BanmaForm.Error = _next.Form.Error;
BanmaForm.defaultProps = {
  gutter: 0,
  columns: 1,
  parseName: false,
  labelCol: {
    fixedSpan: 5
  }
};