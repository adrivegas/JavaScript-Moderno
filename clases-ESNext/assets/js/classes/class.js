// Orden, cómo estructurar el código
// 1 - Propiedades y métodos estáticos
// 2 - Propiedades de la clase
// 3 - Constructor
// 4 - Sets y Gets
// 5 - Métodos
// 6- Todo lo privado al final de la clase

class Persona {

    static _conteo = 0;
    static get conteo() {
        return Persona._conteo + ' instancias';
    }

    static mensaje() {
        console.log( this.nombre ); // undefined porque no estoy trabajando en una instancia
        console.log('Hola a todos, soy un método stático');
    }

    nombre = '';
    codigo = '';
    frase  = '';
    comida = '';

    constructor( nombre = 'Sin nombre', codigo = 'Sin código', frase = 'Sin frase') {
        
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase  = frase;

        Persona._conteo++;
    }

    set setComidaFavorita( comida ) {
        this.comida = comida.toUpperCase();
    }
    get getComidaFavorita() {
        return `La comida favorita de ${ this.nombre } es ${ this.comida }`;
    }

    quienSoy() {
        console.log(`Soy ${ this.nombre } y mi identidad es ${ this.codigo }`);
    }
    // Podemos usar los métodos dentro de otros de la misma clase usando this
    miFrase() {
        this.quienSoy();
        console.log(`${ this.codigo} dice: ${ this.frase }`);
    }

}



const spiderman = new Persona( 'Peter Parker', 'Spiderman', 'Soy tu amigable vecino Spiderman' );
const ironman   = new Persona( 'Tony Stark', 'Ironman', 'Yo soy Ironman' );
console.log( spiderman );
// console.log( ironman );
// spiderman.miFrase();
// ironman.miFrase();

spiderman.setComidaFavorita = 'El pie de cereza de la tía May';
console.log('Conteo stático', Persona._conteo );
console.log( Persona.conteo );
console.log( Persona.mensaje() );



