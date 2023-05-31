//jshint esversion:6
//INTERNAL MODULES
//require el modulo file system de node
// const fs=require('fs');

//Va a buscar en el directorio actual el archivo file1.txt y lo copiará en file2.txt
//Si ya existiera el file2.txt, lo sobreescribirá
// fs.copyFileSync("file1.txt","file2.txt");

//EXTERNAL MODULES
var superheroes=require('superheroes');
var mySuperheroName=superheroes.random();

console.log(mySuperheroName);

var supervillains=require('supervillains');
var mySupervillainName=supervillains.random();

console.log(mySupervillainName);