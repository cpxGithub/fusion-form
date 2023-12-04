---
title: 动态表单预览
order: 24
description: {date: '2023-6-7'}
---

使用isPreview属性设置，设置表单预览状态

```jsx
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Form from '@ali/banma-fusion-form';
import '@alifd/theme-3/variables.css';
import '@alifd/theme-3/dist/next.css';

const App = () => {
  const [preview, setPreview] = useState(false);
  const [data, setData] = useState({});
  const validator = (rule, value, callback) => {
    if (!value) {
      callback('必填');
    } else {
      callback();
    }
  };

  const submit = (value, errors) => {
    if (!errors) {
      console.log('submit', value);
    }
  };
  const renderBtn = () => {
    return (
      preview ? null :
      <Form.Submit
        type='primary'
        validate
        onClick={submit}
      >
        Submit
      </Form.Submit>
    ); 
  };
  const items = [
    {
      label: '预览',
      name: 'isOpen',
      type: 'switch',
      isPreview: false,
      value: preview,
      onChange: (value) => setPreview(value),
    },
    {
      label: '姓名',
      name: 'userName',
    },
    {
      label: '屏幕信息',
      name: 'dataList',
      dynamic: true,
      items: [
        {
          label: '位置',
          name: 'local',
          required: true,
        },
        {
          label: '宽度',
          name: 'width',
          required: true,
        },
        {
          label: '高度',
          name: 'height',
          required: true,
        },
      ]
    },
    {
      label: '范围',
      name: 'timePicker',
    },
    {
      label: ' ',
      name: 'button',
      children: renderBtn(),
    }
  ];

  useEffect(() => {
    setTimeout(() => {
      setData({
        userName: '张三',
        dataList: [
          {
            local: '地点',
            width: '30',
            height: '100',
          },
          {
            local: '地点1',
            width: '50',
            height: '100',
          },
          {
            local: '地点2',
            width: '300',
            height: '100',
          }
        ],
        timePicker: '2021-01-12',
      });
    }, 200);
  }, []);
  return (
    <div className="form-container">
      <Form
        parseName
        isPreview={preview}
        value={data}
        items={items}
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