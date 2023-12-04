"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _react = _interopRequireWildcard(require("react"));
var _next = require("@alifd/next");
var _classnames = _interopRequireDefault(require("classnames"));
var _formItem = _interopRequireDefault(require("./form-item"));
var _formContext = _interopRequireDefault(require("./form-context"));
var _common = require("./utils/common");
var _excluded = ["className", "showSeparator", "hidden", "key", "singleLine"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var Row = _next.Grid.Row,
  Col = _next.Grid.Col;
/**
 * 表单项集合组件
 */
var ItemsBase = /*#__PURE__*/_react["default"].forwardRef(function (props, ref) {
  var formProps = (0, _react.useContext)(_formContext["default"]);
  var items = props.items,
    _props$gutter = props.gutter,
    gutter = _props$gutter === void 0 ? formProps.gutter : _props$gutter,
    _props$columns = props.columns,
    columns = _props$columns === void 0 ? formProps.columns : _props$columns,
    _props$labelAlign = props.labelAlign,
    labelAlign = _props$labelAlign === void 0 ? formProps.labelAlign : _props$labelAlign,
    _props$labelCol = props.labelCol,
    labelCol = _props$labelCol === void 0 ? formProps.labelCol : _props$labelCol,
    _props$wrapperCol = props.wrapperCol,
    wrapperCol = _props$wrapperCol === void 0 ? formProps.wrapperCol : _props$wrapperCol,
    _props$colon = props.colon,
    colon = _props$colon === void 0 ? formProps.colon : _props$colon,
    prefixName = props.prefixName,
    index = props.index,
    dynamic = props.dynamic,
    customRender = props.customRender;

  /**
   * 渲染表单项
   * @param item 表单项数据
   * @returns ReactNode
   */
  var renderFormItemContent = function renderFormItemContent(item) {
    var _item$items;
    // 表单项属性设置
    var baseProps = (0, _extends2["default"])({
      labelAlign: labelAlign,
      labelCol: labelCol,
      wrapperCol: wrapperCol,
      colon: colon,
      ref: ref
    }, item);
    var name = item.name;
    // // 如果是动态表单，设置对应表单项name
    if (dynamic === true && index !== undefined) {
      name = prefixName + "." + index + "." + name;
    }
    // 表单项中多个输入元素处理
    if ((_item$items = item.items) !== null && _item$items !== void 0 && _item$items.length) {
      return /*#__PURE__*/_react["default"].createElement(_formItem["default"], (0, _extends2["default"])({}, baseProps, {
        name: name
      }), typeof customRender === 'function' && customRender(item));
    } else {
      return /*#__PURE__*/_react["default"].createElement(_formItem["default"], (0, _extends2["default"])({}, baseProps, {
        name: name
      }));
    }
  };
  /**
   * 渲染表单内容
   * @returns ReactNode
   */
  var renderContent = function renderContent() {
    // 处理表单项间隔样式处理，Fusion Row组件使用Fragment方式设置gutter不生效
    var halfGutterString = gutter / 2 + "px";
    var style = {
      paddingLeft: halfGutterString,
      paddingRight: halfGutterString
    };
    return items.map(function (item, idx) {
      var className = item.className,
        showSeparator = item.showSeparator,
        hidden = item.hidden,
        key = item.key,
        singleLine = item.singleLine,
        other = (0, _objectWithoutPropertiesLoose2["default"])(item, _excluded);
      var mergeKey = key || "" + item.name + idx;
      // Col组件span属性设置
      var spanProps = (0, _common.getColSpan)(item, columns);
      // 隐藏表单项
      var hiddenFlag = typeof hidden === 'function' ? hidden(item) : hidden;
      // 父层元素
      var Component = singleLine ? Col : _react["default"].Fragment;
      // 组件属性
      var componentProps = {
        span: 24,
        key: mergeKey
      };
      // React.Fragment不需要span属性
      !singleLine && delete componentProps.span;
      return !hiddenFlag ? /*#__PURE__*/_react["default"].createElement(Component, componentProps, /*#__PURE__*/_react["default"].createElement(Col, (0, _extends2["default"])({
        style: style,
        className: (0, _classnames["default"])('banma-form-col', className)
      }, spanProps), renderFormItemContent(other)), showSeparator && /*#__PURE__*/_react["default"].createElement(_next.Icon, {
        size: 16,
        type: "semi-select"
      })) : null;
    });
  };
  return /*#__PURE__*/_react["default"].createElement(Row, {
    align: "baseline",
    wrap: true,
    className: props.className
  }, renderContent());
});
var _default = exports["default"] = ItemsBase;