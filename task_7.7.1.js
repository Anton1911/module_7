function printInfo() {
    console.log(`Name: ${this.name}, Age: ${this.age}`)
}

const person = {
    name: 'Антон',
    age: 24
}

printInfo.call(person)


