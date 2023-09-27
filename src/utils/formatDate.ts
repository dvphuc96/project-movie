import moment from "moment";

export const formatDate = (date: Date, formatType: string = "LLL") => {
  return moment(date).format(formatType);
};
