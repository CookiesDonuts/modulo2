const mongoose = require('mongoose');
const Topping = require('../models/Topping');
mongoose.connect('mongodb://localhost/lab-passport-roles', {useMongoClient: true}); //cambiar base de datos

const toppings = [
    {
        name: 'Nada',
        price: 0,
    },
    {
        name: 'M&M',
        price: 0,
    },
    {
        name: 'Nuez',
        price: 0,
    },
    {
        name: 'Chispas de Chocolate',
        price: 0,
    },
    {
        name: 'Pretzels',
        price: 0,
    },
    {
        name: 'Panditas',
        price: 0,
    },
    {
        name: 'Chispas de Colores',
        price: 0,
    },
    {
        name: 'Oreo',
        price: 0,
    },
    {
        name: 'Tocino',
        price: 0,
    },
    {
        name: 'Fruity Pebbles',
        price: 0,
    },

];

Topping.create(toppings, (err) => {
    if (err) {throw(err)}
    console.log(`Created ${toppings.length} entries`);
    mongoose.connection.close()
});

//Para correrlo entrar por la terminal a la carpeta bin y ahí hacer
// node seeds.js
//y NUNCA volverlo a correr