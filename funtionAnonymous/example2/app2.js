function ejecutarFuncion( fn ){
    
    if (fn() === 1){
        return true;
    }else{
        return false;
    }
     
};

ejecutarFuncion( function(){
    console.log("Funcion Anonima ejecutada!");
    return 0; 
})

