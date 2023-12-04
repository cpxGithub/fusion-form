"use strict";

exports.__esModule = true;
exports.subComponentMap = exports.componentMap = void 0;
var _next = require("@alifd/next");
var RangePicker = _next.DatePicker2.RangePicker;
var Option = _next.Select.Option;

/**
 * 输入组件映射
 */
var componentMap = exports.componentMap = {
  input: _next.Input,
  textArea: _next.Input.TextArea,
  password: _next.Input.Password,
  select: _next.Select,
  checkox: _next.Checkbox.Group,
  // fix第一版单词拼错
  checkbox: _next.Checkbox.Group,
  radio: _next.Radio.Group,
  "switch": _next.Switch,
  date: _next.DatePicker2,
  dateRange: RangePicker,
  timePicker: _next.TimePicker2,
  timePickerRange: _next.TimePicker2.RangePicker,
  numberPicker: _next.NumberPicker
};
/**
 * 输入组件对应子组件映射
 */
var subComponentMap = exports.subComponentMap = {
  select: Option,
  checkox: _next.Checkbox,
  // fix第一版单词拼错
  checkbox: _next.Checkbox,
  radio: _next.Radio
};