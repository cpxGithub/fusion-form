import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["hint", "addonAfter", "children", "label"];
import * as React from 'react';
import { Form, Grid, Icon, Balloon } from '@alifd/next';
import { omit, pick } from 'lodash-es';
import BanmaFormItemContent from './form-item-content';
var FormItem = Form.Item;
var Row = Grid.Row,
  Col = Grid.Col;
var formItemKeys = Object.keys(FormItem.propTypes);
var BanmaFormItem = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var hint = props.hint,
    addonAfter = props.addonAfter,
    children = props.children,
    label = props.label,
    otherProps = _objectWithoutPropertiesLoose(props, _excluded);
  // 获取props中符合Form.Item属性对象
  var formItem = omit(pick(otherProps, formItemKeys), ['defaultValue', 'onChange', 'hidden']) || {};
  return /*#__PURE__*/React.createElement(Row, {
    align: "baseline"
  }, /*#__PURE__*/React.createElement(Col, {
    span: 24
  }, /*#__PURE__*/React.createElement(FormItem, _extends({
    label: label
  }, formItem, {
    ref: ref
  }), children !== undefined ? children : /*#__PURE__*/React.createElement(BanmaFormItemContent, otherProps))), hint && /*#__PURE__*/React.createElement(Balloon, {
    v2: true,
    trigger: /*#__PURE__*/React.createElement(Icon, {
      className: "banma-hint",
      type: "help"
    }),
    triggerType: "hover"
  }, hint), addonAfter && /*#__PURE__*/React.createElement("span", {
    className: "margin-left"
  }, addonAfter));
});
export default BanmaFormItem;