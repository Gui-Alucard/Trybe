function estimate_pi(n) {
  let numInCirc = 0;
  let numInSquare = 0;
  for (const _ of Array(n).keys()) {
    const x = (Math.random() * (0 - 1)) + 1;
    const y = (Math.random() * (0 - 1)) + 1;
    const distance = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
    if (distance <= 1) {
      numInCirc += 1;
    }
    numInSquare += 1;
  }
  return console.log(4 * numInCirc / numInSquare);
};

estimate_pi(10000000);

function positiveSum(arr) {
  let sum = 0;
  arr.forEach((numb) => (numb > 0) ? sum += numb : sum);
  return console.log(sum);
}

positiveSum([1, 2, 3, 4, -3]);

function spam(number){
  return console.log("hue".repeat(number));
}

spam(10);

function problem(x){
  if (typeof x === 'string') {
    return console.log("Error");
  }
  return console.log((x * 50 + 6));
}

problem("RyanIsCool")

function bmi(weight, height) {
  const bmiResult = weight / Math.pow(height, 2);
  if (bmiResult <= 18.5) {
    return console.log("Underweight");
  } else if (bmiResult <= 25.0) {
    return console.log("Normal");
  } else if (bmiResult <= 30.0) {
    return console.log("Overweight");
  } else if (bmiResult > 30) {
    return console.log("Obese");
  }
}

bmi(80, 1.80)

function nextId(ids){
  const arr = ids.filter((elementoProcessado, indexDoElem, proprioArray) => proprioArray.indexOf(elementoProcessado) === indexDoElem)
    .sort((x, y) => x-y);
  
  if(arr[0] !== 0) {
    return 0;
  }
  
  for(let i = 0, j = 1; i <= arr.length; i += 1, j += 1) {
    if(arr[i]-arr[j] !== -1) {
      return console.log(arr[i]+=1);
    }
  }
}

nextId([0, 1, 2, 3, 4, 5, 6, 7])


function order(words) {
  const newArray = words.split(' ').sort((wordA, wordB) => {
    return wordA.match(/\d/) - wordB.match(/\d/);
  }).join(' ');
  return newArray;
}

order("is2 Thi1s T4est 3a");

const input = [
  [1, 2, 3, 4],
  [12, 13, 14, 5],
  [11, 16, 15, 6],
  [10, 9, 8, 7]
];

const snail = (array) => {
  const outputarray = [];
  const iter = () => {
    if (array.length == 0) {
      return
    }
    var n = array[0].length - 1;
    for (var i = 0; i <= n; i++) {
      outputarray.push(...array[0].splice(0, 1));
    }
    for (var i = 1; i <= n; i++) {
      outputarray.push(...array[i].splice(n, 1));
    }
    for (var i = n - 1; i >= 0; i--) {
      outputarray.push(...array[n].splice(i, 1));
    }
    for (var i = n - 1; i > 0; i--) {
      outputarray.push(...array[i].splice(0, 1));
    }
    array.pop();
    array.shift();
    iter(array);
  };
  iter(array);
  return outputarray;
}

console.log(snail(input));


// ______________________________________________LEETCODE

function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
          if (nums[i] + nums[j] == target) {
              return console.log([i, j]);
          }
      }
  }
};

twoSum([2, 3, 19, 20, 11, 5], 14);

function firstWord(text) {
  const first = text.substr(0, text.indexOf(' '));
  if (first === '') {
    return console.log(text);
  } else {
    return console.log(first);
  }
}

firstWord('hi world');

function numberLength(value) {
  return value.toString().length;
}

numberLength(13874)

function endZeros(value) {
  let str = value.toString()
  return console.log(str.length - str.replace(/0*$/, '').length);
}

endZeros(130300)


function backwardString(value) {
  return console.log([...value].reverse().join(''));
}

backwardString('oma et ue alraC')

function removeAllBefore(values, b) {
  const position = values.indexOf(b);
  if (position === -1) {
    // caso o valor não seja encontrado, retorna -1
    return console.log(values); // não tem valor no array, retorna todo o array
  }
  return console.log(values.slice(position));
}

removeAllBefore([1, 2, 3, 3, 4, 5], 3);
removeAllBefore([1, 1, 5, 6, 7], 2);
removeAllBefore([], 0);

function isAllUpper(text) {
  if (text === text.toUpperCase() || text === '') {
      return true;
  }
  return false;
}

isAllUpper('ALL UPPER')
isAllUpper('all lower')
isAllUpper('mixed UPPER and lower')
isAllUpper('')

function replaceFirst(values) {
  if (values.length > 1) {
    const first = values.shift();
    return console.log(values.concat(first));
  }
  return console.log(values);
}

replaceFirst([1, 2, 3, 4])
replaceFirst([1])
replaceFirst([])