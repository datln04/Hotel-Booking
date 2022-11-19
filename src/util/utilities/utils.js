import moment from "moment/moment";

export const checkDate = (date, format) => {
  return moment(date, format).format(format);
};

export const formatPrice = (price, countryCode, currency) => {
  return price.toLocaleString(countryCode, {
    style: "currency",
    currency: currency,
  });
};

export const isEmptyArray = (arr) => {
  return arr.every((element) => element === null || element === undefined);
};

export const generateId = (length) => {
  let result = "";
  let characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};
