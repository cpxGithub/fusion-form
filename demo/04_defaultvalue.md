---
title: 设置默认值
order: 4
description: {date: '2023-4-12'}
---

设置默认值

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import Form from 'banma-fusion-form';
import '@alifd/theme-3/variables.css';
import '@alifd/theme-3/dist/next.css';

const App = () => {
  return (
    <div>
      <Form
        items={[
          {
            label: '开关',
            name: 'isOpen',
            type: 'switch',
            defaultValue: true,
          },
          {
            label: '姓名',
            name: 'name',
            defaultValue: '姓名'
          },
          {
            label: 'Radio',
            name: 'radio',
            type: 'radio',
            defaultValue: '10001',
            dataSource: [
              { value: "10001", label: "React" },
              { value: 10002, label: "Vue" },
            ]
          },
          {
            label: 'Checkox',
            name: 'checkox',
            type: 'checkox',
            defaultValue: ['10001', 10002],
            dataSource: [
              { value: "10001", label: "React" },
              { value: 10002, label: "Vue" },
            ]
          },
          {
            label: '城市',
            name: 'city',
            type: 'select',
            placeholder: '请选择城市',
            defaultValue: '10001',
            dataSource: [
              { value: "10001", label: "Lucy King" },
              { value: 10002, label: "Lily King" },
              { value: 10003, label: "Tom Cat", disabled: true },
            ]
          },
          {
            label: '日期',
            name: 'date',
            type: 'date',
            defaultValue: '2021-01-12',
          },
          {
            label: '日期范围',
            name: 'daterange',
            type: 'dateRange',
            defaultValue: ['2023-01-12', '2023-01-22'],
          },
          {
            label: '日期时间范围',
            name: 'timerange',
            type: 'dateRange',
            showTime: true,
            defaultValue: ['2023-01-12 10:23:15', '2023-01-22 22:00:00'],
          },
          {
            label: '数量',
            name: 'num',
            type: 'numberPicker',
            defaultValue: 100,
          },
          {
            label: '备注',
            name: 'remark',
            type: 'textArea',
            defaultValue: 'textArea',
          },
        ]}
      />
    </div>
  );
}

ReactDOM.render((
  <App />
), mountNode);
```