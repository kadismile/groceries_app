
export const formatTotal = val => {
  val = Number(val);
  return val.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
};

export const oldPrice = val => {
  val = Number(val)
  val = val + (0.05 * val)
  return formatTotal(val)
};