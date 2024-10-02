function factorial(n) {
  return n !== 1 ? n * factorial(n - 1) : n;
 }
 console.log(factorial(3));

 /*

   function difference(a, b) {
   return a-b;
 }
 console.log(difference(1, 2));
 let difference = function(a, b) {
   return a-b;
 }
 console.log(difference(1, 2));

 let successor = function(a) {
   return ++a;
 }
 console.log(successor(10));

 let greeting = function(a) {
   return "Hello " + a + "!";
 }
 console.log(greeting("Erina"));

 */
