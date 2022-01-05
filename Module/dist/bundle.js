"use strict";
// Exercices
console.log("Hello World");
// Le type est ici explicite avec TS
let prenom2 = "Louis";
let age = 32;
let sexe = true;
const sports = ["foot", "rugby"];
const adresse = {
    ligne: "rue des fleurs",
    ville: "Toulouse",
    cp: 31000,
};
let afficherPersonne = (in_prenom, in_age, in_sexe, in_sports, in_adresse) => {
    console.log(`Prenom2 : ${in_prenom}`);
    console.log("Age : " + in_age);
    console.log("Sexe : " + (in_sexe ? "Homme" : "Femme"));
    for (let sport of in_sports) {
        console.log(sport);
    }
    console.log("Adresse : ");
    console.log(in_adresse.ligne);
    console.log(in_adresse.cp + " " + in_adresse.ville);
};
afficherPersonne(prenom2, age, sexe, sports, adresse);
// Les bases : fonctions, précision de type complexe :
let anniv = function anniv(in_age) {
    return in_age + 1;
};
let nouvAge;
nouvAge = anniv(age);
// console.log("Vous prenez un an aujourd'hui : " + nouvAge);
// Fonction de rappel avec ajout postérieur
function showResult(result) {
    console.log("Le résultat est " + result);
}
function showAge(age) {
    console.log("L'age est de " + age);
}
function add(nb1, nb2, callback) {
    let res = nb1 + nb2;
    callback(res);
}
add(15, 16, showAge);
// Ne pas définir le type avec any (tout type) :
const human = ["Marius", 31, true];
function showHuman(param1) {
    for (let value of human) {
        console.log(value);
    }
}
showHuman(human);
// L'opérateur ou pour assigner deux types possibles
let prenom1 = "Matthieu";
let age1 = 32;
let sexe1 = true;
const sports1 = ["foot", "rugby"];
const adresse1 = {
    ligne: "rue des fleurs",
    ville: "Toulouse",
    cp: 31000,
};
var info; // Différent de l'utilisation de any
info = "Matthieu";
myTest(info);
info = 32;
myTest(info);
info = true;
myTest(info);
function myTest(in_input) {
    if (typeof in_input === "string") {
        console.log("C'est une chaine de caractères");
    }
    else if (typeof in_input === "number") {
        console.log("C'est un nombre");
    }
    else if (typeof in_input === "boolean") {
        console.log("C'est un booléen");
    }
}
function ajout(e1, e2) {
    if (typeof e1 === "number" && typeof e2 === "number") {
        return e1 + e2;
    }
    return e1.toString() + " " + e2.toString();
}
let concatSt = ajout("Matthieu", "GASTON");
console.log(concatSt.toUpperCase());
let melange = ajout(10, "Matthieu");
console.log(melange);
// Tableau ne pouvant contenir que 3 valeurs avec une 1ère et 2e de type string et une 3e de type number
let tabTuple = ["Urbain", "Louis", 63];
console.log(tabTuple);
const tab = [
    { x: 10, y: 20 },
    { x: 3, y: 8 },
];
console.log(tab);
// 2) Objets sur nos personnages propres
const p1 = {
    nom: "Tyo",
    race: "Humain",
    age: 29,
};
const p2 = {
    nom: "GoliathBIG",
    race: "Monstre",
    tribu: "Orc",
};
// 3) Function pour afficher les détails et sous-détails
function afficherPersonnage(perso) {
    console.log("Nom : " + perso.nom);
    if (perso.race === "Humain") {
        console.log("Age : " + perso.age);
    }
    if (perso.race === "Monstre") {
        console.log("Tribu : " + perso.tribu);
    }
}
afficherPersonnage(p1);
afficherPersonnage(p2);
// // L'intersection indique avec "&" les types possibles (l'un et l'autre)
// type Mec = Personnage & Humain;
// // Ajout de propriété dynamique après coup
// const p3: Personnage = {
//   nom: "Emilio",
//   age: 31,
//   poids: 75,
// };
// p3.taille = 175;
// L'énumération permet de regrouper des constantes dans un titre
const VISITEUR = 0;
const UTILISATEUR = 1;
const ADMINISTRATEUR = 2;
var CLASSE;
(function (CLASSE) {
    CLASSE[CLASSE["VISITEUR"] = 0] = "VISITEUR";
    CLASSE[CLASSE["UTILISATEUR"] = 1] = "UTILISATEUR";
    CLASSE[CLASSE["ADMINISTRATEUR"] = 2] = "ADMINISTRATEUR";
})(CLASSE || (CLASSE = {}));
console.log("Il y a " + CLASSE.ADMINISTRATEUR + " administrateur(s)");
// Quand le type n'est pas connu - Unknow (type any)
let varUnknow;
varUnknow = 32;
varUnknow = "Nicolas"; // Dernière définition
if (typeof varUnknow === "string") {
    var name2 = varUnknow;
} // Ce if l'emporte
if (typeof varUnknow === "number") {
    var age2 = varUnknow;
}
console.log(varUnknow);
// // Le type void retourne le vide (pour commencer), et la fonction never ne retourne jamais rien
// function generateError(msg: string): never {
//   throw {message: msg};
// } // Throw relève une exception en cas d'erreur
const notes = [];
notes.push(14, 12, 13);
// Nouvelle syntaxe TS
const notes2 = [14, 12, 15];
console.log(notes2);
// Bonus Grafikart
// https://grafikart.fr/tutoriels/typescript-781
// Erreur sur la variable dont le type ne correspond pas à la valeur
// let a : number = "lol"
function isPair(nombre) {
    return nombre % 2 === 0;
}
console.log(isPair);
function salut(t) {
    let out = [];
    for (let item of t) {
        out.push('Salut' + item);
    }
}
salut(['aze', 'eaz', 'zea']);
// Définition du type des variables + ": bolean" est ce que l'on renvoie + identification des types :
function isPair2(number) {
    if (typeof number !== 'number') {
        number = parseInt(number, 10);
    }
    return number % 2 === 0;
}
isPair2(2);
var App;
(function (App) {
    let ClassAliment;
    (function (ClassAliment) {
        ClassAliment["MAUVAIS"] = "C";
        ClassAliment["MOYEN"] = "B";
        ClassAliment["BON"] = "A";
    })(ClassAliment = App.ClassAliment || (App.ClassAliment = {}));
    ;
    // Export de classe à utiliser en dehors de ce fichier
    class Aliment {
        constructor(_nom, _sante, calorie, lipide, glucide, proteine, _image) {
            this._nom = _nom;
            this._sante = _sante;
            this.calorie = calorie;
            this.lipide = lipide;
            this.glucide = glucide;
            this.proteine = proteine;
            this._image = _image;
            Aliment.listeAliments.push(this);
        }
        get nom() { return this._nom; }
        ;
        get sante() { return this._sante; }
        ;
        get image() { return this._image; }
        ;
        set nom(newNom) { this._nom = newNom; }
        ;
        set sante(newSante) { this._sante = newSante; }
        ;
        set image(newImage) { this._image = newImage; }
        ;
        afficherValeursNutritive() {
            console.log("Valeurs nutritionnelles :");
            console.log("Lipide : " + this.lipide);
            console.log("Glucide : " + this.glucide);
            console.log("Proteine : " + this.proteine);
        }
    }
    Aliment.listeAliments = [];
    App.Aliment = Aliment;
})(App || (App = {}));
/// <reference path="Aliment.class.ts" />
var App;
(function (App) {
    class Fruit extends App.Aliment {
        constructor(nom, calorie, lipide, glucide, proteine, image) {
            super(nom, App.ClassAliment.BON, calorie, lipide, glucide, proteine, image);
            Fruit.listeFruit.push(this);
        }
        afficherAliment() {
            console.log("Fruit : " + this._nom);
            this.afficherValeursNutritive();
        }
    }
    Fruit.listeFruit = [];
    App.Fruit = Fruit;
})(App || (App = {}));
/// <reference path="Aliment.class.ts" />
var App;
(function (App) {
    class Charcuterie extends App.Aliment {
        constructor(nom, calorie, lipide, glucide, proteine, image) {
            super(nom, App.ClassAliment.MAUVAIS, calorie, lipide, glucide, proteine, image);
            Charcuterie.listeCharcuteries.push(this);
        }
        afficherAliment() {
            console.log("Charcuterie : " + this._nom);
            this.afficherValeursNutritive();
        }
    }
    Charcuterie.listeCharcuteries = [];
    App.Charcuterie = Charcuterie;
})(App || (App = {}));
/// <reference path="classes/Aliment.class.ts" />
/// <reference path="classes/Fruit.class.ts" />
/// <reference path="classes/Charcuterie.class.ts" />
var App;
(function (App) {
    // MODULE 1 !!!
    // Propriétés d'addition simple
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
    // Les classes liées aux véhicules
    // Enumérations propres
    let TypeVehicule;
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
    // Module 4 !!!
    // Les aliments à trier
    // Création de chacun des aliments
    new App.Fruit("Pomme", 53, 0.2, 14, 0.3, "pomme.png");
    new App.Fruit("Poire", 49, 0.1, 15, 0.4, "poire.png");
    new App.Charcuterie("Salami", 270, 26.5, 1.3, 12, "salami.png");
    new App.Charcuterie("Saucisson", 300, 33.1, 1.9, 27.6, "saucisson.png");
    // Catégorisation selon les aliments
    let listeClasseAliment = {
        mauvais: App.Charcuterie.listeCharcuteries,
        moyen: [],
        bon: App.Fruit.listeFruit,
    };
    listeAliment();
    document.querySelector("#type").addEventListener("change", listeAliment);
    // Interraction avec le DOM
    function listeAliment() {
        const typeAlimentSouhaite = document.querySelector("#type").value;
        let aliments = getListeAlimentType(typeAlimentSouhaite);
        const baliseTbody = document.querySelector("#listeAliments");
        // Stocker dans une variable les aliments, passer sur tous et toutes leurs données par balise
        let listeAlimentBalise = "";
        if (aliments.length > 0) {
            for (let aliment of aliments) {
                listeAlimentBalise += `
                <tr>
                    <td>${aliment.nom}</td>
                    <td>${aliment.lipide}</td>
                    <td>${aliment.glucide}</td>
                    <td>${aliment.proteine}</td>
                    <td>${aliment.sante}</td>
                    <td><img src="images/${aliment.image}" width="100px"/></td>
                </tr>
            `;
            }
            baliseTbody.innerHTML = listeAlimentBalise;
        }
        else {
            baliseTbody.innerHTML = "Aucune données";
        }
    }
    // Fonction en switch/case de récupération des aliments
    function getListeAlimentType(type) {
        switch (type) {
            case "Tous":
                return App.Aliment.listeAliments;
                break;
            // Charcuterie
            case "Mauvais":
                return listeClasseAliment.mauvais;
                break;
            // Aucuns aliments sont de "valeurs nutritionnelles" moyennes
            case "Moyen":
                return listeClasseAliment.moyen;
                break;
            // Fruits
            case "Bon":
                return listeClasseAliment.bon;
                break;
            default:
                return [];
        }
    }
})(App || (App = {}));
//# sourceMappingURL=bundle.js.map