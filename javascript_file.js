function foo(){

}

console.log(typeof foo) // function
console.log(typeof foo.prototype) 
console.log(foo.prototype)

function Dog(){

}

Dog.prototype.bark = function(){
    console.log('bark!')
}

console.log(Dog.prototype)
const fido = new Dog()

fido.bark = function(){
    console.log('fido bark!')
}
fido.bark()



console.log(fido.hasOwnProperty('bark'))


/*
 fido.bark() --> look at fido's prototype ? bark() under fido's prototype : go against the prototype chain Dog class, 
*/