// 90+ A+
// 80 A
// 70 B+
// 60 B
// 50 C
// 40 D
// 33 F
// prompt alert confirm 

// let marks=prompt("Enter your marks")
let marks= 90000
if(marks>100 || marks<0){
    alert("enter valid number")
}
else if(marks>=90 && marks<100){
    alert("A+")  //ye block tb execute hoga jb  dono number condition follow karega
}
else if(marks>=80 && marks<90){
    alert("A")
}
else if(marks>70 && marks<80){
    alert("B")
}
else{
    alert("fail")
}