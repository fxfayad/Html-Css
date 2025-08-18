const weight = 50;
console.log("Weight is: " + weight)
const height = 1.615;
console.log("Height is: "+height)
const bmi = (weight/(height*height))
console.log("Bmi is: "+bmi)

if (bmi <24 ){
    console.log("Normal")
}
else{
    console.log("low")
}

let ages = [12,123,345,576,5756]
for (i=0; i<5; i++){
    if (ages[i] == 123){
        console.log("Find")
    }
}
console.log(ages)
console.log(ages.map(item => item >200))



function add(a,b){
    return a+b;
}

// arrow function 
// let add = (a,b) => {

// }