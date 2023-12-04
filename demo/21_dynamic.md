---
title: 动态表单
order: 21
description: {date: '2023-6-7'}
---

表单项中存在items属性且设置dynamic=true渲染动态表单

**注意点**

* 设置dynamic=true的表单项中的name为列表数据的key
* 没有传入filed属性，必须设置parseName属性等于true
* 传入filed属性，parseName属性必须要设置为true
```
Field.useField({
    parseName: true,
});
```

**例**

```
表单项设置如下
const items = [
  {
    label: '屏幕信息',
    name: 'dataList',
    dynamic: true,
    items: [
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
    ],
  },
]
输出：{dataList: [{width: 'xx', height: 'xx'}]}
```

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import Form from '@ali/banma-fusion-form';
import '@alifd/theme-3/variables.css';
import '@alifd/theme-3/dist/next.css';

const App = () => {
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
      name: 'userName',
    },
    {
      label: '屏幕信息',
      name: 'dataList',
      dynamic: true,
      items: [
        {
          label: '类型',
          name: 'local',
          type: 'select',
          dataSource: [
            {
              label: '大屏',
              value: 'big',
            },
            {
              label: '小屏',
              value: 'small',
            },
          ],
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
      ],
    },
    {
      label: '公司信息',
      name: 'companyList',
      dynamic: true,
      items: [
        {
          label: '地址',
          name: 'local',
        },
        {
          label: '法人代表',
          name: 'user',
          required: true,
        },
      ],
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
  const labelCol = {
    fixedSpan: 3,
  };
  const items1 = [
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
          label: '类型',
          name: 'local',
          type: 'select',
          labelCol,
          dataSource: [
            {
              label: '大屏',
              value: 'big',
            },
            {
              label: '小屏',
              value: 'small',
            },
          ],
          required: true,
        },
        {
          label: '宽度',
          name: 'width',
          labelCol,
          required: true,
        },
        {
          label: '高度',
          name: 'height',
          labelCol,
          required: true,
        },
      ],
    },
    {
      label: '公司信息',
      name: 'companyList',
      dynamic: true,
      items: [
        {
          label: '地址',
          name: 'local',
        },
        {
          label: '法人代表',
          name: 'user',
          required: true,
        },
      ],
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

  return (
    <div className="form-container">
      <Form parseName items={items} />
      <div style={{ margin: '20px 0', background: '#eee', padding: '6px' }}>使用labelCol属性设置label宽度</div>
      <Form parseName items={items1} />
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