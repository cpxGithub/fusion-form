---
title: 预览
order: 16
description: {date: '2023-4-13'}
---

预览

```jsx
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Form from 'banma-fusion-form';
import '@alifd/theme-3/variables.css';
import '@alifd/theme-3/dist/next.css';

const App = () => {
  const [data, setData] = useState({});
  const [preview, setPreview] = useState(false);
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
    }, 500);
  }, []);

  return (
    <div className="form-container">
      <Form
        value={data}
        isPreview={preview}
        items={[
          {
            label: '预览',
            name: 'isOpen',
            type: 'switch',
            isPreview: false,
            value: preview,
            onChange: (value) => setPreview(value),
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
      <div style={{ margin: '30px 0', background: '#eee', padding: '6px' }}>设置单项预览</div>
      <Form
        value={data}
        items={[
          {
            label: '姓名',
            name: 'name',
            isPreview: true,
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
            isPreview: true,
            dataSource: [
              { value: 10001, label: "Lucy King" },
              { value: 10002, label: "Lily King" },
              { value: 10003, label: "Tom Cat" },
            ]
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

```css

.form-container {
  width: 600px;
}
```