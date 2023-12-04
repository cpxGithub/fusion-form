import * as React from 'react';
import { Form, Grid, Icon, Balloon } from '@alifd/next';
import { omit, pick } from 'lodash-es';
import BanmaFormItemContent from './form-item-content';
import { FormItemProps } from './types';

const FormItem = Form.Item;
const { Row, Col } = Grid;
const formItemKeys = Object.keys((FormItem as any).propTypes);

const BanmaFormItem = React.forwardRef((props: FormItemProps, ref: any) => {
  const { hint, addonAfter, children, label, ...otherProps } = props;
  // 获取props中符合Form.Item属性对象
  const formItem = omit(pick(otherProps, formItemKeys), ['defaultValue', 'onChange', 'hidden']) || {};

  return (
    <Row align="baseline">
      <Col span={24}>
        <FormItem
          label={label}
          {...formItem}
          ref={ref}
        >
          {children !== undefined ? children : <BanmaFormItemContent {...otherProps} />}
        </FormItem>
      </Col>
      {hint &&
        <Balloon v2 trigger={<Icon className="banma-hint" type="help" />} triggerType="hover">
          {hint}
        </Balloon>
      }
      {addonAfter && <span className="margin-left">{addonAfter}</span>}
    </Row>
  );
});

export default BanmaFormItem;
