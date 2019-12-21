input = [254032, 789860];

const newRange = (inputArray => {
  startNum2arr = String(inputArray[0])
    .split('')
    .map(curV => {
      return Number(curV);
    });

  endNum2arr = String(inputArray[1])
    .split('')
    .map(curV => {
      return Number(curV);
    });

  //Lower limit
  numberBreak = 0;
  lowerLimitArr = startNum2arr.map((curV, index, array) => {
    if (index === 0) return curV;
    if (numberBreak !== 0) return numberBreak;
    if (curV < array[index - 1]) {
      numberBreak = array[index - 1];
      return numberBreak;
    } else {
      return curV;
    }
  });
  lowerLimit = Number(lowerLimitArr.join(''));

  //Upper limit
  breakFlag = false;
  upperLimitArray = endNum2arr.map((curV, index, array) => {
    if (breakFlag === true) return 9;
    if (curV > array[index + 1]) {
      breakFlag = true;
      return curV - 1;
    } else {
      return curV;
    }
  });

  upperLimit = Number(upperLimitArray.join(''));
  return [lowerLimit, upperLimit];
})(input);

const startNum = newRange[0];
const endNum = newRange[1];

const checkNum = (num, question) => {
  const num2String = String(num);
  const num2Arr = num2String.split('').map(curV => {
    return Number(curV);
  });
  const condition0 = !num2String.includes('0');
  const condition1 = num2String.length === 6;
  const condition2 =
    num2Arr[0] <= num2Arr[1] &&
    num2Arr[1] <= num2Arr[2] &&
    num2Arr[2] <= num2Arr[3] &&
    num2Arr[3] <= num2Arr[4] &&
    num2Arr[4] <= num2Arr[5];
  const condition3 =
    num2Arr[0] === num2Arr[1] ||
    num2Arr[1] === num2Arr[2] ||
    num2Arr[2] === num2Arr[3] ||
    num2Arr[3] === num2Arr[4] ||
    num2Arr[4] === num2Arr[5];

  const condition4 = (() => {
    checkLargerGroup =
      (num2Arr[0] === num2Arr[1] && num2Arr[1] !== num2Arr[2]) ||
      (num2Arr[4] === num2Arr[5] && num2Arr[4] !== num2Arr[3]) ||
      (num2Arr[1] === num2Arr[2] &&
        num2Arr[1] !== num2Arr[0] &&
        num2Arr[2] !== num2Arr[3]) ||
      (num2Arr[2] === num2Arr[3] &&
        num2Arr[2] !== num2Arr[1] &&
        num2Arr[3] !== num2Arr[4]) ||
      (num2Arr[3] === num2Arr[4] &&
        num2Arr[3] !== num2Arr[2] &&
        num2Arr[4] !== num2Arr[5]);

    return checkLargerGroup;
  })();

  const result1 = condition0 && condition1 && condition2 && condition3;
  const result2 =
    condition0 && condition1 && condition2 && condition3 && condition4;
  const result = question === 1 ? result1 : result2;

  return result;
};

const part1Answer = (startNum, endNum) => {
  let passCount = 0;
  for (i = startNum; i <= endNum; i++) {
    check = checkNum(i, 1);
    if (check) passCount += 1;
  }
  return passCount;
};

const part2Answer = (startNum, endNum) => {
  let passCount = 0;
  for (i = startNum; i <= endNum; i++) {
    check = checkNum(i, 2);
    if (check) passCount += 1;
  }
  return passCount;
};

console.log('Question 1: ', part1Answer(startNum, endNum));
console.log('Question 2: ', part2Answer(startNum, endNum));
