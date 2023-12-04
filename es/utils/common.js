/**
 * 根据columns设置Col组件span值
 * @param columns number | ResponsiveGrid
 * number 一行列数
 * ResponsiveGrid
 *  l 视图>=1200px 一行列数
 *  xl 视图>=1500px 一行列数
 *  span 一行列数
 * @returns ResponsiveGrid
 */
export var getColSpan = function getColSpan(item, columns) {
  if (columns === void 0) {
    columns = {};
  }
  var colSpan = {};
  if (item.span) {
    colSpan = {
      span: item.span
    };
  } else if (columns) {
    if (typeof columns === 'number') {
      colSpan = {
        span: 24 / columns
      };
    } else {
      Object.keys(columns).forEach(function (key) {
        colSpan[key] = 24 / columns[key];
      });
    }
  }
  return colSpan;
};