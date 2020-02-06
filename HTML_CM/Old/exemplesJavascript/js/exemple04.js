function calculerEtAfficher(cote, affichage)
{
    var resultat = 4 * cote; 
    affichage("Périmètre du carré : " + resultat);
}

function creeAffichage(id) {
    return function(message) {    
        console.log("Message: " + message); 
        document.getElementById(id).innerHTML = message;
    }
}


