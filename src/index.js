module.exports = function getZerosCount(number) {
  let multipliedFive = 5;
  let quantity = 0;
  while (multipliedFive < number) {
      quantity += Math.trunc(number / multipliedFive);
      multipliedFive *= 5;
  }
  return quantity;
}