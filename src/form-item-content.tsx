import * as React from 'react';
import { pick } from 'lodash-es';
import { Dayjs } from 'dayjs';
import { SelectProps } from '@alifd/next/types/select';
import { FormItemProps } from './types';
import { componentMap, subComponentMap } from './map';

interface BanmaFormItemContentProps extends FormItemProps, Omit<SelectProps, keyof FormItemProps> {
  /** 日期组件输出格式 */
  outputFormat?: string;
  /** switch组件当前值 */
  checked?: boolean;
  /** switch组件默认值 */
  defaultChecked?: boolean;
  /** 日期组件，禁用日期函数 */
  disabledDate?: (value: Dayjs, mode: 'date' | 'month' | 'week' | 'quarter' | 'year') => boolean;
  /** React.ref */
  ref?: any;
}

/**
 * 比较目标值是否在范围内
 * @param value 比较值
 * @param min 最小值
 * @param max 最大值
 * @param type 比较类型 1: 包含等于 其他: 不包含等于
 * @returns boolean
 */
const handleCompare = (value: number, min?: number, max?: number) => {
  return (min && value < min) || (max && value > max);
};

/**
 * 日期禁用
 * @param date 组件日期
 * @param mode 模式
 * @param min 最小值
 * @param max 最大值
 * @returns boolean
 */
const disabledDate = function (date: Dayjs, mode: string, min: Dayjs, max: Dayjs) {
  const year = date.year();
  const month = date.month();
  const yearMonth = year * 100 + month;
  const minYear = min?.year();
  const maxYear = max?.year();
  switch (mode) {
    case 'date':
      return handleCompare(date.valueOf(), min?.valueOf(), max?.valueOf());
    case 'year':
      return handleCompare(year, minYear, maxYear);
    case 'month':
      return handleCompare(yearMonth, minYear * 100 + min?.month(), maxYear * 100 + max?.month());
    default:
      return false;
  }
};

const BanmaFormItemContent = React.forwardRef((props: FormItemProps, ref: any) => {
  const {
    type = 'input',
    defaultValue,
    value,
    placeholder,
    showTime = false,
    labelKey = 'label',
    valueKey = 'value',
    dataSource = [],
    mode,
    innerBefore,
    innerAfter,
    showSearch,
    hasClear,
    trim,
    minDate,
    maxDate,
    typeProps = {},
    onChange,
  } = props;
  // fusion Form.Item组件会根据Form、Form.Item传入属性设置Form.Item子组件属性，将对应属性提取传给组件
  const base = pick(props, ['size', 'isPreview', 'renderPreview', 'state', 'label', 'disabled']);

  // 根据type获取数据输入组件
  const Component = componentMap[type] as React.ElementType;
  // 判断数据输入组件是否有子节点
  const Sub = subComponentMap[type];

  let _props: BanmaFormItemContentProps = {
    ...base,
    ref,
    value,
    defaultValue,
    placeholder,
    onChange,
  };
  switch (type) {
    case 'input':
      _props = {
        ..._props,
        trim,
        hasClear,
        innerBefore,
        innerAfter,
      };
      break;
    case 'select':
      _props = {
        ..._props,
        mode,
        showSearch,
        hasClear: true,
      };
      break;
    case 'switch':
      if ('value' in props) {
        _props = {
          ..._props,
          checked: value as boolean,
        };
      } else {
        _props = {
          ..._props,
          defaultChecked: defaultValue as boolean,
        };
      }
      break;
    case 'date':
    case 'dateRange':
      // 日期类型添加showTime属性支持，设置默认输出格式
      _props = {
        ..._props,
        showTime,
        disabledDate: (date, dateMode) => disabledDate(date, dateMode, minDate, maxDate),
        outputFormat: showTime ? 'YYYY-MM-DD HH:mm:ss' : 'YYYY-MM-DD',
      };
      break;
    default:
  }

  return (
    <Component
      {..._props}
      {...typeProps}
    >
      {Sub && dataSource.map((data) => (
        <Sub
          key={data[valueKey]}
          value={data[valueKey]}
          disabled={data.disabled}
        >
          {data[labelKey]}
        </Sub>
      ))}
    </Component>
  );
});

export default BanmaFormItemContent;
