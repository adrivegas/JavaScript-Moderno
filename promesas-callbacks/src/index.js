import { promesaLenta, promesaMedia, promesaRapida } from './js/promesas'

// promesaLenta.then( console.log );
// promesaMedia.then( console.log );
// promesaRapida.then( console.log );

// Promise.race ejecuta el conjunto de promesas y obtiene el mensaje
// de la promesa que se resuelve más rápido
Promise.race([ promesaLenta, promesaMedia, promesaRapida])
    .then(console.log)
    .catch(console.warn);

// En el caso que falle la promesa rápida(reject) 
// vamos a recibir el error en amarillo por ser la primera que se resuelve
// por el contrario si fallan: promesaLenta, promesaMedia, no 
// recibimos error sino el console.log de la promesaRapida