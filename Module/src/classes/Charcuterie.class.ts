/// <reference path="Aliment.class.ts" />

namespace App {
    export class Charcuterie extends Aliment{
        public static listeCharcuteries:Charcuterie[] = [];
    
        constructor(nom:string,
            calorie:number,
            lipide:number,
            glucide:number,
            proteine:number,
            image:string
            ){
                super(nom,ClassAliment.MAUVAIS,calorie,lipide,glucide,proteine,image);
                Charcuterie.listeCharcuteries.push(this);
            }
        
        public afficherAliment(){
            console.log("Charcuterie : " + this._nom);
            this.afficherValeursNutritive();
        }
    }
}