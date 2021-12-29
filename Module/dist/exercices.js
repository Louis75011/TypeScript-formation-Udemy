"use strict";
// Exercices
console.log("Hello World");
// Le type est ici explicite avec TS
let prenom = "Louis";
let age = 32;
let sexe = true;
const sports = ["foot", "rugby"];
const adresse = {
    ligne: "rue des fleurs",
    ville: "Toulouse",
    cp: 31000,
};
let afficherPersonne = (in_prenom, in_age, in_sexe, in_sports, in_adresse) => {
    console.log(`Prenom : ${in_prenom}`);
    console.log("Age : " + in_age);
    console.log("Sexe : " + (in_sexe ? "Homme" : "Femme"));
    for (let sport of in_sports) {
        console.log(sport);
    }
    console.log("Adresse : ");
    console.log(in_adresse.ligne);
    console.log(in_adresse.cp + " " + in_adresse.ville);
};
afficherPersonne(prenom, age, sexe, sports, adresse);
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
//# sourceMappingURL=exercices.js.map