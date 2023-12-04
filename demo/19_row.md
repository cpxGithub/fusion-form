---
title: 表单项中多个元素
order: 19
description: {date: '2023-4-11'}
---

表单项中存在items属性，渲染多个，宽度默认均分，间隔默认8px，使用span设置宽度（使用方式同Col span），使用gutter设置间隔，设置showSeparator=true添加间隔符

```jsx
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Form from 'banma-fusion-form';
import '@alifd/theme-3/variables.css';
import '@alifd/theme-3/dist/next.css';

const App = () => {
  const [preview, setPreview] = useState(false);
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
      label: '姓名',
      name: 'name',
      items: [
        {
          name: 'firstName',
          showSeparator: true,
        },
        {
          name: 'lastName',
        },
      ]
    },
    {
      label: '范围',
      name: 'timePicker',
    },
    {
      label: ' ',
      children: renderBtn(),
    }
  ];
  const items1 = [
    {
      label: '姓名',
      items: [
        {
          span: 16,
          name: 'firstName',
        },
        {
          name: 'lastName',
        },
      ]
    },
    {
      label: '范围',
      items: [
        {
          name: 'first',
        },
        {
          name: 'second',
        },
        {
          name: 'last',
        },
      ]
    },
    {
      label: ' ',
      children: renderBtn(),
    }
  ];
  const items2 = [
    {
      label: '姓名',
      name: 'name',
      asterisk: true,
      items: [
        {
          name: 'firstName',
          showSeparator: true,
          required: true,
          requiredMessage: '必填',
        },
        {
          name: 'lastName',
          required: true,
          requiredMessage: '必填',
        },
      ]
    },
    {
      label: '范围',
      name: 'range',
      asterisk: true,
      items: [
        {
          name: 'start',
          showSeparator: true,
          validator,
        },
        {
          name: 'end',
          validator,
        },
      ]
    },
    {
      label: ' ',
      children: renderBtn(),
    }
  ];
  return (
    <div className="form-container">
      <Form items={items} />
      <div style={{ margin: '20px 0', background: '#eee', padding: '6px' }}>设置表单宽度</div>
      <Form items={items1} />
      <div style={{ margin: '20px 0', background: '#eee', padding: '6px' }}>设置间隔、间隔符</div>
      <Form items={[
        {
          label: '姓名',
          gutter: 20,
          items: [
            {
              name: 'firstName',
              showSeparator: true,
            },
            {
              name: 'lastName',
            },
          ]
        },
        {
          label: '范围',
          name: 'timePicker',
        },
      ]}/>
      <div style={{ margin: '20px 0', background: '#eee', padding: '6px' }}>设预览</div>
      <Form
        isPreview={preview}
        items={[
          {
            label: '预览',
            name: 'isOpen',
            type: 'switch',
            isPreview: false,
            value: preview,
            onChange: (value) => setPreview(value),
          },
          {
            items: [
              {
                label: '姓',
                name: 'firstName',
                defaultValue: '张三',
              },
              {
                label: '名',
                name: 'lastName',
                defaultValue: '李四',
              },
            ]
          },
          {
            label: '范围',
            name: 'timePicker',
            defaultValue: '范围范围范围范围范围范围',
          },
        ]}
      />
      <div style={{ margin: '20px 0', background: '#eee', padding: '6px' }}>校验</div>
      <Form items={items2} />
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