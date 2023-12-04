import _extends from "@babel/runtime/helpers/extends";
import * as React from 'react';
import { pick } from 'lodash-es';
import { componentMap, subComponentMap } from './map';
/**
 * 比较目标值是否在范围内
 * @param value 比较值
 * @param min 最小值
 * @param max 最大值
 * @param type 比较类型 1: 包含等于 其他: 不包含等于
 * @returns boolean
 */
var handleCompare = function handleCompare(value, min, max) {
  return min && value < min || max && value > max;
};

/**
 * 日期禁用
 * @param date 组件日期
 * @param mode 模式
 * @param min 最小值
 * @param max 最大值
 * @returns boolean
 */
var _disabledDate = function disabledDate(date, mode, min, max) {
  var year = date.year();
  var month = date.month();
  var yearMonth = year * 100 + month;
  var minYear = min === null || min === void 0 ? void 0 : min.year();
  var maxYear = max === null || max === void 0 ? void 0 : max.year();
  switch (mode) {
    case 'date':
      return handleCompare(date.valueOf(), min === null || min === void 0 ? void 0 : min.valueOf(), max === null || max === void 0 ? void 0 : max.valueOf());
    case 'year':
      return handleCompare(year, minYear, maxYear);
    case 'month':
      return handleCompare(yearMonth, minYear * 100 + (min === null || min === void 0 ? void 0 : min.month()), maxYear * 100 + (max === null || max === void 0 ? void 0 : max.month()));
    default:
      return false;
  }
};
var BanmaFormItemContent = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _props$type = props.type,
    type = _props$type === void 0 ? 'input' : _props$type,
    defaultValue = props.defaultValue,
    value = props.value,
    placeholder = props.placeholder,
    _props$showTime = props.showTime,
    showTime = _props$showTime === void 0 ? false : _props$showTime,
    _props$labelKey = props.labelKey,
    labelKey = _props$labelKey === void 0 ? 'label' : _props$labelKey,
    _props$valueKey = props.valueKey,
    valueKey = _props$valueKey === void 0 ? 'value' : _props$valueKey,
    _props$dataSource = props.dataSource,
    dataSource = _props$dataSource === void 0 ? [] : _props$dataSource,
    mode = props.mode,
    innerBefore = props.innerBefore,
    innerAfter = props.innerAfter,
    showSearch = props.showSearch,
    hasClear = props.hasClear,
    trim = props.trim,
    minDate = props.minDate,
    maxDate = props.maxDate,
    _props$typeProps = props.typeProps,
    typeProps = _props$typeProps === void 0 ? {} : _props$typeProps,
    onChange = props.onChange;
  // fusion Form.Item组件会根据Form、Form.Item传入属性设置Form.Item子组件属性，将对应属性提取传给组件
  var base = pick(props, ['size', 'isPreview', 'renderPreview', 'state', 'label', 'disabled']);

  // 根据type获取数据输入组件
  var Component = componentMap[type];
  // 判断数据输入组件是否有子节点
  var Sub = subComponentMap[type];
  var _props = _extends({}, base, {
    ref: ref,
    value: value,
    defaultValue: defaultValue,
    placeholder: placeholder,
    onChange: onChange
  });
  switch (type) {
    case 'input':
      _props = _extends({}, _props, {
        trim: trim,
        hasClear: hasClear,
        innerBefore: innerBefore,
        innerAfter: innerAfter
      });
      break;
    case 'select':
      _props = _extends({}, _props, {
        mode: mode,
        showSearch: showSearch,
        hasClear: true
      });
      break;
    case 'switch':
      if ('value' in props) {
        _props = _extends({}, _props, {
          checked: value
        });
      } else {
        _props = _extends({}, _props, {
          defaultChecked: defaultValue
        });
      }
      break;
    case 'date':
    case 'dateRange':
      // 日期类型添加showTime属性支持，设置默认输出格式
      _props = _extends({}, _props, {
        showTime: showTime,
        disabledDate: function disabledDate(date, dateMode) {
          return _disabledDate(date, dateMode, minDate, maxDate);
        },
        outputFormat: showTime ? 'YYYY-MM-DD HH:mm:ss' : 'YYYY-MM-DD'
      });
      break;
    default:
  }
  return /*#__PURE__*/React.createElement(Component, _extends({}, _props, typeProps), Sub && dataSource.map(function (data) {
    return /*#__PURE__*/React.createElement(Sub, {
      key: data[valueKey],
      value: data[valueKey],
      disabled: data.disabled
    }, data[labelKey]);
  }));
});
export default BanmaFormItemContent;