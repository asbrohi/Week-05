// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

console.log("Welcome to Programiz!");
var fruit = ["banana", "apple","mango", "guava"]
fruit.push("orange")
console.log(fruit)
fruit.pop()
console.log(fruit)
var fruit2 = ["pineapple", "bigapple"]
fruit3=fruit.concat(fruit2)
console.log("Here is the third array: ",fruit3)
console.log(fruit3.indexOf("guava"))
console.log(fruit3.lastIndexOf("guava"))
console.log("This is includes method: ",fruit3.includes("pineapple"))

// function greet(name){
    
//     return "Hello, "+name+"!";

// }


const greet = (name) =>{
    return "Hello, " +name +"!";
}
console.log(greet("Ahsan"))

function number(num, arr){
    
    for (i=0; i< 10; i++){
        
        arr.push(i*num)
    }
    for (i in arr){
        
        console.log(arr[i])
    }
}
arr = []
number(2, arr)

item = [1,2,3,4,453,5]
item.forEach(element =>{
    console.log(element)
})

item.forEach(function(element){
    console.log(element)
})

console.log("Here is the Return")
item2 = item.map(element =>{
    return element*element
})    
console.log(item2)

console.log("Here is the one liner function")

one_liner = item.filter(element=>element%2)
console.log(one_liner)

