---
title: 日期时间选择
order: 1
description: {date: '2023-4-11'}
---

如果需要同时选择时间，可以通过 showTime 属性开启

```jsx
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Icon, Form } from '@alifd/next';
import BanmaForm from 'banma-fusion-form';
import '@alifd/theme-3/variables.css';
import '@alifd/theme-3/dist/next.css';

const items = [
  {
    label: '日期',
    name: 'date',
    type: 'date',
    showTime: true,
  },
  {
    label: '日期范围',
    name: 'daterange',
    type: 'dateRange',
    showTime: true,
  },
];

const App = () => {
  return (
    <div className="form-container">
      <BanmaForm items={items} />
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