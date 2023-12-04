"use strict";

exports.__esModule = true;
exports.useDeepCompareEffect = useDeepCompareEffect;
var _react = require("react");
var _lodashEs = require("lodash-es");
/**
 * 比较对象内容是否相同
 * @param pre 第一个对象
 * @param next 第二个对象
 * @param ignoreKeys 需要忽略比较的key
 * @returns boolean true: 相同 false: 不相同
 */
function isEqualFn(pre, next, ignoreKeys) {
  if (pre === next) return true;
  if (pre && next && typeof pre === 'object' && typeof next === 'object') {
    var isEqualFlag = false;
    if (ignoreKeys !== null && ignoreKeys !== void 0 && ignoreKeys.length) {
      isEqualFlag = (0, _lodashEs.isEqualWith)(pre, next, function (obj, data) {
        // 如果是数组比较数组元素是否相同
        if (Array.isArray(obj) && Array.isArray(data)) {
          var length = obj.length;
          if (length !== data.length) return false;
          for (var i = length; i-- !== 0;) {
            if (!isEqualFn(obj[i], data[i], ignoreKeys)) return false;
          }
          return true;
        } else {
          return (0, _lodashEs.isEqual)((0, _lodashEs.omit)(obj, ignoreKeys), (0, _lodashEs.omit)(data, ignoreKeys));
        }
      });
    } else {
      isEqualFlag = (0, _lodashEs.isEqual)(pre, next);
    }
    return isEqualFlag;
  }
  // eslint-disable-next-line no-self-compare
  return pre !== pre && next !== next;
}

/**
 * 比较对象、数组，判断是数据否有变化
 * @param value 数据源
 * @param ignoreKeys 需要忽略的key
 * @returns 数据
 */
function useDeepCompareMemoize(value, ignoreKeys) {
  if (ignoreKeys === void 0) {
    ignoreKeys = [];
  }
  var ref = (0, _react.useRef)();
  if (!isEqualFn(value, ref.current, ignoreKeys)) {
    ref.current = value;
  }
  return ref.current;
}

/**
 * hooks: 比较对象、数组
 * @param effect effect
 * @param dependencies 依赖
 * @param ignoreKeys 需要忽略的key
 */
function useDeepCompareEffect(effect, dependencies, ignoreKeys) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  (0, _react.useEffect)(effect, useDeepCompareMemoize(dependencies || [], ignoreKeys));
}