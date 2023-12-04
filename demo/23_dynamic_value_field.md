---
title: 动态表单Field
order: 23
description: {date: '2023-6-7'}
---

动态表单Field

```jsx
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Field, Button } from '@alifd/next';
import Form from '@ali/banma-fusion-form';
import '@alifd/theme-3/variables.css';
import '@alifd/theme-3/dist/next.css';

const App = () => {
  const field = Field.useField({
    parseName: true,
  });
  const [data, setData] = useState({});
  
  const submit = () => {
    const { validate } = field;
    validate((errors, values) => {
      console.log('动态表单Field', values);
    });
  };
  const renderBtn = () => {
    return (
      <Button
        type='primary'
        onClick={submit}
      >
        Submit
      </Button>
    ); 
  };
  const items = [
    {
      label: '姓名',
      name: 'userName',
    },
    {
      label: '屏幕信息',
      name: 'dataList',
      dynamic: true,
      items: [
        {
          label: '位置',
          name: 'local',
          required: true,
        },
        {
          label: '宽度',
          name: 'width',
          required: true,
        },
        {
          label: '高度',
          name: 'height',
          required: true,
        },
      ]
    },
    {
      label: '范围',
      name: 'timePicker',
    },
    {
      label: ' ',
      children: renderBtn(),
    }
  ];

  useEffect(() => {
    setTimeout(() => {
      setData({
        userName: '张三',
        dataList: [
          {
            local: '地点',
            width: '30',
            height: '100',
          },
          {
            local: '地点1',
            width: '50',
            height: '100',
          },
          {
            local: '地点2',
            width: '300',
            height: '100',
          }
        ],
        timePicker: '2021-01-12',
      });
    }, 100);
  }, []);
  return (
    <div className="form-container">
      <Form field={field} value={data} items={items} />
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