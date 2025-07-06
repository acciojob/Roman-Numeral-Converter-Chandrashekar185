function convertToRoman(num) {
  const romanMap = [
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1]
  ];

  let result = '';
  for (let i = 0; i < romanMap.length; i++) {
    while (num >= romanMap[i][1]) {
      result += romanMap[i][0];
      num -= romanMap[i][1];
    }
  }
  return result;
}

// Test
console.log(convertToRoman(36)); 

// do not edit below this line
module.exports = convertToRoman;
