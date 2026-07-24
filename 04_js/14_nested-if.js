// age 1-5
//     weigtht 2-4kg underweight
//     5-9kg average

// age 5-10
//     weigtht 4-6kg underweight
//     6-10kg average


// let age= 67
// let weight=7
// if(age>=1 && age<=5){
//     if(weight>=2 && weight<=4){
//         console.log("according your child age "+age+" you are underweight"+weight)
//     }
//     else{
//             console.log("according your age "+age+" you are avarage"+weight)
//     }
  
// }else{

//       if(weight>=1 && weight<=10){
//         console.log("according your age "+age+" you are underweight"+weight)
//     }
//     else{
//             console.log("according your age "+age +" you are avarage"+weight)
//     }

// }

// 

// task 

// If the age is less than 18, print "Not eligible: Underage."
// Else if the age is 18 to 25:
// If the weight is less than 50 kg, print "Underweight."
// Else if the weight is 50 to 70 kg, print "Eligible."
// Else, print "Overweight."
// Else if the age is 26 to 40:
// If the weight is less than 55 kg, print "Underweight."
// Else if the weight is 55 to 80 kg, print "Eligible."
// Else, print "Overweight."
// Else if the age is 41 to 60:
// If the weight is less than 60 kg, print "Underweight."
// Else if the weight is 60 to 85 kg, print "Eligible."
// Else, print "Overweight."
// Else (age above 60):
// If the weight is less than 50 kg, print "Consult a doctor before joining."
// Else, print "Eligible with medical approval."


let age = prompt("Enter your age");   
let weight = prompt("Enter your weight (IN KG )");

if(age<18){
    alert("Not eligible: underage")
}else if(age>=18 && age<=25){
    if(weight>=0 && weight<=50){
        alert("your age " +age+  " years and weight is "+weight+" kg You are underweight")
    }
    else if(weight>50 && weight<=70){
        alert("your age " +age+  " years and weight is "+weight+" kg You are eligible")
    }
    else {
        alert("your age " +age+  " years and weight is "+weight+" kg You are overweight")
    }

}else if(age>=26 && age<=40){
    if(weight>=0 && weight<=55){
        alert("your age " +age+  " years and weight is "+weight+" kg You are underweight")
    }
    else if(weight>55 && weight<=80){
        alert("your age " +age+  " years and weight is "+weight+" kg You are eligible")
    }
    else {
        alert("your age " +age+  " years and weight is "+weight+" kg You are overweight")
    }

}else if(age>=41 && age<=60){
    if(weight>=0 && weight<=60){
        alert("your age " +age+  " years and weight is "+weight+" kg You are underweight")
    }
    else if(weight>60 && weight<=85){
        alert("your age " +age+  " years and weight is "+weight+" kg You are eligible")
    }
    else {
        alert("your age " +age+  " years and weight is "+weight+" kg You are overweight")
    }
}
else{
      if(weight>=0 && weight<=50){
        alert("your age " +age+  " years and weight is "+weight+" kg Consult a doctor before joining")
    }
    else{
         alert("your age " +age+  " years and weight is "+weight+" kg Eligible with medical approval.")
    }
}



