import { Input, Radio, Select, Switch, Checkbox, TimePicker2, DatePicker2, NumberPicker } from '@alifd/next';
var RangePicker = DatePicker2.RangePicker;
var Option = Select.Option;

/**
 * 输入组件映射
 */
export var componentMap = {
  input: Input,
  textArea: Input.TextArea,
  password: Input.Password,
  select: Select,
  checkox: Checkbox.Group,
  // fix第一版单词拼错
  checkbox: Checkbox.Group,
  radio: Radio.Group,
  "switch": Switch,
  date: DatePicker2,
  dateRange: RangePicker,
  timePicker: TimePicker2,
  timePickerRange: TimePicker2.RangePicker,
  numberPicker: NumberPicker
};
/**
 * 输入组件对应子组件映射
 */
export var subComponentMap = {
  select: Option,
  checkox: Checkbox,
  // fix第一版单词拼错
  checkbox: Checkbox,
  radio: Radio
};