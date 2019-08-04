const searchAllOccurrences = (text) =>
  text
    .replace(/[^A-Za-z0-9\s]/g, "")
    .split(' ')
    .reduce((acc, el) => {
      acc[el] = (acc[el] || 0) + 1;
      return acc;
    }, {});

const mostPopularWord = (text) => {
  const newData = searchAllOccurrences(text);
  return Object
    .keys(newData)
    .find(key => newData[key] === Object.values(newData).sort((prev, next) => next - prev)[0])
};

console.log(mostPopularWord('dog, cat, lizard, cat, dog, dog, cat, cat, cat'));
console.log(mostPopularWord('John and Marry work together for last few years. John as designer and Marry as his manager. On Firday John is going to be promoted.'))