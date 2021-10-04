export const splitAndMerge = (str = "", separator = "") => {
  let words = str.split(" ");
  words = words.map(word => {
    let letters = word.split('');
    for (let j=1, l=letters.length; j<l; j++) {
      letters.splice(j*2-1, 0, separator);
    }
    return letters.join('');
  });
  words = words.join(' ');
  return words;
};
