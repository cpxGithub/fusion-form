import _extends from "@babel/runtime/helpers/extends";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import React from 'react';
import ItemsBase from './form-items-base';
import FormItemsDynamic from './form-items-dynamic';
var BanmaFormItems = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(BanmaFormItems, _React$Component);
  function BanmaFormItems() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    // 渲染动态表单
    _this.handleRender = function (item) {
      return /*#__PURE__*/React.createElement(FormItemsDynamic, item);
    };
    return _this;
  }
  var _proto = BanmaFormItems.prototype;
  _proto.render = function render() {
    return /*#__PURE__*/React.createElement(ItemsBase, _extends({}, this.props, {
      customRender: this.handleRender
    }));
  };
  return BanmaFormItems;
}(React.Component);
export { BanmaFormItems as default };