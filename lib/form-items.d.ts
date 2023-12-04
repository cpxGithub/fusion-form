import React from 'react';
import { BanmaFormItemsProps, FormItemProps } from './types';
export default class BanmaFormItems extends React.Component<BanmaFormItemsProps> {
    handleRender: (item: FormItemProps) => JSX.Element;
    render(): JSX.Element;
}
