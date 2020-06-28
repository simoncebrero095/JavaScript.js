function Persona(){
    this.nombre = "Fernando";
    this.apellido = "Herrera";
    this.edad = 30;

}


Persona.prototype.imprimirInfo = function (){
    console.log( this.nombre + " " + this.apellido +  "("+ this.edad +")");      
}
var fer = new Persona();

fer.imprimirInfo();

Number.prototype.esPositivo = function(){

    if(this > 0){
        return true;
    }else{
        return false;
    }
}