module.exports = function reverse (n) {
  var num=n;
  while (num%10==0) num=num/10;
  if (num<0) num=num*(-1);
  return Number(String(num).split('').reverse().join(''));
}
