function cut(name, s,e){
    let result = "";
    for(let i=0;i<name.length;i++){
      if(i>=s && i<e){
         result = result + name[i];
      }
    }
    return result;
}

console.log(cut("Paresh Patil",2,5));