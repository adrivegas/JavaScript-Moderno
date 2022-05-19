import { buscarHeroe as buscarHeroeCallback } from './js/callbacks';
import { buscarHeroe } from './js/promesas';

import './styles.css';

const heroeId1 = 'capi';
const heroeId2 = 'spider';


// buscarHeroe( heroeId, (err, heroe) => {

//     if ( err ) {
//         console.error(err);
//     } else {
//         console.info(heroe);
//     }
    
// });

buscarHeroe( heroeId1 ).then( heroe => {
    console.log(`Enviando a ${ heroe.nombre } a la misión`);
    
});

console.log('Fin del programa');
