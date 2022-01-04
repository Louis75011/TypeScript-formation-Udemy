// Exercices
console.log("Hello World");

// Le type est ici explicite avec TS
let prenom2: string = "Louis";
let age: number = 32;
let sexe: boolean = true;
const sports: string[] = ["foot", "rugby"];
const adresse: {
  ligne: string;
  ville: string;
  cp: number;
} = {
  ligne: "rue des fleurs",
  ville: "Toulouse",
  cp: 31000,
};

let afficherPersonne = (
  in_prenom: string,
  in_age: number,
  in_sexe: boolean,
  in_sports: string[],
  in_adresse: {
    ligne: string;
    ville: string;
    cp: number;
  },
) => {
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
let anniv = function anniv(in_age: number): number {
  return in_age + 1;
};
let nouvAge: number;
nouvAge = anniv(age);
// console.log("Vous prenez un an aujourd'hui : " + nouvAge);

// Fonction de rappel avec ajout postérieur
function showResult(result: number): void {
  console.log("Le résultat est " + result);
}
function showAge(age: number): void {
  console.log("L'age est de " + age);
}
function add(nb1: number, nb2: number, callback: (n: number) => void) {
  let res = nb1 + nb2;
  callback(res);
}
add(15, 16, showAge);

// Ne pas définir le type avec any (tout type) :
const human: any[] = ["Marius", 31, true];
function showHuman(param1: any[]) {
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

var info: string | number | boolean; // Différent de l'utilisation de any
info = "Matthieu";
myTest(info);
info = 32;
myTest(info);
info = true;
myTest(info);

function myTest(in_input: string | number | boolean) {
  if (typeof in_input === "string") {
    console.log("C'est une chaine de caractères");
  } else if (typeof in_input === "number") {
    console.log("C'est un nombre");
  } else if (typeof in_input === "boolean") {
    console.log("C'est un booléen");
  }
}

// Gestion des types selon l'ordre des élements (string, number) :
function ajout(e1: number, e2: string): string;
function ajout(e1: string, e2: string): string;

function ajout(e1: number | string, e2: number | string): number | string {
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
let tabTuple: [string, string, number] = ["Urbain", "Louis", 63];
console.log(tabTuple);

// // Créer un Type avec ses objets et propriétés définies
type Tableau = {
  x: number;
  y: number;
};
const tab: Tableau[] = [
  {x: 10, y: 20},
  {x: 3, y: 8},
];
console.log(tab);

// // Interface - Même principe que le Type, mais plus efficace avec l'association des classes
// interface Tableau2 {
//   ligne: string;
//   ville: string;
//   cp: number;
// }

// Mot clef "instanceof" en POO
// 1) Mes interfaces (nom pour les deux de Personnage)
interface Personnage {
  nom: string;
  race: string;
}
interface Humain extends Personnage {
  age: number;
  race: "Humain";
}
interface Monstre extends Personnage {
  tribu: string;
  race: "Monstre";
}
type Perso = Humain | Monstre;
// 2) Objets sur nos personnages propres
const p1: Humain = {
  nom: "Tyo",
  race: "Humain",
  age: 29,
};
const p2: Monstre = {
  nom: "GoliathBIG",
  race: "Monstre",
  tribu: "Orc",
};
// 3) Function pour afficher les détails et sous-détails
function afficherPersonnage(perso: Perso) {
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
enum CLASSE {
  VISITEUR,
  UTILISATEUR,
  ADMINISTRATEUR,
}
console.log("Il y a " + CLASSE.ADMINISTRATEUR + " administrateur(s)");

// Quand le type n'est pas connu - Unknow (type any)
let varUnknow: unknown;
varUnknow = 32;
varUnknow = "Nicolas"; // Dernière définition
if (typeof varUnknow === "string") {
  var name2: string = varUnknow;
} // Ce if l'emporte
if (typeof varUnknow === "number") {
  var age2: number = varUnknow;
}
console.log(varUnknow);

// // Le type void retourne le vide (pour commencer), et la fonction never ne retourne jamais rien
// function generateError(msg: string): never {
//   throw {message: msg};
// } // Throw relève une exception en cas d'erreur

const notes:number[] = [];
notes.push(14, 12, 13);
// Nouvelle syntaxe TS
const notes2:Array<number> = [14, 12, 15]
console.log(notes2);
