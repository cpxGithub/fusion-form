---
title: 动态表单设置默认值
order: 22
description: {date: '2023-6-7'}
---

使用value属性设置，动态表单设置默认值

```jsx
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Form from 'banma-fusion-form';
import '@alifd/theme-3/variables.css';
import '@alifd/theme-3/dist/next.css';

const App = () => {
  const [data, setData] = useState({});

  const submit = (value, errors) => {
    if (!errors) {
      console.log('submit', value);
    }
  };
  const renderBtn = () => {
    return (
      <Form.Submit
        type='primary'
        validate
        onClick={submit}
      >
        Submit
      </Form.Submit>
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
      <Form parseName value={data} items={items} />
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