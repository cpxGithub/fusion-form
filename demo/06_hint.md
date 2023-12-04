---
title: 表单项提示信息
order: 6
description: {date: '2023-4-12'}
---

使用hint属性设置表单项提示信息，使用气泡组件提示

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Icon, Button } from '@alifd/next';
import Form from 'banma-fusion-form';
import '@alifd/theme-3/variables.css';
import '@alifd/theme-3/dist/next.css';

const App = () => {
  return (
    <div className="form-container">
      <Form
        items={[
          {
            label: '姓名',
            name: 'name',
            hint: '请输入你的名字，不要输入错误'
          },
          {
            label: '提示信息',
            name: 'hint',
            hint: <div>文案说明，提示信息，查看更多信息请点击<Button text type="primary">更多信息</Button><Icon type="smile" /></div>
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