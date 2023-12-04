---
title: 校验
order: 14
description: {date: '2023-4-12'}
---

参考<a href="https://done.alibaba-inc.com/dsm/85526/components/detail/form?themeid=44903&tabActiveKey=component#Form%20Item" target="_blank">Fusion Form.Item</a>设置表单校验

```jsx
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Form from '@ali/banma-fusion-form';
import '@alifd/theme-3/variables.css';
import '@alifd/theme-3/dist/next.css';

const App = () => {
  const checkOrderStatus = (rule, value, callback) => {
    if (value === '1') {
      return callback('填错了');
    }
    callback();
  };
  const submit = (value, error) => {
    console.log('submit', value, error);
  };
  const renderBtn = () => {
    return (
      <>
        <Form.Submit
          validate
          type='primary'
          onClick={submit}
        >
          Submit
        </Form.Submit>
        <Form.Reset style={{ marginLeft: '10px' }}>Reset</Form.Reset>
      </>
    ); 
  };
  return (
    <div className="form-container">
      <Form
        items={[
          {
            label: '姓名',
            name: 'name',
            required: true,
          },
          {
            label: '邮箱',
            name: 'email',
            required: true,
            format: 'email',
          },
          {
            label: '电话',
            name: 'telNo',
            required: true,
            format: 'tel',
          },
          {
            label: '时间',
            name: 'timePicker',
            type: 'timePicker',
            required: true,
          },
          {
            label: '时间范围',
            name: 'timePickerRange',
            type: 'timePickerRange',
            required: true,
          },
          {
            label: '城市',
            name: 'city',
            type: 'select',
            required: true,
            dataSource: [
              { value: "10001", label: "React" },
              { value: 10002, label: "Vue" },
            ],
          },
          {
            label: '订单状态',
            name: 'status',
            required: true,
            requiredMessage: '必填',
            validator: checkOrderStatus
          },
          {
            label: '备注',
            name: 'remark',
          },
          {
            label: ' ',
            children: renderBtn(),
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
```css

.form-container {
  width: 600px;
}
```