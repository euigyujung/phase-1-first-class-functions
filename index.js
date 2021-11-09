function receivesAFunction(callback){
    callback('it does not matter')
}

function returnsANamedFunction(){
    return returnsANamedFunction();
    
}

returnsAnAnonymousFunction(function () {
    console.log("before all");
})




