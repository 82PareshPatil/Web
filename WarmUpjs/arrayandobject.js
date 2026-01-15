const User=[{
    name: "Paresh",
    age:12,
    gender:"male"
},{
    name: "ramesh",
    age:22,
     gender:"male"
},{
    name: "Priya",
    age:72,
     gender:"female"
}]
for(let i=0;i<User.length;i++){
    if(User[i].gender=="male"){
        console.log(User[i].name)
    }
}