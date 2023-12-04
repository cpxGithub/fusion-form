import React, { useEffect } from 'react';
import { Form, Field } from '@alifd/next';
import classNames from 'classnames';
import FormItems from './form-items';
import FormContext from './form-context';
import { BanmaFormProps } from './types';
import './index.scss';

export default function BanmaForm(props: BanmaFormProps) {
  const {
    className,
    items,
    gutter,
    columns,
    field,
    labelAlign,
    parseName,
    children,
    labelCol,
    wrapperCol,
    colon,
    ...otherProps
  } = props;
  const defaultField = Field.useField({
    parseName,
  });
  // field设置
  const formField = field || defaultField;
  // 相同属性
  const commonProps = {
    gutter,
    columns,
    labelAlign,
    labelCol,
    wrapperCol,
    colon,
  };
  // fix 在弹窗使用时使用value属性未渲染值问题
  useEffect(() => {
    formField.setValues(props.value);
  }, [props.value, formField]);
  return (
    <Form
      className={classNames('banma-form', className)}
      useLabelForErrorMessage
      fullWidth
      field={formField}
      {...otherProps}
    >
      <FormContext.Provider
        value={{
          ...commonProps,
          field: formField,
        }}
      >
        {
          children ||
          <FormItems
            items={items}
            {...commonProps}
          />
        }
      </FormContext.Provider>
    </Form>
  );
}

BanmaForm.Item = Form.Item;
BanmaForm.Items = FormItems;
BanmaForm.Submit = Form.Submit;
BanmaForm.Reset = Form.Reset;
BanmaForm.Error = Form.Error;

BanmaForm.defaultProps = {
  gutter: 0,
  columns: 1,
  parseName: false,
  labelCol: {
    fixedSpan: 5,
  },
};
