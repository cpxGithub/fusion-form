---
title: select多选
order: 11
description: {date: '2023-4-12'}
---

mode="multiple"时select多选

```jsx
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Form from 'banma-fusion-form';
import '@alifd/theme-3/variables.css';
import '@alifd/theme-3/dist/next.css';

const App = () => {
  const [cityList, setCityList] = useState([]);
  const [tenantList, setTenantList] = useState([]);

  const handleTenantChange = (value) => {
    console.log('租户', value);
  };
  const formChange = (value) => {
    console.log('formChange', value);
  };

  useEffect(() => {
    setTimeout(() => {
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
    }, 1000);
  }, []);
  return (
    <div className="form-container">
      <Form
        onChange={formChange}
        items={[
          {
            label: '城市',
            name: 'city',
            type: 'select',
            mode: 'multiple',
            dataSource: [
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
              },
            ],
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