namespace App {
    export enum ClassAliment {MAUVAIS="C",MOYEN="B",BON="A"};

    // Export de classe à utiliser en dehors de ce fichier
    export abstract class Aliment{
    public static listeAliments : Aliment[] = [];

    constructor(
        protected _nom:string,
        protected _sante:ClassAliment,
        public readonly calorie:number,
        public readonly lipide:number,
        public readonly glucide:number,
        public readonly proteine:number,
        protected _image:string){
            Aliment.listeAliments.push(this);
    }

    get nom() : string {return this._nom};
    get sante() : ClassAliment {return this._sante};
    get image() : string {return this._image};
    
    set nom(newNom:string) {this._nom=newNom};
    set sante(newSante:ClassAliment) {this._sante = newSante};
    set image(newImage:string) {this._image = newImage};

    abstract afficherAliment() : void;

    protected afficherValeursNutritive() {
        console.log("Valeurs nutritionnelles :");
        console.log("Lipide : " + this.lipide);
        console.log("Glucide : " + this.glucide);
        console.log("Proteine : " + this.proteine);
    }
}
}
