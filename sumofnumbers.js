let testData = [1, 2, 3, 4];

function sumFor(list) {
  let sum = 0;
  for (const num of list) {
    sum += num;
  }
  return sum;
}
console.log(sumFor(testData));
function sumWhile(list) {
  let sum = 0;
  let i = 0;
  while (i < list.length) {
    sum += list[i];
    i++;
  }
  return sum;
}
console.log(sumWhile(testData));
function sumRecursion(list) {
  const currentNum = list.shift();
  if (list.length > 0) {
    return sumRecursion(list) + currentNum;
  }
  return currentNum;
}
console.log(sumRecursion(testData));
testData = [1, 2, 3, 4];
function sumTheSimpleWay(list) {
  return _.reduce(list, function (memo, num) { return memo + num; }, 0);
}
console.log(sumTheSimpleWay(testData));
