---
title: 设置一行列数
order: 13
description: {date: '2023-4-12'}
---

设置表单属性columns实现一行展示多少列，设置gutter控制列间隔，默认columns=1，gutter=0

```jsx
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Form from '@ali/banma-fusion-form';
import '@alifd/theme-3/variables.css';
import '@alifd/theme-3/dist/next.css';

const App = () => {
  return (
    <div>
      <Form
        columns={4}
        gutter={8}
        items={[
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
        ]}
      />
      <div style={{ marginTop: '30px', background: '#eee', padding: '6px' }}>一行三列</div>
      <Form
        style={{ marginTop: '30px' }}
        columns={3}
        gutter={8}
        items={[
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
        ]}
      />
      <div style={{ marginTop: '30px', background: '#eee', padding: '6px' }}>使用singleLine属性设置单项单独一行展示</div>
      <Form
        style={{ marginTop: '30px' }}
        columns={3}
        gutter={8}
        items={[
          {
            label: '姓名',
            name: 'name',
            singleLine: true,
            items: [
              {
                name: 'firstName',
                span: 8,
                type: 'select',
              },
              {
                name: 'lastName',
              },
            ]
          },
          {
            label: '密码',
            name: 'password',
            type: 'password',
            span: 16,
            singleLine: true,
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
        ]}
      />
    </div>
  );
}

ReactDOM.render((
  <App />
), mountNode);
```
