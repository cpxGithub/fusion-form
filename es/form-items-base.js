import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
import _extends from "@babel/runtime/helpers/extends";
var _excluded = ["className", "showSeparator", "hidden", "key", "singleLine"];
import React, { useContext } from 'react';
import { Grid, Icon } from '@alifd/next';
import classNames from 'classnames';
import BanmaFormItem from './form-item';
import FormContext from './form-context';
import { getColSpan } from './utils/common';
var Row = Grid.Row,
  Col = Grid.Col;
/**
 * 表单项集合组件
 */
var ItemsBase = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var formProps = useContext(FormContext);
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
    var baseProps = _extends({
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
      return /*#__PURE__*/React.createElement(BanmaFormItem, _extends({}, baseProps, {
        name: name
      }), typeof customRender === 'function' && customRender(item));
    } else {
      return /*#__PURE__*/React.createElement(BanmaFormItem, _extends({}, baseProps, {
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
        other = _objectWithoutPropertiesLoose(item, _excluded);
      var mergeKey = key || "" + item.name + idx;
      // Col组件span属性设置
      var spanProps = getColSpan(item, columns);
      // 隐藏表单项
      var hiddenFlag = typeof hidden === 'function' ? hidden(item) : hidden;
      // 父层元素
      var Component = singleLine ? Col : React.Fragment;
      // 组件属性
      var componentProps = {
        span: 24,
        key: mergeKey
      };
      // React.Fragment不需要span属性
      !singleLine && delete componentProps.span;
      return !hiddenFlag ? /*#__PURE__*/React.createElement(Component, componentProps, /*#__PURE__*/React.createElement(Col, _extends({
        style: style,
        className: classNames('banma-form-col', className)
      }, spanProps), renderFormItemContent(other)), showSeparator && /*#__PURE__*/React.createElement(Icon, {
        size: 16,
        type: "semi-select"
      })) : null;
    });
  };
  return /*#__PURE__*/React.createElement(Row, {
    align: "baseline",
    wrap: true,
    className: props.className
  }, renderContent());
});
export default ItemsBase;