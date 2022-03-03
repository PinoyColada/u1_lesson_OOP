// class Guitar {
//     constructor(color, string, volume) {
//         this.color = color;
//         this.string = string;
//         this.volume = volume;
//     }

//     turnItUp() {
//         this.volume += 5;
//     }
// }


// let blueGuitar = new Guitar('blue', 6, 0);
// let blackGuitar = new Guitar('black', 0, 0);
// let surfBoardGuitar = new Guitar('wood grain', 0, 0);
// let telecaster = new Guitar('white', 0,0);
// let evh = new Guitar('striped', 0,0);

// console.log(blueGuitar)
// console.log(blackGuitar)
// console.log(surfBoardGuitar)
// console.log(telecaster)
// console.log(evh)


// console.log('before we turn it up:', telecaster);
// telecaster.play();
// console.log('after we turn it up:', telecaster);

// Inheritance

class Animal {
    constructor(name , breed) {
        this.name = name;
        this.breed = breed;
        this.diet = [];
    }

    eat(food) {
        this.diet.push(food);
        console.log(this.diet);
    }

}

class Dog extends Animal {
    constructor(name, breed, tail) {
        super(name, breed);
        this.waggingTail = tail;
    }

    // redefining method from parent class
    eat(food) {
        this.diet.push(food);
        console.log("Wow, that was a yummy piece of food!")
    }

    bark(){
        return `Bark! Hello, this is dog. My name is ${this.name}`
    }
}

class Cat extends Animal {
    constructor(name, breed, numLives){
        super(name, breed);
        this.numLives = numLives;
    }

    meow() {
        return `Meow! I am not a dog! My name is ${this.name}`
    }
}

let lucy = new Dog('Lucy', 'Lab-mix', true);
let garfield = new Cat('Lucy', 'Tabby', 9);
console.log(lucy);
lucy.eat('squirrels');
console.log(garfield.meow());
garfield.eat('lasagna');
console.log(garfield);