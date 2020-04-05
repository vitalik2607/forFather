let alcohol = +prompt("Виктор, введите крепость ");
let volume = +prompt("Ведите объем жидкости в литрах ");
let mililitres = volume * 1000;
let newAlcohol = mililitres / 100 ;
let absoluteAlcohol = newAlcohol *  alcohol;
let litres = absoluteAlcohol / 1000;
alert("Содержание абсолютного спирта " + litres+"л")
