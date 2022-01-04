const heroes = {
    capi: {
        nombre: 'Capitan America',
        poder: 'Aguantar iyecciones sin morir'
    },
    iron: {
        nombre: 'Ironman',
        poder: 'Absurda cantodad de dinero'
    },
    spider: {
        nombre: 'Spiderman',
        poder: 'La mejor reacciones alergicas a las picaduras de arañas'
    },
}



export const buscarHeroe = (id) => {

    const heroe = heroes[id];

    return new Promise((resolve, reject) => {

        if (heroe) {
            setTimeout(() => resolve(heroe), 1000);
            //resolve(heroe);
        } else {
            reject(`No existe un heroe con el id ${id}`);
        }

    });

}


// ASYNC

// async retorna una nueva promesa por defecto

export const buscarHeroeAsync = async (id) => {
    const heroe = heroes[id];

    if (heroe) {
        return heroe
    } else {
        throw `No existe un heroe con el id ${id}`;
    }

}


const promesaLenta = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promesa Lenta'), 2000);
});

const promesaMedia = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promesa Media'), 1500);
});

const promesaRapida = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promesa Rápida'), 1000);
});


export {
    promesaLenta,
    promesaMedia,
    promesaRapida
}