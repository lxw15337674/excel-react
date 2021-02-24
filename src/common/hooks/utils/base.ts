export const dataType = (val: any): string => {
  return Object.prototype.toString
    .call(val)
    .replace(/^.{8}(.+)]$/, (m, $1) => $1.toLowerCase());
};
