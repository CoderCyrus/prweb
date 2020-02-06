function Voiture(marque, modele) { 
	this.marque = marque;
	this.modele = modele;
}

Voiture.prototype.afficher = function() {
	alert(this.marque + " " + this.modele);
}

