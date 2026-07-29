// 29
// /Check it this divide between  1 to 29
//if divide then non-prime no
// otherwise prime no



// if(num<=1 || (num%2==0 && num !==2)){
//     isPrime = false
// }else{
//     for(i=3; i<=Math.sqrt(num); i+=2){
//         if(num%i==0){
//             isPrime = false
//             break;
//         }
//     }
// }

let num = 121;
let isPrime = true;
if(num<=1 ){
    isPrime = false
}else{
    for(i=2; i<num; i++){
    
        if(num%i==0){
           isPrime = false  
              break;
        }
    }
}




if(isPrime){
    console.log("Your number "+num+" is prime Number")
}else{
    console.log("Your number "+num+" is non-prime Number")
}