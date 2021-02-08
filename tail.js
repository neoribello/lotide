const tail = function(arr) {
  let tailArr = [];
  for (let x = 1; x < arr.length; x++) {
    tailArr.push(arr[x]);
  }
  return tailArr;
};

module.export = tail;


