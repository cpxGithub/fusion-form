import { ResponsiveGrid, FormItemProps } from '../types';
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
export declare const getColSpan: (item: FormItemProps, columns?: number | ResponsiveGrid) => ResponsiveGrid;
