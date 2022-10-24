/* 4kyu

Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.

The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.

It is much easier to understand with an example:

* For seconds = 62, your function should return 
    "1 minute and 2 seconds"
* For seconds = 3662, your function should return
    "1 hour, 1 minute and 2 seconds"
For the purpose of this Kata, a year is 365 days and a day is 24 hours.

Note that spaces are important.

Detailed rules
The resulting expression is made of components like 4 seconds, 1 year, etc. In general, a positive integer and one of the valid units of time, separated by a space. The unit of time is used in plural if the integer is greater than 1.

The components are separated by a comma and a space (", "). Except the last component, which is separated by " and ", just like it would be written in English.

A more significant units of time will occur before than a least significant one. Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.

Different components have different unit of times. So there is not repeated units like in 5 seconds and 1 second.

A component will not appear at all if its value happens to be zero. Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.

A unit of time must be used "as much as possible". It means that the function should not return 61 seconds, but 1 minute and 1 second instead. Formally, the duration specified by of a component must not be greater than any valid more significant unit of time.

*/

const secondsMap = [
  {value: 60, name: "minute"},
  {value: 3600, name: "hour"},
  {value: 86400, name: "day"},
  //{value: 2678400, name: "month"},
  {value: 31536000, name: "year"}
];


function formatDuration (seconds) {
  if(seconds === 0)
    return "now";
  
  const readableTime = new Map();
  
  for(let i=secondsMap.length -1; i >= 0; i--) {
    if(seconds >= secondsMap[i].value) {
      while(seconds >= secondsMap[i].value) {
        readableTime.set(
          secondsMap[i].name,
          readableTime.get(secondsMap[i].name) > 0 ? readableTime.get(secondsMap[i].name) + 1 : 1
        );
        seconds = seconds - secondsMap[i].value;
      } 
    }
  }
  
  if(seconds !== 0)
    readableTime.set("second", seconds);
  
  let result = "";
  const keys = Array.from(readableTime.keys());
  for(let i=0; i<keys.length; i++) {
    const value = readableTime.get(keys[i]);
    if(value === 0)
      continue;
    
    if(i > 0) {
      if(i === keys.length - 1)
        result = result + ' and ' + value + ' ' + keys[i] + (value > 1 ? 's' : '');
      else
        result = result + ', ' + value + ' ' + keys[i] + (value > 1 ? 's' : '');
    } else {
      result = value + ' ' + keys[i] + (value > 1 ? 's' : '');
    }
  }
  
  return result;
}


// tests

describe("Tests", () => {
  it("test", () => {
  Test.assertEquals(formatDuration(1), "1 second");
  Test.assertEquals(formatDuration(62), "1 minute and 2 seconds");
  Test.assertEquals(formatDuration(120), "2 minutes");
  Test.assertEquals(formatDuration(3600), "1 hour");
  Test.assertEquals(formatDuration(3662), "1 hour, 1 minute and 2 seconds");

  });
});


