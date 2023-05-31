//var generateName=require('sillyname');

//Se importan los modulos que quieras
import generateName from 'sillyname';
var sillyName=generateName();


console.log(`My name is ${sillyName}.`);

import superheroes from 'superheroes';
var mySuperheroName=superheroes.random();

console.log(`My superhero name is ${mySuperheroName}.`);