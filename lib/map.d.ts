/// <reference types="react" />
import { Input, Select, Switch, TimePicker2, DatePicker2, NumberPicker } from '@alifd/next';
interface ElementTypeMap {
    [key: string]: React.ElementType;
}
/**
 * 输入组件映射
 */
export declare const componentMap: {
    input: typeof Input;
    textArea: typeof import("@alifd/next/types/input").TextArea;
    password: typeof import("@alifd/next/types/input").Password;
    select: typeof Select;
    checkox: typeof import("@alifd/next/types/checkbox").Group;
    checkbox: typeof import("@alifd/next/types/checkbox").Group;
    radio: typeof import("@alifd/next/types/radio").Group;
    switch: typeof Switch;
    date: typeof DatePicker2;
    dateRange: typeof import("@alifd/next/types/date-picker2").RangePicker;
    timePicker: typeof TimePicker2;
    timePickerRange: typeof import("@alifd/next/types/time-picker2").RangePicker;
    numberPicker: typeof NumberPicker;
};
/**
 * 输入组件对应子组件映射
 */
export declare const subComponentMap: ElementTypeMap;
export {};
