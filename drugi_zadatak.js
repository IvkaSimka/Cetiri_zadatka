/*
Izračunati sumu prvih N prirodnih brojeva (npr. za broj 3 bi bilo 1 + 2 + 3 = 6 ). 
N  je ceo nenegativan broj
*/

var n = prompt ("Unesi jedan broj");
var suma = 0;
for (var i=1; i<=n; i++) {
	suma = suma + i;
}
if (n<5) {
	console.log("Suma prva " + n + " broja iznosi " + suma);
} else {
	console.log("Suma prvih " + n + " brojeva iznosi " + suma);
}
