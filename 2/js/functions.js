//first task
const checkStringLength = (str, maxLength) => str.length <= maxLength;
checkStringLength('cat', 3);
checkStringLength('fishman', 15);

//second task
const checkPalindrom = (str) => {
  const cleanedStr = str.replaceAll(' ', '').toLowerCase();
  const reversedString = cleanedStr.split('').reverse().join('');
  return cleanedStr === reversedString;
};

checkPalindrom('довод');
checkPalindrom('пирожок');

//third task
const findNumber = (line) => {
  const result = line.replace(/\D+/g, '');
  return parseInt(result, 10);
};

findNumber('2023');
findNumber('1 кефир, 0.5 батона');
