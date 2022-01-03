"use strict";
// MODULE 1 !!!
// Propriétés d'addition simple :
const inputNb1 = document.querySelector("#nb1");
const inputNb2 = document.querySelector("#nb2");
const divResult = document.querySelector(".resultat"); // Nous devons préciser le type de chaque élément
document.querySelector("#calcul").addEventListener("click", () => {
    // Sans parseInt les nombres se mettraient les uns à la suite des autres sans propriété de calcule
    let result = addition(+inputNb1.value, +inputNb2.value);
    divResult.innerHTML = result.toString();
    //   document.querySelector(".resultat").innerHTML = result;
});
// Fonction de notre premier programme TS :
function addition(nb1, nb2) {
    return nb1 + nb2;
}
const dollar = {
    nom: "Dollar",
    code: "Dol",
    symbole: "$",
    taux: 1,
};
const euro = {
    nom: "Euro",
    code: "Eur",
    symbole: "€",
    taux: 1.2,
};
const livre = {
    nom: "Livre sterling",
    code: "Liv",
    symbole: "£",
    taux: 1.39,
};
const yuan = {
    nom: "Yuan",
    code: "Yua",
    symbole: "¥",
    taux: 0.15,
};
// Ajout des devises dans la variable
const devises = [dollar, euro, livre, yuan];
// console.log(devises);
// Générer le code HTML
const deviseInitSelect = document.querySelector("#devise-initiale");
deviseInitSelect.innerHTML = genererListeOptionDevise(devises);
// Récupération de la devise initiale (valeurs)
let deviseInitValeur = deviseInitSelect.value; //code de la devise en 3 lettres
deviseInitSelect.addEventListener("change", () => {
    deviseInitValeur = deviseInitSelect.value;
    afficherResultat();
    // console.log("Valeur devise initiale : " + deviseInitValeur);
});
const deviseFinaleSelect = document.querySelector("#devise-finale");
deviseFinaleSelect.innerHTML = genererListeOptionDevise(devises);
// Récupération de la devise finale (valeurs)
let deviseFinaleValeur = deviseFinaleSelect.value; //code de la devise en 3 lettres
deviseFinaleSelect.addEventListener("change", () => {
    deviseFinaleValeur = deviseFinaleSelect.value;
    afficherResultat();
});
// Gestion du montant entré dans l'input
let montant = 0;
const montantInput = document.querySelector("#montant");
// Écoute du clavier
montantInput.addEventListener("keyup", () => {
    montant = +montantInput.value;
    afficherResultat();
});
// Gestion d'affichage du div résultat
let divResultat = document.querySelector("#resultat");
function afficherResultat() {
    divResultat.innerHTML =
        "Résultat : " +
            calculResultat(montant, deviseInitValeur, deviseFinaleValeur);
}
// Calcul du résultat selon nombre de l'input et les conversions des devises sélectionnées
function calculResultat(in_montant, in_deviseInitValeur, in_deviseFinaleValeur) {
    let deviseInitObjet = getDevise(in_deviseInitValeur, devises);
    let deviseFinaleObjet = getDevise(in_deviseFinaleValeur, devises);
    let deviseInit;
    if (deviseInitObjet)
        deviseInit = deviseInitObjet;
    else
        throw { message: "La devise initiale n'est pas correcte" };
    let deviseFinale;
    if (deviseFinaleObjet)
        deviseFinale = deviseFinaleObjet;
    else
        throw { message: "La devise finale n'est pas correcte" };
    return (montant * deviseInit.taux) / deviseFinale.taux;
}
// Récupération de ce qui a été transféré de correspondant dans la devise
function getDevise(codeDevise, in_devises) {
    for (let devise of in_devises) {
        if (codeDevise === devise.code) {
            return devise;
        }
    }
    return null;
}
// Générer les devises en bouclant dessus
function genererListeOptionDevise(in_devises) {
    let listeDeviseTxt = "";
    for (let devise of in_devises) {
        listeDeviseTxt += `<option value="${devise.code}">${devise.nom} - (${devise.symbole})</option>`;
    }
    return listeDeviseTxt;
}
// MODULE 3 !!!
// Les classes liées aux véhicules - Les generics
// Enumérations propres
var TypeVehicule;
(function (TypeVehicule) {
    TypeVehicule["BUS"] = "Bus";
    TypeVehicule["VOITURE"] = "Voiture";
})(TypeVehicule || (TypeVehicule = {}));
// Classe mère
class Vehicule {
    // Définir si privé ou public (underscore pour le private)
    constructor(_immatriculation, _type) {
        this._immatriculation = _immatriculation;
        this._type = _type;
    }
    get immatriculation() {
        return this._immatriculation;
    }
    get type() {
        return this._type;
    }
}
// Classes filles spécifiques pour les types de véhicules
class Voiture extends Vehicule {
    constructor(immatriculation) {
        super(immatriculation, TypeVehicule.VOITURE);
    }
}
class Bus extends Vehicule {
    constructor(immatriculation) {
        super(immatriculation, TypeVehicule.BUS);
    }
}
// Generics
class ListeVehicules {
    constructor() {
        this._liste = [];
    }
    get liste() {
        return this._liste;
    }
    // Fonctions d'ajout et de retrait véhicule
    ajouterVehicule(vehicule) {
        this._liste.push(vehicule);
    }
    retirerVehicule() {
        if (this._liste.length > 0) {
            this._liste.pop();
        }
    }
    louerVehicule(vehicule) {
        // La fonction splice pour retirer l'élement et l'indexOf recherche la position de l'index et le nombre d'éléments à supprimer
        this._liste.splice(this._liste.indexOf(vehicule), 1);
    }
}
// Création du parc automobile en classe
class ParcAuto {
    constructor() {
        // Type Voiture puis Bus entre balises
        this._voitures = new ListeVehicules();
        this._bus = new ListeVehicules();
    }
    get voitures() {
        return this._voitures;
    }
    get bus() {
        return this._bus;
    }
    // Ajout du véhicule selon sa catégorie voiture ou bus
    ajouterVehicule(vehicule) {
        if (vehicule.type === TypeVehicule.VOITURE) {
            this._voitures.ajouterVehicule(vehicule);
        }
        else if (vehicule.type === TypeVehicule.BUS) {
            this._bus.ajouterVehicule(vehicule);
        }
    }
    // Nouvelle fonction de retrait
    louerVehicule(type) {
        if (type === TypeVehicule.BUS) {
            this._bus.retirerVehicule();
        }
        else if (type === TypeVehicule.VOITURE) {
            this._voitures.retirerVehicule();
        }
    }
    // Autre fonction d'affichage
    afficherParc() {
        // Voiture
        console.log("Liste de voitures :");
        for (let v of this._voitures.liste) {
            console.log("Immatriculation : " + v.immatriculation);
        }
        // Bus
        console.log("Liste des bus :");
        for (let b of this._bus.liste) {
            console.log("Immatriculation : " + b.immatriculation);
        }
    }
    // Récupération du véhicule
    getVehicules() {
        // Vehicule est la classe abstraite
        let tab = [];
        // Ajout de tous les véhicules grâce aux 3 points qui bouclent
        tab.push(...this._bus.liste, ...this._voitures.liste);
        return tab;
    }
    // Possibilité de louer un véhicule en particulier
    louerVehiculeImmat(immat) {
        let vehicule = this.getVehiculeImmat(immat); //vehicule ou null
        if (vehicule) {
            if (vehicule.type === TypeVehicule.BUS) {
                this._bus.louerVehicule(vehicule);
            }
            else if (vehicule.type === TypeVehicule.VOITURE) {
                this._voitures.louerVehicule(vehicule);
            }
        }
        else {
            throw { message: "Erreur d'immatriculation" };
        }
    }
    getVehiculeImmat(immat) {
        let vehicules = this.getVehicules(); //tableau de tous les véhicules du parc
        for (let v of vehicules) {
            if (v.immatriculation === immat) {
                return v;
            }
        }
        return null;
    }
}
// Générer tout notre parc automobiles sans informations dans son constructeur
let parcMGA = new ParcAuto();
// Envoie des véhicules sans nécessité du sous-type déjà identifié et directement dans le log
parcMGA.ajouterVehicule(new Bus("XX1111XX"));
parcMGA.ajouterVehicule(new Bus("YY2222YY"));
parcMGA.ajouterVehicule(new Bus("ZZ3333ZZ"));
parcMGA.ajouterVehicule(new Voiture("AB1111CD"));
parcMGA.ajouterVehicule(new Voiture("EF2222GH"));
parcMGA.ajouterVehicule(new Voiture("IJ3333KL"));
parcMGA.ajouterVehicule(new Voiture("IJ3334VZ"));
// Location de véhicules (retirer de la liste)
parcMGA.louerVehicule(TypeVehicule.VOITURE);
console.log(parcMGA.getVehicules());
// Interraction avec le DOM (balise select)
const selectListe = document.querySelector("#listeVehicule");
selectListe.innerHTML = creerListeVehiculeSelect();
// Ecoute du bouton de location de véhicule
const boutonLouer = document.querySelector("#louer");
boutonLouer.addEventListener("click", () => {
    // Récupération de la valeur et de son parc automobile
    const immat = selectListe.value;
    parcMGA.louerVehiculeImmat(immat);
    // Création finale HTML
    selectListe.innerHTML = creerListeVehiculeSelect();
});
// Fonction d'ajout de liste dans mon programme principal
function creerListeVehiculeSelect() {
    let txt = "";
    // Boucle de création de toute les données
    for (let v of parcMGA.getVehicules()) {
        txt += `<option value="${v.immatriculation}">${v.type} : ${v.immatriculation}</option>`;
    }
    return txt;
}
/*
Module
tsc --watch
npm run prettier-format
*/
//
//# sourceMappingURL=main.js.map