---
title: 基本使用
order: 0
description: {date: '2023-4-11'}
---

基本使用

```jsx
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Form from '@ali/banma-fusion-form';
import '@alifd/theme-3/variables.css';
import '@alifd/theme-3/dist/next.css';

const FormItems = Form.Items;

const App = () => {
  const submit = (values) => {
    console.log('values', values);
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
  const items = [
    {
      label: '开关',
      name: 'isOpen',
      type: 'switch',
    },
    {
      label: '姓名',
      name: 'name',
    },
    {
      label: '密码',
      name: 'password',
      type: 'password',
    },
    {
      label: 'Radio',
      name: 'radio',
      type: 'radio',
      dataSource: [
        { value: "10001", label: "React" },
        { value: 10002, label: "Vue" },
      ]
    },
    {
      label: 'Checkox',
      name: 'checkox',
      type: 'checkox',
      dataSource: [
        { value: "10001", label: "React" },
        { value: 10002, label: "Vue" },
      ]
    },
    {
      label: '时间',
      name: 'timePicker',
      type: 'timePicker',
    },
    {
      label: '时间范围',
      name: 'timePickerRange',
      type: 'timePickerRange',
    },
    {
      label: '城市',
      name: 'city',
      type: 'select',
      showSearch: true,
      dataSource: [
        { value: "10001", label: "React" },
        { value: 10002, label: "Vue" },
      ],
    },
    {
      label: '订单名称状态',
      name: 'status',
    },
    {
      label: '日期',
      name: 'date',
      type: 'date',
    },
    {
      label: '日期范围',
      name: 'daterange',
      type: 'dateRange',
    },
    {
      label: '详细地址',
      name: 'address',
    },
    {
      label: '数量',
      name: 'num',
      type: 'numberPicker',
    },
    {
      label: '备注',
      name: 'remark',
    },
    {
      label: ' ',
      children: renderBtn(),
    }
  ];
  return (
    <div className="form-container">
      <Form items={items} />
      <div style={{ margin: '20px 0', background: '#eee', padding: '6px' }}>方式二</div>
      <Form>
        <FormItems items={items} />
      </Form>
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