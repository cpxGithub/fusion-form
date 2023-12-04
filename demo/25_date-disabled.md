---
title: 日期时间禁用
order: 25
description: {date: '2023-7-24'}
---

设置minDate，maxDate属性设置日期时间禁用范围，判断逻辑value < minDate || value > maxDate

```jsx
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Icon, Form } from '@alifd/next';
import dayjs from 'dayjs';
import BanmaForm from 'banma-fusion-form';
import '@alifd/theme-3/variables.css';
import '@alifd/theme-3/dist/next.css';

const currentDate = dayjs();
const items = [
  {
    label: '最小日期',
    name: 'minDate',
    type: 'date',
    minDate: currentDate,
    maxDate: dayjs(currentDate.valueOf() + 7 * 24 * 3600 * 1000)
  },
  {
    label: '最大日期',
    name: 'maxDate',
    type: 'date',
    maxDate: currentDate,
  },
  {
    label: '日期',
    name: 'date',
    type: 'date',
    showTime: true,
    maxDate: currentDate,
  },
  {
    label: '日期范围',
    name: 'daterange',
    type: 'dateRange',
    minDate: dayjs(currentDate.format('YYYY-MM-DD')),
    maxDate: dayjs(currentDate.valueOf() + 30 * 24 * 3600 * 1000)
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