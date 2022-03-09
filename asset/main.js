
// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
//     3) calcolare i km richiesti per 0.21
// va applicato uno sconto del 20% per i minorenni
  
   

// va applicato uno sconto del 20% per i minorenni va applicato uno sconto del 40% per gli over 65.
//     4) condizione IF per sapere se è minorenne e applicare nel caso TRUE 20% di sconto
// va applicato uno sconto del 40% per gli over 65
//     5) condizione IF per sapere se è over 65 e applicare nel caso TRUE 40% di sconto    

// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
// 6) i risultati dovranno avere max 2 decimali





const kmUtente = prompt("Quanti km farai?");
console.log("kmUtente");
document.getElementById("contenitore_target").innerHTML = kmUtente;




const etaUtente = prompt("Inserisci la tua età");
console.log("anniUtente");
document.getElementById("contenitore_target2").innerHTML = etaUtente;



// kmUtente * 0.21

// if (etaUtente < 18) {

// } else {

// }
