---
title: 响应式布局
order: 18
description: {date: '2023-4-12'}
---

响应式布局，设置属性columns = {span: 3, xl: 4}实现大于1500px一行4列，小于1500px一行3列

```jsx
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Form from 'banma-fusion-form';
import '@alifd/theme-3/variables.css';
import '@alifd/theme-3/dist/next.css';

const App = () => {
  return (
    <div>
      <Form
        gutter={6}
        columns={{
          span: 3,
          xl: 4,
        }}
        items={[
          {
            label: '姓名',
            name: 'name',
          },
          {
            label: '订单',
            name: 'order',
          },
          {
            label: '状态',
            name: 'status',
            type: 'select',
            dataSource: [
              { value: 1, label: "成功" },
              { value: 2, label: "失败" },
            ],
          },
          {
            label: '产品名称',
            name: 'productName',
          },
          {
            label: '日期范围',
            name: 'daterange',
            type: 'dateRange',
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
            ],
          }
        ]}
      />
    </div>
  );
}

ReactDOM.render((
  <App />
), mountNode);
```