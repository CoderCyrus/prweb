function Voiture(marque, modele) { 
	this.marque = marque;
	this.modele = modele;
	this.afficher = function() {
		return (this.marque + " " + this.modele); 
	}
}
