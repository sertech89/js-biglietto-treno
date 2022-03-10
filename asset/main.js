
// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
//     3) calcolare i km richiesti per 0.21
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
//     4) condizione IF per sapere se è minorenne e applicare nel caso TRUE 20% di sconto
// va applicato uno sconto del 40% per gli over 65
//     5) condizione IF per sapere se è over 65 e applicare nel caso TRUE 40% di sconto    

// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
// 6) i risultati dovranno avere max 2 decimali






// 1)


// VERSIONE ABBREVIATA


const kilometriAbbreviata = Number( prompt("Quanti km farai?"));
console.log(kilometriAbbreviata);
document.getElementById("kilometri").innerHTML = `<h2> i kilometri da percorrere sono: ${kilometriAbbreviata} </h2>` 



// VERSIONE ABBREVIATA (ma con il prompt "eta")



// 2)

const etaUtenteAbbreviata = Number( prompt("Inserisci la tua età") );
console.log( etaUtenteAbbreviata );
document.getElementById("eta").innerHTML = `<h2>l'età del passeggero è: ${etaUtenteAbbreviata} </h2>`




// 3)

let tassa = 0.21;
let prezzo = tassa * kilometriAbbreviata;
console.log(prezzo);
document.getElementById("prezzo").innerHTML = `<h2>il prezzo del biglietto di base è ${prezzo} €</h2>`




// 4)


if (etaUtenteAbbreviata < 18){
    prezzo = prezzo * 0.80;
    console.log(prezzo);
    document.getElementById("prezzoSeScontato").innerHTML = `<p>il prezzo del biglietto per minorenni è: ${prezzo.toFixed(2)} €</p>`
}else if (etaUtenteAbbreviata >= 65 ){
    prezzo = prezzo * 0.60;
    console.log(prezzo);
    document.getElementById("prezzoSeScontato").innerHTML = `<p>il prezzo del biglietto per over 65 è: ${prezzo.toFixed(2)} €</p>`
}else{
    document.getElementById("prezzoSeScontato").innerHTML = `<p>il prezzo del biglietto base è: ${prezzo.toFixed(2)} €</p>`
}






