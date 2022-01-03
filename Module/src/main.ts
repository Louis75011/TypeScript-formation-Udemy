// MODULE 1 !!!
// Propriétés d'addition simple :
const inputNb1 = document.querySelector("#nb1")! as HTMLInputElement;
const inputNb2 = document.querySelector("#nb2")! as HTMLInputElement;
const divResult = document.querySelector(".resultat")! as HTMLDivElement; // Nous devons préciser le type de chaque élément

document.querySelector("#calcul")!.addEventListener("click", () => {
  // Sans parseInt les nombres se mettraient les uns à la suite des autres sans propriété de calcule
  let result = addition(+inputNb1.value, +inputNb2.value);
  divResult.innerHTML = result.toString();
  //   document.querySelector(".resultat").innerHTML = result;
});

// Fonction de notre premier programme TS :
function addition(nb1: number, nb2: number) {
  return nb1 + nb2;
}

// MODULE 2 !!!
// Convertisseur de devises :
// Mes 4 devises
type DeviseType = {
  nom: string;
  code: string;
  symbole: string; // symbole de la monnaie
  taux: number; // taux de conversion vers le dollard
};
const dollar: DeviseType = {
  nom: "Dollar",
  code: "Dol",
  symbole: "$",
  taux: 1,
};
const euro: DeviseType = {
  nom: "Euro",
  code: "Eur",
  symbole: "€",
  taux: 1.2,
};
const livre: DeviseType = {
  nom: "Livre sterling",
  code: "Liv",
  symbole: "£",
  taux: 1.39,
};
const yuan: DeviseType = {
  nom: "Yuan",
  code: "Yua",
  symbole: "¥",
  taux: 0.15,
};
// Ajout des devises dans la variable
const devises: DeviseType[] = [dollar, euro, livre, yuan];
// console.log(devises);

// Générer le code HTML
const deviseInitSelect = document.querySelector(
  "#devise-initiale",
)! as HTMLSelectElement;
deviseInitSelect.innerHTML = genererListeOptionDevise(devises);
// Récupération de la devise initiale (valeurs)
let deviseInitValeur = deviseInitSelect.value; //code de la devise en 3 lettres
deviseInitSelect.addEventListener("change", () => {
  deviseInitValeur = deviseInitSelect.value;
  afficherResultat();
  // console.log("Valeur devise initiale : " + deviseInitValeur);
});

const deviseFinaleSelect = document.querySelector(
  "#devise-finale",
)! as HTMLSelectElement;
deviseFinaleSelect.innerHTML = genererListeOptionDevise(devises);
// Récupération de la devise finale (valeurs)
let deviseFinaleValeur = deviseFinaleSelect.value; //code de la devise en 3 lettres
deviseFinaleSelect.addEventListener("change", () => {
  deviseFinaleValeur = deviseFinaleSelect.value;
  afficherResultat();
});

// Gestion du montant entré dans l'input
let montant: number = 0;
const montantInput = document.querySelector("#montant")! as HTMLInputElement;
// Écoute du clavier
montantInput.addEventListener("keyup", () => {
  montant = +montantInput.value;
  afficherResultat();
});

// Gestion d'affichage du div résultat
let divResultat = document.querySelector("#resultat")! as HTMLDivElement;
function afficherResultat() {
  divResultat.innerHTML =
    "Résultat : " +
    calculResultat(montant, deviseInitValeur, deviseFinaleValeur);
}

// Calcul du résultat selon nombre de l'input et les conversions des devises sélectionnées
function calculResultat(
  in_montant: number,
  in_deviseInitValeur: string,
  in_deviseFinaleValeur: string,
): number {
  let deviseInitObjet: unknown = getDevise(in_deviseInitValeur, devises);
  let deviseFinaleObjet: unknown = getDevise(in_deviseFinaleValeur, devises);

  let deviseInit: DeviseType;
  if (deviseInitObjet) deviseInit = deviseInitObjet as DeviseType;
  else throw {message: "La devise initiale n'est pas correcte"};

  let deviseFinale: DeviseType;
  if (deviseFinaleObjet) deviseFinale = deviseFinaleObjet as DeviseType;
  else throw {message: "La devise finale n'est pas correcte"};

  return (montant * deviseInit.taux) / deviseFinale.taux;
}

// Récupération de ce qui a été transféré de correspondant dans la devise
function getDevise(
  codeDevise: string,
  in_devises: DeviseType[],
): DeviseType | null {
  for (let devise of in_devises) {
    if (codeDevise === devise.code) {
      return devise;
    }
  }
  return null;
}

