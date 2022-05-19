import { buscarHeroeAsync, buscarHeroe } from './promesas';


const heroesIds = ['capi','iron','spider'];

export const obtenerHeroesArr = async() => {
    return await Promise.all( heroesIds.map( buscarHeroe ) );
    const heroesArr = [];
    for (const id of heroesIds) {
        const heroe = await buscarHeroeAsync( id );
        heroesArr.push( heroe );
    }
    return heroesArr;
};

