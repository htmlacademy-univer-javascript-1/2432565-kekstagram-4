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

//module 5 task 2
function isMeetingWithinWorkingHours(startTime, endTime, meetingStart, meetingDuration) {
  const [startHour, startMinute] = startTime.split(':').map(Number);
  const [endHour, endMinute] = endTime.split(':').map(Number);
  const [meetingStartHour, meetingStartMinute] = meetingStart.split(':').map(Number);

  const workingDayStart = startHour * 60 + startMinute;
  const workingDayEnd = endHour * 60 + endMinute;
  const meetingStartTime = meetingStartHour * 60 + meetingStartMinute;
  const meetingEndTime = meetingStartTime + meetingDuration;

  return meetingStartTime >= workingDayStart && meetingEndTime <= workingDayEnd && meetingDuration <= 1439;
}

const isWithinWorkingHours = isMeetingWithinWorkingHours('8:00', '17:30', '08:00', 900);
console.log(isWithinWorkingHours);

