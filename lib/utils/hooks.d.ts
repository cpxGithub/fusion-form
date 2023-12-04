import type { DependencyList } from 'react';
/**
 * hooks: 比较对象、数组
 * @param effect effect
 * @param dependencies 依赖
 * @param ignoreKeys 需要忽略的key
 */
export declare function useDeepCompareEffect(effect: React.EffectCallback, dependencies: DependencyList, ignoreKeys?: string[]): void;
