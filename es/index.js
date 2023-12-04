import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["className", "items", "gutter", "columns", "field", "labelAlign", "parseName", "children", "labelCol", "wrapperCol", "colon"];
import React, { useEffect } from 'react';
import { Form, Field } from '@alifd/next';
import classNames from 'classnames';
import FormItems from './form-items';
import FormContext from './form-context';
import './index.scss';
export default function BanmaForm(props) {
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
    otherProps = _objectWithoutPropertiesLoose(props, _excluded);
  var defaultField = Field.useField({
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
  useEffect(function () {
    formField.setValues(props.value);
  }, [props.value, formField]);
  return /*#__PURE__*/React.createElement(Form, _extends({
    className: classNames('banma-form', className),
    useLabelForErrorMessage: true,
    fullWidth: true,
    field: formField
  }, otherProps), /*#__PURE__*/React.createElement(FormContext.Provider, {
    value: _extends({}, commonProps, {
      field: formField
    })
  }, children || /*#__PURE__*/React.createElement(FormItems, _extends({
    items: items
  }, commonProps))));
}
BanmaForm.Item = Form.Item;
BanmaForm.Items = FormItems;
BanmaForm.Submit = Form.Submit;
BanmaForm.Reset = Form.Reset;
BanmaForm.Error = Form.Error;
BanmaForm.defaultProps = {
  gutter: 0,
  columns: 1,
  parseName: false,
  labelCol: {
    fixedSpan: 5
  }
};