/* Your friend is traveling abroad to the United States so he wrote a program to convert fahrenheit to celsius. Unfortunately his code has some bugs.

Find the errors in the code to get the celsius converter working properly.

To convert fahrenheit to celsius:

celsius = (fahrenheit - 32) * (5/9)

*/

//* My solution:
function convertToCelsius(fahrenheit) {
  let celsius = (fahrenheit - 32) * (5 / 9);
  return celsius;
}

function weatherInfo(temp) {
  let celsius = convertToCelsius(temp);
  if (celsius < 0) return celsius + " is freezing temperature";
  else return celsius + " is above freezing temperature";
}
