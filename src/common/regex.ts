export const PHONE_REGEX = RegExp(/^01([0|1|6|7|8|9])-([0-9]{3,4})-([0-9]{4})$/);
export const PHONE_NUMBERING = (number: string) => {
  if (number.length === 3 && number[number.length - 1] !== "-") {
    return number + "-";
  } else {
    return number;
  }
};
