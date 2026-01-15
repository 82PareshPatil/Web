function sum(a,b,funToCall) {
    const result = a + b;
    funToCall(result)
}
function doubltick(data){
    console.log(data)
}
sum(1,2,doubltick)