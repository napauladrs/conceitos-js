//Adição +

var valor1 = prompt('Informe o valor 1: ');
var valor2 = prompt('Informe o valor 2: ');

console.log(typeof valor1);
console.log(typeof valor2);

var total = parseInt(valor1) + parseInt(valor2);

console.log("O resultado da adição é: " + total);

console.log(typeof total);


//Subtração - 

var valor3 = prompt('Informe o valor 3: ');
var valor4 = prompt('Informe o valor 4: ');

console.log(typeof valor3);
console.log(typeof valor4);

var total1 = parseInt(valor3) - parseInt(valor4);
console.log('O resultado de subtração é: ' + total1);

console.log(typeof total1);


//Multiplicação - 

var valor5 = prompt('Informe o valor 5: ');
var valor6 = prompt('Informe o valor 6: ');

console.log(typeof valor5);
console.log(typeof valor6);

var total2 = parseInt(valor5) * parseInt(valor6);
console.log('O resultado de subtração é: ' + total2);

console.log(typeof total2);



//Divisão - 

var valor7 = prompt('Informe o valor 7: ');
var valor8 = prompt('Informe o valor 8: ');

console.log(typeof valor7);
console.log(typeof valor8);

var total3 = parseInt(valor7) / parseInt(valor8);
console.log('O resultado de subtração é: ' + parseFloat(total3).toFixed(2));

console.log(typeof total3);