function isBig(arr) {
  return arr
    .filter(item => item > 5)
    .map(bigItem => `Wow, ${bigItem} is Big!`);
}

module.exports = isBig;
