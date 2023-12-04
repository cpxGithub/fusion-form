# 数字化门户-表单
## 说明
* select类型默认设置有清除按钮
* switch类型支持使用defaultValue、value设值
* date、dateRange设值默认输出格式为YYYY-MM-DD，若设置 showTime 属性，输出格式为YYYY-MM-DD HH:mm:ss

**备注**： 日期、时间类型内部使用的组件是DatePicker2、TimePicker2组件
## 使用
banma-fusion-form
### 安装
```bash
npm install banma-fusion-form
```
## API

### BanmaForm
| 参数名 | 说明 | 必填 | 类型 | 默认值 | 备注 |
| ------ | ---- | ---- | ---- | ------ | ---- |
| items  | 表单项 | 否 |  Item   |        |      |
| columns  | 一行多少列 | 否 |  Number/ResponsiveGrid   |    1    |      |
| gutter  | 列间距 | 否 |  Number   |    0    |      |
| useLabelForErrorMessage  | 是否使用 label 替换校验信息的 name 字段 | 否 |  Boolean   |    true    |      |
| fullWidth  | 单个 Item 中表单类组件宽度是否是100% | 否 |  Boolean   |   true     |      |
| parseName  | 是否将name中.的字符串转换成对象，表单项items存在dynamic且未使用filed属性时必须设置true | 否 |  Boolean   |   false     |      |
| children  | 自定义 | 否 |  ReactNode   |        |      |

其他属性参考<a href="https://fusion.design/pc/component/form?themeid=2" target="_blank">Fusion Form</a>

### ResponsiveGrid
| 参数名 | 说明 | 必填 | 类型 | 默认值 | 备注 |
| ------ | ---- | ---- | ---- | ------ | ---- |
| l  | >=1200px 一行列数 | 否 |  Number   |        |      |
| xl  | >=1500px 一行列数 | 否 |  Number   |     |    |
| span  | 一行列数 | 否 |  Number   |        |      |
### Item
| 参数名 | 说明 | 必填 | 类型 | 默认值 | 备注 |
| ------ | ---- | ---- | ---- | ------ | ---- |
| label  | label 标签的文本 | 否 |  ReactNode   |        |      |
| name  | 字段名 | 否 |  String   |     |    |
| children  | 自定义 | 否 |  ReactNode   |        |      |
| type  | 表单输入组件 | 否 |  input,select,switch,checkox,radio,textArea,password,date,dateRange,timePicker,timePickerRange,numberPicker    |   input     |      |
| showTime  | 是否使用时间控件，type=date/dateRange生效 | 否 |  Boolean   |    false   |      |
| dataSource  | type=select/checkbox/radio类型时数据源 | 否 |  Array   |        |      |
| labelKey  | 使用dataSource时，展示的label取值 | 否 |  String   |    label    |      |
| valueKey  | 使用dataSource时，value key 值 | 否 |  String   |    value    |      |
| defaultValue  | 初始值 | 否 |  String/Number/Boolean   |        |   type=switch使用时也生效   |
| value  | 当前值 | 否 |  String/Number/Boolean   |        |  type=switch使用时也生效    |
| onChange  | 表单输入组件改变时触发此事件 | 否 |  Function   |        |      |
| placeholder  | 	输入提示 | 否 |  String   |        |      |
| innerBefore  | 文字前附加内容，type=input时支持 | 否 |  ReactNode   |        |      |
| innerAfter  | 文字后附加内容，type=input时支持 | 否 |  ReactNode   |        |      |
| hint  | 输入框后提示信息 | 否 |  ReactNode   |        |      |
| hidden  | 是否隐藏表单项 | 否 |  Boolean | (item) => Boolean   |        |      |
| addonAfter  | 表单后面添加自定义内容 | 否 |  ReactNode   |        |      |
| items  | 表单项集合,表单项中渲染多个表单元素 | 否 |  Item   |        |  v1.1.0    |
| showSeparator  | 展示分隔符，存在items属性有效 | 否 |  Boolean   |       |   v1.1.0   |
| gutter  | 表单项之间间隔，存在items属性有效 | 否 |  Number   |    8    |   v1.1.0   |
| dynamic  | 动态表单 | 否 |  Boolean   |    false    |   v1.2.0  |
| minNum  | 动态表单最小数量，dynamic=true有效 | 否 |  Number   |        |  v1.3.0    |
| maxNum  | 动态表单最大数量，dynamic=true有效 | 否 |  Number   |        |  v1.3.0    |
| span  | 列宽度,使用方式同Grid.Col span | 否 |  Number   |        |   v1.1.0   |
| mode  | 选择器模式，type=select时支持 | 否 |  single', 'multiple', 'tag'   |   single   |      |
| typeProps  | 默认提取表单输入组件常用属性，使用该属性扩展表单输入组件其他属性 | 否 |  Object   |        |   type=checkbox/radio时，属性设置到Checkbox.Group，Radio.Group   |
| showSearch  | 展开后是否能搜索，type=select有效 | 否 |  Boolean   |        |      |
| trim  | 去除头尾空字符，type=input有效 | 否 |  Boolean   |        |      |
| hasClear  | 是否出现clear按钮，type=input有效  | 否 |  Boolean   |        |      |
| minDate  | 最小日期，type=date、dateRange有效 | 否 |  Dayjs   |        |      |
| maxDate  | 最大日期，type=date、dateRange有效 | 否 |  Dayjs   |        |      |
| singleLine  | 一行多列情况下(columns > 1)，设置当前项是否单独一行显示 | 否 |  Boolean   |        |      |

其他属性参考<a href="https://fusion.design/pc/component/form?themeid=2%20Item" target="_blank">Fusion Form.Item</a>
