export const cutStrings = (arr = []) => {
  let length = 999999;
  arr.forEach((item, i) => {
    if (item.length < length) length = item.length;
  });
  return arr.map(item=>item.slice(0,length));
};
