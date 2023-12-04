"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _next = require("@alifd/next");
var _classnames = _interopRequireDefault(require("classnames"));
var _formContext = _interopRequireDefault(require("./form-context"));
var _formItemsBase = _interopRequireDefault(require("./form-items-base"));
var _hooks = require("./utils/hooks");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/**
 * 动态表单渲染组件
 */
var FormItemsDynamic = /*#__PURE__*/_react["default"].forwardRef(function (props, ref) {
  var dynamic = props.dynamic,
    gutter = props.gutter,
    items = props.items,
    name = props.name,
    label = props.label,
    value = props.value,
    isPreview = props.isPreview,
    minNum = props.minNum,
    maxNum = props.maxNum;
  // 获取父层field
  var _useContext = (0, _react.useContext)(_formContext["default"]),
    field = _useContext.field;
  // 设置动态表单项渲染
  var _useState = (0, _react.useState)([]),
    formItemList = _useState[0],
    setFormItemList = _useState[1];
  // 设置一个表单项中多个表单项元素的样式类，如果设置dynamic属性表示动态渲染表单上下布局
  var className = (0, _classnames["default"])(dynamic ? 'banma-form-item-vertical' : 'banma-form-item-horizontal', {
    'banma-gutter': !dynamic && !!gutter
  });

  /**
   * 新增表单项
   */
  var handleAdd = function handleAdd() {
    setFormItemList(function (preState) {
      return [].concat(preState, [props]);
    });
  };
  /**
   * 删除表单项
   * @param index 下标
   */
  var handleDel = function handleDel(index) {
    // 删除表单项中对应值
    field.deleteArrayValue(name, index);
    // 删除表单项
    formItemList.splice(index, 1);
    setFormItemList([].concat(formItemList));
  };
  /**
   * 渲染动态表单
   * 预览态下不展示删除、新增按钮
   * @returns 动态渲染表单
   */
  var renderDynamicItems = function renderDynamicItems() {
    // 新增按钮是否展示
    var addButtonShow = !isPreview && (!maxNum || formItemList.length < maxNum);
    // 动态表单内容
    var dynamicItems = formItemList.map(function (data, index) {
      // map取值key
      var key = data.key || "" + data.name + index;
      // 删除按钮是否禁用
      var buttonDisabeld = minNum && index < minNum;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: className,
        key: key
      }, /*#__PURE__*/_react["default"].createElement(_next.Box, {
        direction: "row",
        justify: "space-between",
        className: "banma-form-item-dynamic-header"
      }, /*#__PURE__*/_react["default"].createElement("span", {
        className: "banma-form-item-dynamic-title"
      }, "" + label + (index + 1)), !isPreview && /*#__PURE__*/_react["default"].createElement(_next.Button, {
        style: {
          color: !buttonDisabeld ? 'var(--color-error-3)' : ''
        },
        text: true,
        disabled: buttonDisabeld,
        onClick: function onClick() {
          return handleDel(index);
        }
      }, "\u5220\u9664")), /*#__PURE__*/_react["default"].createElement(_formItemsBase["default"], {
        ref: ref,
        dynamic: true,
        prefixName: name,
        index: index,
        gutter: 0,
        items: data.items,
        columns: 1
      }));
    });
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, dynamicItems, addButtonShow && /*#__PURE__*/_react["default"].createElement(_next.Button, {
      className: "banma-dynamic-button",
      onClick: handleAdd
    }, /*#__PURE__*/_react["default"].createElement(_next.Icon, {
      type: "add"
    }), " \u65B0\u589E"));
  };
  /**
   * 渲染表单内容
   * 动态表单每个表单项单独一行、非动态表单一行多个，每个表单项默认均分
   * @returns 表单内容
   */
  var renderFormContent = function renderFormContent() {
    if (dynamic) {
      return renderDynamicItems();
    } else {
      return /*#__PURE__*/_react["default"].createElement(_formItemsBase["default"], {
        className: className,
        ref: ref,
        gutter: gutter,
        items: items,
        columns: null
      });
    }
  };
  (0, _hooks.useDeepCompareEffect)(function () {
    // 如果value属性存在且有值，设置表单长度为value长度
    if (Array.isArray(value) && value.length) {
      var arr = new Array(value.length).fill(props);
      setFormItemList(arr);
    } else {
      setFormItemList([props]);
    }
  }, [props], ['isPreview', 'onChange']);
  return renderFormContent();
});
FormItemsDynamic.defaultProps = {
  gutter: 8
};
var _default = exports["default"] = FormItemsDynamic;