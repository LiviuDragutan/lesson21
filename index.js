function fibonacci (n){
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci (n - 2);
 }
















const animals = function (){
    return ' This is a ' + this.name
}

const obj = {
    name: "Pug",
    animals: animals
}

const obj1 = {
    name: "Dog",
    animals: animals
}

const obj2 = {
    name: "Hamster",
    animals: animals
}

const bound = animals.bind(obj)

console.log(obj.animals.call(obj1))
console.log(obj1.animals.apply(obj))
console.log(obj2.animals())
console.log(bound())