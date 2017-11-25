/*
Izračunati koliko komada proizvoda možemo da kupimo ako znamo koliko para imamo na računu i koliko košta jedan proizvod 
(stanje na računu: 325 din, cena proizvoda 14 din)
*/

var racun = prompt ("Unesite stanje na Vašem računu");
var cena = prompt ("Unesite cenu proizvoda");
var brojProizvoda = Math.floor(racun/cena);
var ostatak = racun%cena;

console.log("Za dati iznos na Vašem računu možete kupiti " + brojProizvoda + " komada, a na računu Vam ostane " + ostatak + " dinara");