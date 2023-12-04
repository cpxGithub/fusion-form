---
title: 设置表单value
order: 2
description: {date: '2023-4-12'}
---

表单数值

```jsx
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Form from 'banma-fusion-form';
import '@alifd/theme-3/variables.css';
import '@alifd/theme-3/dist/next.css';

const App = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    setTimeout(() => {
      setData({
        isOpen: true,
        name: '孙悟空',
        radio: '10001',
        checkox: ['10001'],
        city: 10002,
        date: '2021-01-12',
        daterange: ['2023-01-12', '2023-01-22'],
        timerange: ['2023-01-12 10:23:15', '2023-01-22 22:00:00'],
        num: 1002,
        remark: 'textArea',
      });
    }, 2000);
  }, []);

  return (
    <div>
      <Form
        value={data}
        items={[
          {
            label: '开关',
            name: 'isOpen',
            type: 'switch',
          },
          {
            label: '姓名',
            name: 'name',
          },
          {
            label: 'Radio',
            name: 'radio',
            type: 'radio',
            dataSource: [
              { value: "10001", label: "React" },
              { value: 10002, label: "Vue" },
            ]
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
            label: '城市',
            name: 'city',
            type: 'select',
            placeholder: '请选择城市',
            dataSource: [
              { value: 10001, label: "Lucy King" },
              { value: 10002, label: "Lily King" },
              { value: 10003, label: "Tom Cat" },
            ]
          },
          {
            label: '日期',
            name: 'date',
            type: 'date',
          },
          {
            label: '日期范围',
            name: 'daterange',
            type: 'dateRange',
          },
          {
            label: '日期时间范围',
            name: 'timerange',
            type: 'dateRange',
            showTime: true,
          },
          {
            label: '数量',
            name: 'num',
            type: 'numberPicker',
          },
          {
            label: '备注',
            name: 'remark',
            type: 'textArea',
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