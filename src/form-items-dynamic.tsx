import React, { useContext, useState } from 'react';
import { Icon, Box, Button } from '@alifd/next';
import classNames from 'classnames';
import FormContext from './form-context';
import ItemsBase from './form-items-base';
import { useDeepCompareEffect } from './utils/hooks';
import { FormItemProps } from './types';

/**
 * 动态表单渲染组件
 */
const FormItemsDynamic = React.forwardRef((props: FormItemProps, ref: any) => {
  const {
    dynamic,
    gutter,
    items,
    name,
    label,
    value,
    isPreview,
    minNum,
    maxNum,
  } = props;
  // 获取父层field
  const { field } = useContext(FormContext);
  // 设置动态表单项渲染
  const [formItemList, setFormItemList] = useState<FormItemProps[]>([]);
  // 设置一个表单项中多个表单项元素的样式类，如果设置dynamic属性表示动态渲染表单上下布局
  const className = classNames(
    dynamic ? 'banma-form-item-vertical' : 'banma-form-item-horizontal',
    { 'banma-gutter': !dynamic && !!gutter },
  );

  /**
   * 新增表单项
   */
  const handleAdd = () => {
    setFormItemList((preState) => {
      return [
        ...preState,
        props,
      ];
    });
  };
  /**
   * 删除表单项
   * @param index 下标
   */
  const handleDel = (index: number) => {
    // 删除表单项中对应值
    field.deleteArrayValue(name, index);
    // 删除表单项
    formItemList.splice(index, 1);
    setFormItemList([...formItemList]);
  };
  /**
   * 渲染动态表单
   * 预览态下不展示删除、新增按钮
   * @returns 动态渲染表单
   */
  const renderDynamicItems = () => {
    // 新增按钮是否展示
    const addButtonShow = !isPreview && (!maxNum || formItemList.length < maxNum);
    // 动态表单内容
    const dynamicItems = formItemList.map((data, index) => {
      // map取值key
      const key = data.key || `${data.name}${index}`;
      // 删除按钮是否禁用
      const buttonDisabeld = minNum && index < minNum;
      return (
        <div className={className} key={key}>
          <Box direction="row" justify="space-between" className="banma-form-item-dynamic-header">
            <span className="banma-form-item-dynamic-title">{`${label}${index + 1}`}</span>
            {!isPreview && <Button style={{ color: !buttonDisabeld ? 'var(--color-error-3)' : '' }} text disabled={buttonDisabeld} onClick={() => handleDel(index)}>删除</Button>}
          </Box>
          <ItemsBase
            ref={ref}
            dynamic
            prefixName={name}
            index={index}
            gutter={0}
            items={data.items}
            columns={1}
          />
        </div>
      );
    });
    return (
      <>
        {dynamicItems}
        {addButtonShow &&
          <Button className="banma-dynamic-button" onClick={handleAdd}><Icon type="add" /> 新增</Button>
        }
      </>
    );
  };
  /**
   * 渲染表单内容
   * 动态表单每个表单项单独一行、非动态表单一行多个，每个表单项默认均分
   * @returns 表单内容
   */
  const renderFormContent = () => {
    if (dynamic) {
      return renderDynamicItems();
    } else {
      return (
        <ItemsBase
          className={className}
          ref={ref}
          gutter={gutter}
          items={items}
          columns={null}
        />
      );
    }
  };
  useDeepCompareEffect(() => {
    // 如果value属性存在且有值，设置表单长度为value长度
    if (Array.isArray(value) && value.length) {
      const arr = new Array(value.length).fill(props);
      setFormItemList(arr);
    } else {
      setFormItemList([props]);
    }
  }, [props], ['isPreview', 'onChange']);

  return renderFormContent();
});

FormItemsDynamic.defaultProps = {
  gutter: 8,
};

export default FormItemsDynamic;