// Générer les devises en bouclant dessus
function genererListeOptionDevise(in_devises: DeviseType[]): string {
  let listeDeviseTxt = "";
  for (let devise of in_devises) {
    listeDeviseTxt += `<option value="${devise.code}">${devise.nom} - (${devise.symbole})</option>`;
  }
  return listeDeviseTxt;
}

// MODULE 3 !!!
// Les classes liées aux véhicules - Les generics

// Enumérations propres
enum TypeVehicule {
  BUS = "Bus",
  VOITURE = "Voiture",
}

// Classe mère
abstract class Vehicule {
  // Définir si privé ou public (underscore pour le private)
  constructor(private _immatriculation: string, private _type: string) {}
  get immatriculation() {
    return this._immatriculation;
  }
  get type() {
    return this._type;
  }
}

// Classes filles spécifiques pour les types de véhicules
class Voiture extends Vehicule {
  constructor(immatriculation: string) {
    super(immatriculation, TypeVehicule.VOITURE);
  }
}
class Bus extends Vehicule {
  constructor(immatriculation: string) {
    super(immatriculation, TypeVehicule.BUS);
  }
}

// Generics
class ListeVehicules<T> {
  private _liste: Array<T> = [];

  get liste() {
    return this._liste;
  }

  // Fonctions d'ajout et de retrait véhicule
  ajouterVehicule(vehicule: T) {
    this._liste.push(vehicule);
  }
  retirerVehicule() {
    if (this._liste.length > 0) {
      this._liste.pop();
    }
  }
  louerVehicule(vehicule:T){
    // La fonction splice pour retirer l'élement et l'indexOf recherche la position de l'index et le nombre d'éléments à supprimer
    this._liste.splice(this._liste.indexOf(vehicule),1);
}
}

// Création du parc automobile en classe
class ParcAuto {
  // Type Voiture puis Bus entre balises
  private _voitures: ListeVehicules<Voiture> = new ListeVehicules<Voiture>();
  private _bus: ListeVehicules<Bus> = new ListeVehicules<Bus>();

  get voitures() {
    return this._voitures;
  }
  get bus() {
    return this._bus;
  }

  // Ajout du véhicule selon sa catégorie voiture ou bus
  public ajouterVehicule<T extends Vehicule>(vehicule: T) {
    if (vehicule.type === TypeVehicule.VOITURE) {
      this._voitures.ajouterVehicule(vehicule);
    } else if (vehicule.type === TypeVehicule.BUS) {
      this._bus.ajouterVehicule(vehicule);
    }
  }
  // Nouvelle fonction de retrait
  louerVehicule(type: TypeVehicule) {
    if (type === TypeVehicule.BUS) {
      this._bus.retirerVehicule();
    } else if (type === TypeVehicule.VOITURE) {
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
  getVehicules(): Vehicule[] {
    // Vehicule est la classe abstraite
    let tab: Vehicule[] = [];
    // Ajout de tous les véhicules grâce aux 3 points qui bouclent
    tab.push(...this._bus.liste, ...this._voitures.liste);
    return tab;
  }

  // Possibilité de louer un véhicule en particulier
  louerVehiculeImmat(immat: string) {
    let vehicule = this.getVehiculeImmat(immat); //vehicule ou null
    if (vehicule) {
      if (vehicule.type === TypeVehicule.BUS) {
        this._bus.louerVehicule(vehicule);
      } else if (vehicule.type === TypeVehicule.VOITURE) {
        this._voitures.louerVehicule(vehicule);
      }
    } else {
      throw {message: "Erreur d'immatriculation"};
    }
  }

  private getVehiculeImmat(immat: string): Vehicule | null {
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
const selectListe = document.querySelector(
  "#listeVehicule",
)! as HTMLSelectElement;
selectListe.innerHTML = creerListeVehiculeSelect();

// Ecoute du bouton de location de véhicule
const boutonLouer = document.querySelector("#louer")! as HTMLButtonElement;
boutonLouer.addEventListener("click", () => {
  // Récupération de la valeur et de son parc automobile
  const immat = selectListe.value;
  parcMGA.louerVehiculeImmat(immat);
  // Création finale HTML
  selectListe.innerHTML = creerListeVehiculeSelect();
});

// Fonction d'ajout de liste dans mon programme principal
function creerListeVehiculeSelect(): string {
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
