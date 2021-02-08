const middle = function(arr) {
  let midArr = [];

  //executes to add an empty array if length of the array is 3 or less
  if (arr.length <= 2) {
    return midArr;
  }

  let index = arr.length / 2;
    
  if (arr.length % 2 === 0) {
    midArr.push(arr[index - 1], arr[index]);
  } else {
    midArr.push(arr[Math.floor(index)]);
  }
  return midArr;
};


module.exports = middle;
