import { FormProps, ItemProps } from '@alifd/next/types/form';
import { SelectProps } from '@alifd/next/types/select';
import { Dayjs } from 'dayjs';
import { componentMap } from './map';

type Type = keyof typeof componentMap;

export interface ResponsiveGrid {
  /** >=1200px 一行列数 */
  l?: number;
  /** >=1500px 一行列数 */
  xl?: number;
  /** 一行列数 */
  span?: number;
}
export interface FormItemProps extends Omit<ItemProps, 'defaultValue' | 'onChange' | 'hidden'> {
  /** 表单输入组件 */
  type?: Type;
  /** type=select/checkbox/radio类型时数据源 */
  dataSource?: any[];
  /** 使用dataSource时，展示取值key */
  labelKey?: string;
  /** 使用dataSource时，取值key */
  valueKey?: string;
  /** 当前值 */
  value?: any;
  /** 初始化值 */
  defaultValue?: any;
  /** 是否禁用表单 */
  disabled?: boolean;
  /** 输入提示 */
  placeholder?: string;
  /** 是否使用时间控件，type=date/dateRange生效 */
  showTime?: boolean;
  /** 文字前附加内容，type=input时有效 */
  innerBefore?: React.ReactNode;
  /** 文字后附加内容，type=input时有效 */
  innerAfter?: React.ReactNode;
  /** 选择器模式，type=select时有效 */
  mode?: SelectProps['mode'];
  /** 表单项隐藏 */
  hidden?: boolean | ((item?: FormItemProps) => boolean);
  /** 输入框后提示信息 */
  hint?: React.ReactNode;
  /** 表单后面添加自定义内容 */
  addonAfter?: React.ReactNode;
  /** 展示分隔符 */
  showSeparator?: boolean;
  /** 表单项之间间隔 */
  gutter?: number;
  /** 表单项宽度 可选值: 1, 2, 3, ..., 22, 23, 24 */
  span?: number;
  /** 展开后是否能搜索，type=select有效 */
  showSearch?: boolean;
  /** 去除头尾空字符，type=input有效 */
  trim?: boolean;
  /** 是否出现clear按钮，type=input有效 */
  hasClear?: boolean;
  /** 动态表单 */
  dynamic?: boolean;
  /** 动态表单最小数量，dynamic=true有效 */
  minNum?: number;
  /** 动态表单最大数量，dynamic=true有效 */
  maxNum?: number;
  /** 最小日期，type=date、dateRange有效 */
  minDate?: Dayjs;
  /** 最大日期，type=date、dateRange有效 */
  maxDate?: Dayjs;
  /** 扩展表单组件其他属性 */
  typeProps?: object;
  /** 表单项集合 */
  items?: FormItemProps[];
  /** key标识符，默认使用name */
  key?: React.Key;
  /** 一行多列情况下(columns > 1)，设置当前项是否单独一行显示 */
  singleLine?: boolean;
  /** 发生改变的时候触发的回调 */
  onChange?: (value: any, e?: React.ChangeEvent<Element>) => void;
}

export interface BanmaFormProps extends FormProps {
  /** 表单项集合 */
  items?: FormItemProps[];
  /** 表单项之间间隔 */
  gutter?: number;
  /** 一行展示多少列 */
  columns?: number | ResponsiveGrid;
  /** 是否将name中.的字符串转换成对象 */
  parseName?: boolean;
}

export interface BanmaFormItemsProps extends BanmaFormProps {
  /** 动态表单，必须要设置parseName = true */
  dynamic?: boolean;
  /** 动态表单下标，第几项 */
  index?: number;
  /** 动态表单前缀 */
  prefixName?: string;
}
