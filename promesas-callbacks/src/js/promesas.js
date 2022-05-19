const heroes = {
    capi: {
        nombre: 'Capitán América',
        poder: 'Aguantar inyecciones sin morir'
    },
    iron: {
        nombre: 'Ironman',
        poder: 'Absurda cantidad de dinero'
    },
    spider: {
        nombre: 'Spiderman',
        poder: 'La mejor reacciona alergica a las picaduras de arañas'
    },
}


export const buscarHeroe = ( id ) => {
    
    const heroe = heroes[id];
    // promesa recibe un callback que se va a ejecutar en un momento independiente del tiempo
    return new Promise( ( resolve, reject ) => {
        if( heroe ) {
            resolve( heroe )

        } else {
            reject(`No existe un héroe con el id ${ id }`);
        }
    });
}

