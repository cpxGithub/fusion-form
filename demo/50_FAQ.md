---
title: FAQ
order: 50
description: {date: '2023-7-20'}
---
1.  如何设置label宽度

label宽度设置通过属性labelCol设置，默认设置{fixedSpan: 5}，如果设置在Form组件上所有表单项生效，若只需要设置单个表单项在items中设置labelCol属性即可，具体使用参考<a href="https://done.alibaba-inc.com/dsm/85526/components/detail/form?themeid=44903&tabActiveKey=component#Form%20Item" target="_blank">Fusion Form labelCol</a>设置

2. 设置表单项宽度

表单项宽度默认与父级元素等宽，如需要设置单项表单宽度可通过span设置宽度，span设置参考<a href="https://done.alibaba-inc.com/dsm/85526/components/detail/grid?themeid=44903&tabActiveKey=component#Grid%20Col" target="_blank">Grid.Col</a>

3. Typescript使用

通过如下方式引入表单项ts定义
```
import { FormItemProps } from 'banma-fusion-form/es/types';
const formItems: FormItemProps[] = [];
```