export const weirdString = (str = "") => {
  if (str) {
    let words = str.split(' ');
    words = words.map(word=>{
      word = word.toUpperCase();
      let lastLetter = word[word.length-1].toLowerCase();
      let letters = word.split('');
      letters[letters.length-1] = lastLetter;
      word = letters.join('');
      return word;
    });
    return words.join(' ');
  } else return "";
};
