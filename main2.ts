type DeviseType = {
    nom:string;
    code:string;
    symbole:string;
    taux:number;//Taux de conversion vers le dollar
}

const dollar:DeviseType = {
    nom: "Dollar",
    code : "Dol",
    symbole : "$",
    taux : 1
}

const euro:DeviseType = {
    nom: "Euro",
    code : "Eur",
    symbole : "€",
    taux : 1.2
}

const livre:DeviseType = {
    nom: "Livre",
    code : "Liv",
    symbole : "£",
    taux : 1.39
}

const yuan:DeviseType = {
    nom: "Yuan",
    code : "Yua",
    symbole : "&yen;",
    taux : 0.15
}

const devises:DeviseType[] = [dollar,euro,livre,yuan];

const deviseInitSelect = document.querySelector("#devise-initiale")! as HTMLSelectElement;
deviseInitSelect.innerHTML = genererListeOptionDevise(devises);
let deviseInitValeur = deviseInitSelect.value;//code de la devise en 3 lettres
deviseInitSelect.addEventListener("change", () => {
    deviseInitValeur = deviseInitSelect.value;
    afficherResultat();
})

const deviseFinaleSelect = document.querySelector("#devise-finale")! as HTMLSelectElement;
deviseFinaleSelect.innerHTML = genererListeOptionDevise(devises);
let deviseFinaleValeur = deviseFinaleSelect.value;//code de la devise en 3 lettres
deviseFinaleSelect.addEventListener("change" , () => {
    deviseFinaleValeur = deviseFinaleSelect.value;
    afficherResultat();
})

let montant:number = 0;
const montantInput = document.querySelector("#montant")! as HTMLInputElement;
montantInput.addEventListener("keyup", () => {
    montant = +montantInput.value;
    afficherResultat();
});

let divResultat = document.querySelector("#resultat")! as HTMLDivElement;

function afficherResultat() {
    divResultat.innerHTML = "Résultat : " + calculResultat(montant,deviseInitValeur,deviseFinaleValeur);
}

function calculResultat(
    in_montant:number,
    in_deviseInitValeur:string,
    in_deviseFinaleValeur:string
    ) : number{
    let deviseInitObjet:unknown = getDevise(in_deviseInitValeur,devises);
    let deviseFinaleObjet:unknown = getDevise(in_deviseFinaleValeur,devises);

    let deviseInit:DeviseType;
    if(deviseInitObjet) deviseInit = deviseInitObjet as DeviseType;
    else throw {message:"La devise initiale n'est pas correcte"};

    let deviseFinale:DeviseType;
    if(deviseFinaleObjet) deviseFinale = deviseFinaleObjet as DeviseType;
    else throw {message:"La devise finale n'est pas correcte"};

    return (montant * deviseInit.taux) / deviseFinale.taux;
}

function getDevise(codeDevise : string,in_devises : DeviseType[]) : DeviseType | null {
    for(let devise of in_devises){
        if(codeDevise === devise.code){
            return devise;
        }
    }
    return null;
}

function genererListeOptionDevise(in_devises:DeviseType[]) : string {
    let listeDeviseTxt = "";
    for(let devise of in_devises){
        listeDeviseTxt += `<option value="${devise.code}">${devise.nom} - (${devise.symbole})</option>`; 
    }
    return listeDeviseTxt;
}