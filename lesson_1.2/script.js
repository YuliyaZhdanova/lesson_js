var num = 33721;
var figure;
var sum = 1;

for (var i = 0; i < 5; i++) {
 figure = num % 10;
 sum = sum * figure;
 num = Math.floor(num / 10);
  
}

alert('Число ' + sum + ' в степени 3 = ' + Math.pow(sum,3));