function sum(a,b,funToCall) {
    const result = a + b;
    funToCall(result)
}
function doubltick(data){
    console.log(data)
}
//endregion
//region set timout
function call(){
    console.log("Hello Node")
}
setTimeout(call, 5*(1000));
//endregion
