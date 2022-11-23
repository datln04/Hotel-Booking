/* eslint-disable array-callback-return */
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

export const getFullName = (str) => {
  const rs = str.trim().split(/\s+/);
  if (rs.length > 0) {
    return {
      firstName: rs[0] && rs[0],
      middleName: rs[1] && rs[1],
      lastName: rs[2] ? getLastName(rs) : null,
    };
  }
  return rs;
};

export const getLastName = (str) => {
  const lastName = str.map((item, idx) => {
    if (idx > 1) {
      return item;
    }
  });
  return lastName.join(" ").trim();
};

export const combineName = (firstName, middleName, lastName) => {
  return firstName + " " + middleName + " " + lastName;
};
