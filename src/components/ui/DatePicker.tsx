import {
  DatePicker as DatePickerAntd,
  DatePickerProps as DatePickerPropsAntd,
} from "antd";
import dayjs from "dayjs";
import { useMemo } from "react";
import { RefCallBack } from "react-hook-form";

type DatePickerProps = DatePickerPropsAntd & {
  name?: string;
  ref?: RefCallBack;
};
export const DatePicker = ({ value,...rest }: DatePickerProps) => {
  const val = useMemo(() => {
    if (!value) return undefined;
    if (dayjs.isDayjs(value)) return value;
    return dayjs(value);
  }, [value]);
  const v = {
    ...rest,
    value: val,
  };
  return <DatePickerAntd {...v} />;
};
