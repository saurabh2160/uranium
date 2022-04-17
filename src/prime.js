var numArray = [2, 3, 5, 6, 7, 9]

numArray = numArray.filter((number) => {
  for (var i = 2; i <=Math.sqrt(number); i++) {
    if (number % i === 0) {
        return false;
    }
  }
  return true;
});

console.log(numArray)