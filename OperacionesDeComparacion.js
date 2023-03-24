//Operaciones de comparación
var aguda = 'esto es:'
console.log (aguda, 4 > 13 );
console.log (aguda, 22 < 2);
console.log (aguda, 4 > 4 );
console.log (aguda, 4 == 8);

//igualidad vs igualidad estricta

console.log (aguda, 3 == 3);
console.log (aguda, 3 === 3);
console.log (aguda, 3 == '3');
console.log (aguda, 3 === '3');
console.log (aguda, 7 == '7');
console.log (aguda, 7 === '7');


//Asignación y asociativa

var a = 1;
var b = 2;
var c = a = b = a;
console.log (c);

