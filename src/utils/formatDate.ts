import moment from "moment";

export const formatDate = (date: Date, formatType: string = "LLL"): string => {
  return moment(date).format(formatType);
};
