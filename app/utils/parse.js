export const parseId = (string) => {
  const integer = parseInt(string);
  if (isNaN(integer) || !isFinite(integer)) {
    return false;
  }
  if (integer < 1) {
    return false;
  }
  return integer;
};

export const numberWithCommas = (number) =>
  parseInt(number).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
