import moment from "moment";
import "moment/dist/locale/ar-ps";

export const formatDate = (locale) => {
  return moment()
    .locale(locale == "ar" ? "ar-ps" : "en")
    .format("dddd  YYYY/MM/D ");
};
