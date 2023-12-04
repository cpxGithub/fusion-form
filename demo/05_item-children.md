---
title: 自定义表单内容
order: 5
description: {date: '2023-4-12'}
---

如果需要自定义表单内容，使用children属性

```jsx
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Rating, Upload, Button } from '@alifd/next';
import Form from 'banma-fusion-form';

import '@alifd/theme-3/variables.css';
import '@alifd/theme-3/dist/next.var.css';

const upload = (
  <Upload action="/upload.do" listType="text">
    <Button type="primary" style={{ margin: "0 0 10px" }}>
      Upload
    </Button>
  </Upload>
);
const App = () => {
  const [data, setData] = useState({});
  const submit = (value) => {
    console.log('submit', value);
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
  useEffect(() => {
    setTimeout(() => {
      setData({
        isOpen: true,
        name: '孙悟空',
        radio: 'React',
        checkox: ['Vue'],
        city: 10002,
        rate: 4.5,
        date: '2021-01-12',
        daterange: ['2023-01-12', '2023-01-22'],
        timerange: ['2023-01-12 10:23:15', '2023-01-22 22:00:00'],
        num: 1002,
        remark: 'textArea',
      });
    }, 1000);
  }, []);

  return (
    <div>
      <Form
        value={data}
        items={[
          {
            label: '开关',
            name: 'isOpen',
            type: 'switch',
          },
          {
            label: '自定义展示',
            name: 'rate',
            children: <Rating />,
          },
          {
            label: '姓名',
            name: 'name',
          },
          {
            label: 'Radio',
            name: 'radio',
            type: 'radio',
            dataSource: [
              { value: 'React', label: 'React' },
              { value: 'Vue', label: 'Vue' },
            ]
          },
          {
            label: '上传',
            name: 'upload',
            children: upload,
          },
          {
            label: 'Checkox',
            name: 'checkox',
            type: 'checkox',
            dataSource: [
              { value: 'React', label: 'React' },
              { value: 'Vue', label: 'Vue' },
            ]
          },
          {
            label: '城市',
            name: 'city',
            type: 'select',
            placeholder: '请选择城市',
            dataSource: [
              { value: 10001, label: 'Lucy King' },
              { value: 10002, label: 'Lily King' },
              { value: 10003, label: 'Tom Cat' },
            ]
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
            label: '日期时间范围',
            name: 'timerange',
            type: 'dateRange',
            showTime: true,
          },
          {
            label: '数量',
            name: 'num',
            type: 'numberPicker',
          },
          {
            label: '备注',
            name: 'remark',
            type: 'textArea',
          },
          {
            label: ' ',
            children: renderBtn
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