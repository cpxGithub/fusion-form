---
title: 使用field
order: 15
description: {date: '2023-4-12'}
---

配合 Field 可以实现较复杂功能

```jsx
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Field, Button } from '@alifd/next';
import Form from 'banma-fusion-form';
import '@alifd/theme-3/variables.css';
import '@alifd/theme-3/dist/next.css';

const App = () => {
  const field = Field.useField();
  const checkPass = (rule, value, callback) => {
    const { validate } = field;
    if (value) {
      validate(['rePasswd']);
    }
    callback();
  };
  const checkPass2 = (rule, value, callback) => {
    const { getValue } = field;
    if (value && value !== getValue('passwd')) {
      return callback('Inconsistent password input twice!');
    } else {
      return callback();
    }
  };
  const validate = () => {
    field.validate((errors, values) => submit(values, errors));
  };
  const submit = (value, error) => {
    console.log('submit', value, error);
  };
  const renderBtn = () => {
    return (
      <>
        <Button type="primary" onClick={validate}>Validate by Field</Button>
        <Form.Submit
          style={{ marginLeft: '10px' }}
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
        field={field}
        items={[
          {
            label: '姓名',
            name: 'name',
            required: true,
            hasFeedback: true,
          },
          {
            label: '密码',
            name: 'passwd',
            type: 'password',
            required: true,
            hasFeedback: true,
            validator: checkPass,
          },
          {
            label: '密码',
            name: 'rePasswd',
            type: 'password',
            required: true,
            hasFeedback: true,
            validator: checkPass2,
          },
          {
            label: '性别',
            name: 'sex',
            type: 'radio',
            required: true,
            defaultValue: 'male',
            dataSource: [
              {
                label: '男',
                value: 'male',
              },
              {
                label: '女',
                value: 'female',
              },
            ],
          },
          {
            label: '电话',
            name: 'telNo',
            required: true,
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