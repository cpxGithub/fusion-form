---
title: 输入组件其他属性
order: 12
description: {date: '2023-4-12'}
---

表单项提供常用的输入组件（Input、Select、CheckBox等）属性，如：value、defaultValue等属性，提供typeProps属性用于扩展输入组件属性。
* type=radio使用Radio.Group组件属性
* type=checkox使用Checkbox.Group组件属性

```jsx
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Icon } from '@alifd/next';
import Form from 'banma-fusion-form';
import dayjs from 'dayjs';
import '@alifd/theme-3/variables.css';
import '@alifd/theme-3/dist/next.css';

const currentDate = dayjs();

const App = () => {
  const disabledDate = function(date, mode) {
    switch (mode) {
      case "date":
        return date.valueOf() <= currentDate.valueOf();
      case "year":
        return date.year() < currentDate.year();
      case "month":
        return (
          date.year() * 100 + date.month() <
          currentDate.year() * 100 + currentDate.month()
        );
      default:
        return false;
    }
  };

  return (
    <div className="form-container">
      <Form items={[
        {
          label: '开关',
          name: 'isOpen',
          type: 'switch',
          typeProps: {
            loading: true
          }
        },
        {
          label: '姓名',
          name: 'name',
          typeProps: {
            maxLength: 20,
            showLimitHint: true,
            hasClear: true,
          }
        },
        {
          label: '密码',
          name: 'password',
          type: 'password',
        },
        {
          label: 'Radio',
          name: 'radio',
          type: 'radio',
          dataSource: [
            { value: "10001", label: "React" },
            { value: 10002, label: "Vue" },
          ],
          typeProps: {
            shape: 'button'
          }
        },
        {
          label: 'Checkox',
          name: 'checkox',
          type: 'checkox',
          dataSource: [
            { value: "10001", label: "React" },
            { value: 10002, label: "Vue" },
          ]
        },
        {
          label: '时间',
          name: 'timePicker',
          type: 'timePicker',
          typeProps: {
            hourStep: 2,
            minuteStep: 5,
            secondStep: 10,
          }
        },
        {
          label: '时间范围',
          name: 'timePickerRange',
          type: 'timePickerRange',
          typeProps: {
            hourStep: 2,
            minuteStep: 5,
            secondStep: 10,
          }
        },
        {
          label: '城市',
          name: 'city',
          type: 'select',
          dataSource: [
            { value: "10001", label: "React" },
            { value: 10002, label: "Vue" },
          ],
          typeProps: {
            hasClear: true
          }
        },
        {
          label: '日期',
          name: 'date',
          type: 'date',
          typeProps: {
            disabledDate
          }
        },
        {
          label: '日期范围',
          name: 'daterange',
          type: 'dateRange',
          typeProps: {
            disabledDate
          }
        },
        {
          label: '数量',
          name: 'num',
          type: 'numberPicker',
        },
        {
          label: '备注',
          name: 'remark',
        },
      ]} />
    </div>
  );
}

ReactDOM.render((
  <App />
), mountNode);
```

```css

.form-container {
  width: 600px;
}

```