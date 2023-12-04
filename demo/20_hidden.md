---
title: hidden
order: 20
description: {date: '2023-5-24'}
---

设置hidden属性，隐藏单个表单项

```jsx
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Form from 'banma-fusion-form';
import '@alifd/theme-3/variables.css';
import '@alifd/theme-3/dist/next.css';

const App = () => {
  const [type, setType] = useState();
  const getType = (value) => {
    setType(value);
  };
  const submit = (value) => {
    console.log('submit', value);
  };
  const renderBtn = () => {
    return (
      <Form.Submit
        type='primary'
        onClick={submit}
      >
        Submit
      </Form.Submit>
    ); 
  };
  const items = [
    {
      label: '类型',
      name: 'type',
      type: 'radio',
      onChange: getType,
      dataSource: [
        {
          label: 'vue',
          value: 'vue',
        },
        {
          label: 'react',
          value: 'react',
        },
        {
          label: 'angular',
          value: 'angular',
        },
      ]
    },
    {
      label: '性别',
      name: 'sex',
      hidden: () => type === 'vue',
    },
    {
      label: '范围',
      name: 'range',
      hidden: () => type === 'react',
    },
    {
      label: ' ',
      children: renderBtn(),
    }
  ];

  return (
    <div className="form-container">
      <Form items={items} />
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