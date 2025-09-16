const fibs = (argument) => {
  const res = [];
  let first = 0;
  let second = 1;

  while (res.length < argument) {
    if (res.length == 0) {
      res[0] = 0;
    } else if (res.length == 1) {
      res[1] = 1;
    } else {
      res[second + 1] = res[first] + res[second];
      first += 1;
      second += 1;
    }
  }

  return res;
};

const fibsRec = (argument, array = [0, 1]) => {
  if (argument == 0) {
    return [];
  } else if (array.length < argument) {
    array[array.length] = array[array.length - 1] + array[array.length - 2];
    return fibsRec(argument, array);
  } else {
    return array;
  }
};

console.log(fibsRec(10));
