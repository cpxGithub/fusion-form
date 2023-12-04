---
title: 设置当前值(受控)
order: 3
description: {date: '2023-4-12'}
---

使用value、onChange设置当前值

```jsx
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Form from '@ali/banma-fusion-form';
import '@alifd/theme-3/variables.css';
import '@alifd/theme-3/dist/next.css';

const App = () => {
  const [data, setData] = useState({});
  const handleChange = (key, value) => {
    setData((preState) => ({
      ...preState,
      [key]: value
    }));
  };
  useEffect(() => {
    setTimeout(() => {
      setData({
        name: '孙悟空',
        checkox: ['10001', 10002],
        city: 10002,
      });
    }, 1000);
  }, []);
  return (
    <div>
      <Form
        items={[
          {
            label: '姓名',
            name: 'name',
            value: data.name,
            onChange: (value) => handleChange('name', value)
          },
          {
            label: 'Checkox',
            name: 'checkox',
            type: 'checkox',
            value: data.checkox,
            dataSource: [
              { value: "10001", label: "React" },
              { value: 10002, label: "Vue" },
            ],
            onChange: (value) => handleChange('checkox', value)
          },
          {
            label: '城市',
            name: 'city',
            type: 'select',
            placeholder: '请选择城市',
            value: data.city,
            dataSource: [
              { value: 10001, label: "Lucy King" },
              { value: 10002, label: "Lily King" },
              { value: 10003, label: "Tom Cat" },
            ],
            onChange: (value) => handleChange('city', value)
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