---
title: 表单项后面自定义内容
order: 7
description: {date: '2023-4-12'}
---

表单项后面添加自定义内容

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Icon, Button, Box } from '@alifd/next';
import Form from 'banma-fusion-form';
import '@alifd/theme-3/variables.css';
import '@alifd/theme-3/dist/next.css';

const render = () => {
  return (
    <Box direction="row" spacing={[0, 8, 0, 0]}>
      <Button text type="primary">更多信息</Button>
      <Button text type="primary">查看</Button>
      <Button text type="primary">设置</Button>
    </Box>
  );
};
const App = () => {
  return (
    <div className="form-container">
      <Form
        items={[
          {
            label: '姓名',
            name: 'name',
            hint: '请输入你的名字，不要输入错误',
            addonAfter: <Button text type="primary">更多信息</Button>
          },
          {
            label: '提示信息',
            name: 'hint',
            addonAfter: <Button text type="primary">查看</Button>,
          },
          {
            label: '订单',
            name: 'order',
            addonAfter: render(),
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