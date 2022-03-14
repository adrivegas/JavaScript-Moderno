
const heroes = ['Batman', 'Superman', 'Mujer Maravilla', 'Aquaman'];

console.warn('For tradicional');
// inicializador; incrementador
for( let i = 0; i < heroes.length; i++ ) {
    console.log( heroes[i] );
}


console.warn('For in');
for( let i in heroes ) {
    console.log( heroes[i] );
}

console.warn('For of');
// Extrae el valor que se encuentra dentro del arreglo y lo regresa a la variable heroe
for( let heroe of heroes ){
    console.log( heroe );
}



