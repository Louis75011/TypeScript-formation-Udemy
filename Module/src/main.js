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
// Deviner le drapeau d'un pays (API) :
