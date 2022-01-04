/// <reference path="Aliment.class.ts" />

namespace App {
    export class Fruit extends Aliment{
        public static listeFruit:Fruit[] = [];
    
        constructor(nom:string,
            calorie:number,
            lipide:number,
            glucide:number,
            proteine:number,
            image:string
            ){
                super(nom,ClassAliment.BON,calorie,lipide,glucide,proteine,image);
                Fruit.listeFruit.push(this);
        }
    
        public afficherAliment(){
            console.log("Fruit : " + this._nom);
            this.afficherValeursNutritive();
        }
    }
}