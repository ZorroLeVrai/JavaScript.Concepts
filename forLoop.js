function iterativeSum(start, condition, nextval, myFunc) {
  let sum = 0;
  for (let i=start; condition(i); i=nextval(i)) {
    sum += myFunc(i);
  }
  
  return sum;
}

function recursiveSum(start, condition, nextval, myFunc) {
  return locSum(start, 0);

  function locSum(cur, acc) {
    if (!condition(cur))
      return acc;

    return locSum(nextval(cur), myFunc(acc, cur));
  }
}

const iterativeResult = iterativeSum(1, x => x<=100, x => x+1, x => 1/x );
const recursiveResult = recursiveSum(1, x => x<=100, x => x+1, (acc, cur) => acc + 1/cur );

console.log(iterativeResult);
console.log(recursiveResult);