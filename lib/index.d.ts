import FormItems from './form-items';
import { BanmaFormProps } from './types';
import './index.scss';
declare function BanmaForm(props: BanmaFormProps): JSX.Element;
declare namespace BanmaForm {
    var Item: typeof import("@alifd/next/types/form").Item;
    var Items: typeof FormItems;
    var Submit: typeof import("@alifd/next/types/form").Submit;
    var Reset: typeof import("@alifd/next/types/form").Reset;
    var Error: typeof import("@alifd/next/types/form").Error;
    var defaultProps: {
        gutter: number;
        columns: number;
        parseName: boolean;
        labelCol: {
            fixedSpan: number;
        };
    };
}
export default BanmaForm;
