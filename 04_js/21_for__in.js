//This loop is use to print objects
// syntax:for (let key in object) {
//     // code
// }


let student ={
    "id" : 21,
    "name" : "Sanyam",
    "class" : "11"
}


for(let key in student){
    console.log(key, student[key])
}