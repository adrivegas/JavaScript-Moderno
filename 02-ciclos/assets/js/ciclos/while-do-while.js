

const carros = ['Ford','Mazda','Honda','Toyota'];

let i = 0;

// while( i < carros.length ) {
//     console.log( carros[i] );
//     // i = i + 1;
//     i++;
// }

console.warn('While')
// undefined
// null
// false
while( carros[i] ) {
    if ( i === 1 ){
        // break;
        i++; //condición que cancela el ciclo infinito
        continue; //No ejecutes esta línea, sigue con la siguiente
    }
    
    console.log( carros[i] );
    i++;
}


console.warn('Do While'); // Ejecuta el código al menos una vez
let j = 0;

do {
    console.log( carros[j]);
    j++;
} while( carros[j] );

