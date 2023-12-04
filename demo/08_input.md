---
title: Input前后缀
order: 8
description: {date: '2023-4-12'}
---

Input前后缀

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Icon } from '@alifd/next';
import Form from 'banma-fusion-form';
import '@alifd/theme-3/variables.css';
import '@alifd/theme-3/dist/next.css';

const App = () => {
  return (
    <div className="form-container">
      <Form
        items={[
          {
            label: '搜索',
            name: 'search',
            innerBefore: <Icon type="search" />
          },
          {
            label: '金额',
            name: 'money',
            innerAfter: '¥',
          },
          {
            label: '说明',
            name: 'remark',
            innerAfter: <Icon type="smile" />,
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