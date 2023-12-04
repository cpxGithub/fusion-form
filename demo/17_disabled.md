---
title: 禁用表单/表单项
order: 17
description: {date: '2023-4-13'}
---

禁用表单/表单项

```jsx
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Form from 'banma-fusion-form';
import '@alifd/theme-3/variables.css';
import '@alifd/theme-3/dist/next.css';

const App = () => {
  const [data, setData] = useState({});
  const [value, setValue] = useState();
  const [disabled, setDisable] = useState();
  useEffect(() => {
    setTimeout(() => {
      setData({
        name: '孙悟空',
        radio: '10001',
        checkox: ['10001'],
        city: '10002',
        date: '2021-01-12',
        daterange: ['2023-01-12', '2023-01-22'],
      });
    }, 500);
  }, []);

  return (
    <div className="form-container">
      <Form
        value={data}
        disabled={disabled}
        items={[
          {
            label: '禁用',
            name: 'isOpen',
            type: 'switch',
            disabled: false,
            value: disabled,
            onChange: (value) => setDisable(value),
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
              { value: '10002', label: "Vue" },
            ],
          },
          {
            label: 'Checkox',
            name: 'checkox',
            type: 'checkox',
            dataSource: [
              { value: "10001", label: "React" },
              { value: '10002', label: "Vue" },
            ]
          },
          {
            label: '城市',
            name: 'city',
            type: 'select',
            placeholder: '请选择城市',
            disabled: disabled,
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
        ]}
      />
      <div style={{ margin: '30px 0', background: '#eee', padding: '6px' }}>单项禁用</div>
      <Form
        value={data}
        items={[
          {
            label: '姓名',
            name: 'name',
            disabled: true,
          },
          {
            label: 'Radio',
            name: 'radio',
            type: 'radio',
            dataSource: [
              { value: "10001", label: "React" },
              { value: '10002', label: "Vue" },
            ],
            onChange: setValue
          },
          {
            label: 'Checkox',
            name: 'checkox',
            type: 'checkox',
            dataSource: [
              { value: "10001", label: "React" },
              { value: '10002', label: "Vue" },
            ]
          },
          {
            label: '城市',
            name: 'city',
            type: 'select',
            placeholder: '请选择城市',
            disabled: value === '10002',
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
        ]}
      />
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