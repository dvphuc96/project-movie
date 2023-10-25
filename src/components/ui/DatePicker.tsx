import {
  DatePicker as DatePickerAntd,
  DatePickerProps as DatePickerPropsAntd,
} from "antd";
import { RefCallBack } from "react-hook-form";

type DatePickerProps = DatePickerPropsAntd & {
    name?: string
    ref?: RefCallBack
};
export const DatePicker = (props: DatePickerProps) => {
  return <DatePickerAntd {...props} />;
};
