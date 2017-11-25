// Izračunati faktorijel zadatog broja (faktorijel broja 5 je 1 * 2 * 3 * 4 * 5 = 120)

var n = prompt ("Unesi jedan broj");
var faktorijel = 1 ;
for (var i=1; i<=n; i++) {
	faktorijel = faktorijel * i;
}

console.log("faktorijel broja " + n + " je " + faktorijel);


var n = prompt ("unesi zeljeni broj");
var faktorijel = 1;
i=1;

do {
	faktorijel = faktorijel * i;
	i++;
} while (i<=n);

console.log("faktorijel broja " + n + " je " + faktorijel);