const heroes = {
    capi:{
        nombre: 'Capitan America',
        poder: 'Aguantar iyecciones sin morir'
    },
    iron:{
        nombre: 'Ironman',
        poder: 'Absurda cantodad de dinero'
    },
    spider:{
        nombre: 'Spiderman',
        poder: 'La mejor reacciones alergicas a las picaduras de arañas'
    },
}



// callback returna ......

export const buscarHeroe = (id, callback) => {

    const heroe = heroes[id];

    if( heroe ){
        callback(null, heroe);
    } else{
        // Un error
        callback(`No existe un heroe con el id ${ id }`);
    }


    // callback( heroe );

}