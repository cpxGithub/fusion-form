---
title: 禁用dataSource项
order: 10
description: {date: '2023-4-12'}
---

type=select、checkbox、radio时，使用disabled属性实现禁用

```jsx
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Form from '@ali/banma-fusion-form';
import '@alifd/theme-3/variables.css';
import '@alifd/theme-3/dist/next.css';

const App = () => {
  const [cityList, setCityList] = useState([]);
  const [tenantList, setTenantList] = useState([]);
  const [disabled, setDisabled] = useState(false);

  const handleTenantChange = (value) => {
    console.log('租户', value);
  };
  const formChange = (value) => {
    console.log('formChange', value);
  };

  useEffect(() => {
    setTimeout(() => {
      setCityList([
        {
          label: '广州',
          value: '01',
        },
        {
          label: '杭州',
          value: '02',
        },
        {
          label: '深圳',
          value: '03',
        },
        {
          label: '北京',
          value: '04',
          disabled: true,
        },
      ]);
      setTenantList([
        {
          tenantCode: '1',
          tenantName: 'React',
        },
        {
          tenantCode: '2',
          tenantName: 'Vue',
        },
        {
          tenantCode: '3',
          tenantName: 'Angular',
        },
      ]);
      setDisabled(true);
    }, 1000);
  }, []);
  return (
    <div className="form-container">
      <Form
        onChange={formChange}
        items={[
          {
            label: 'Radio',
            name: 'radio',
            type: 'radio',
            dataSource: [
              { value: 10001, label: "React" },
              { value: 10002, label: "Vue", disabled },
            ]
          },
          {
            label: 'Checkox',
            name: 'checkox',
            type: 'checkox',
            dataSource: [
              { value: 10001, label: "React" },
              { value: 10002, label: "Vue", disabled },
            ]
          },
          {
            label: '自定义key',
            name: 'custom',
            type: 'checkox',
            labelKey: 'name',
            valueKey: 'code',
            dataSource: [
              { code: 100, name: "城市" },
              { code: 10002, name: "国家" },
              { code: 10003, name: "地区" },
            ]
          },
          {
            label: '状态',
            name: 'status',
            type: 'select',
            dataSource: [
              {
                label: '启用',
                value: 'start',
              },
              {
                label: '禁用',
                value: 'disabled',
              },
            ]
          },
          {
            label: '城市',
            name: 'city',
            type: 'select',
            dataSource: cityList,
          },
          {
            label: '租户',
            name: 'tenantCode',
            type: 'select',
            labelKey: 'tenantName',
            valueKey: 'tenantCode',
            dataSource: tenantList,
            onChange: handleTenantChange
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