import React, { ReactNode, useContext } from 'react';
import { Grid, Icon } from '@alifd/next';
import classNames from 'classnames';
import BanmaFormItem from './form-item';
import FormContext from './form-context';
import { getColSpan } from './utils/common';
import { BanmaFormItemsProps, FormItemProps } from './types';

const { Row, Col } = Grid;

interface ItemsBaseProps extends BanmaFormItemsProps {
  /** 自定义渲染内容 */
  customRender?: (data: FormItemProps) => ReactNode;
}

/**
 * 表单项集合组件
 */
const ItemsBase = React.forwardRef((props: ItemsBaseProps, ref: any) => {
  const formProps = useContext(FormContext);
  const {
    items,
    gutter = formProps.gutter,
    columns = formProps.columns,
    labelAlign = formProps.labelAlign,
    labelCol = formProps.labelCol,
    wrapperCol = formProps.wrapperCol,
    colon = formProps.colon,
    prefixName,
    index,
    dynamic,
    customRender,
  } = props;

  /**
   * 渲染表单项
   * @param item 表单项数据
   * @returns ReactNode
   */
  const renderFormItemContent = (item: FormItemProps) => {
    // 表单项属性设置
    const baseProps = {
      labelAlign,
      labelCol,
      wrapperCol,
      colon,
      ref,
      ...item,
    };
    let { name } = item;
    // // 如果是动态表单，设置对应表单项name
    if (dynamic === true && index !== undefined) {
      name = `${prefixName}.${index}.${name}`;
    }
    // 表单项中多个输入元素处理
    if (item.items?.length) {
      return (
        <BanmaFormItem {...baseProps} name={name}>
          {typeof customRender === 'function' && customRender(item)}
        </BanmaFormItem>
      );
    } else {
      return <BanmaFormItem {...baseProps} name={name} />;
    }
  };
  /**
   * 渲染表单内容
   * @returns ReactNode
   */
  const renderContent = () => {
    // 处理表单项间隔样式处理，Fusion Row组件使用Fragment方式设置gutter不生效
    const halfGutterString = `${gutter / 2}px`;
    const style = {
      paddingLeft: halfGutterString,
      paddingRight: halfGutterString,
    };
    return items.map((item, idx) => {
      const { className, showSeparator, hidden, key, singleLine, ...other } = item;
      const mergeKey = key || `${item.name}${idx}`;
      // Col组件span属性设置
      const spanProps = getColSpan(item, columns);
      // 隐藏表单项
      const hiddenFlag = typeof hidden === 'function' ? hidden(item) : hidden;
      // 父层元素
      const Component = singleLine ? Col : React.Fragment;
      // 组件属性
      const componentProps = { span: 24, key: mergeKey };
      // React.Fragment不需要span属性
      !singleLine && delete componentProps.span;

      return !hiddenFlag ? (
        <Component {...componentProps}>
          <Col style={style} className={classNames('banma-form-col', className)} {...spanProps}>
            { renderFormItemContent(other) }
          </Col>
          {showSeparator && <Icon size={16} type="semi-select" />}
        </Component>
      ) : null;
    });
  };

  return <Row align="baseline" wrap className={props.className}>{renderContent()}</Row>;
});

export default ItemsBase;
