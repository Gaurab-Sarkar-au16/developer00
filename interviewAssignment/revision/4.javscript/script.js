//var, let, const
const price1 = 5
const price2 = 5

let total = price1 + price2 

//creating a variable in javascript is called "declaring" a variable
let carName; //undefined

//redeclaring
var carsName = "volvo"
var carsName

//You cannot re-declare a variable declared with let or const.This will not work:
// let carssName = "Volvo";
// let carssName;

//es6 promises
const resPromise = fetch('https://jsonplaceholder.typicode.com')
console.log(resPromise)

resPromise.then(function(response){
    console.log('Fetched successfully')
    console.log(response)

    response.json().then(function(data){
        console.log(data)
        console.log(data[0].title)
    })
}).catch(function(){
    console.log('Error')
})

console.log('Getting data')


//es7 async/await
async function getData(){
    
}