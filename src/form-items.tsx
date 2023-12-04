import React from 'react';
import ItemsBase from './form-items-base';
import FormItemsDynamic from './form-items-dynamic';
import { BanmaFormItemsProps, FormItemProps } from './types';

export default class BanmaFormItems extends React.Component<BanmaFormItemsProps> {
  // 渲染动态表单
  handleRender = (item: FormItemProps) => {
    return <FormItemsDynamic {...item} />;
  };
  render() {
    return <ItemsBase {...this.props} customRender={this.handleRender} />;
  }
}
