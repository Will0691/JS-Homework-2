//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

function displayFavoriteDishes(person){
    console.log('Favorite Pizzas:', person.pizza.join(', '));
    console.log('Favorite Tacos:', person.tacos);
    console.log('Favorite Bugers:', person.burgers);
    console.log('Ice Cream Preference:', person3.ice_cream.join(', '));

    shakes = person.shakes[0];
    console.log('Favorite Shakes are...');
    console.log('\tOberwise:', shakes.oberwise);
    console.log('\tDunkin\':', shakes.dunkin);
    console.log('\tCulvers:', shakes.culvers);
    console.log('\tMcDonald\'s:', shakes.mcDonalds, '\n\t...If their machine wasn\'t constantly "broken"');
    console.log('\tCupids Candies:', shakes.cupids_candies);
}

displayFavoriteDishes(person3);

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
class Person {
    constructor (name, age){
        this.name = name;
        this.age = age;
    }

    // Use an arrow to create the printInfo method
    printInfo = () => console.log(`This person\'s name is ${this.name}, and they are ${this.age} years old`)

    // Create another arrow function for the addAge method that takes a single parameter
    // Adding to the age 
    addAge = (x) => this.age += x;
}

old_guy = new Person('Mr. Old', 100)
old_guy.printInfo()

young_guy = new Person('Mr. Young', 2)
young_guy.printInfo()
young_guy.addAge(3)
young_guy.printInfo()

// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/
const lengthChecker = (string) => {
    return new Promise((resolve, reject) => (string.length > 10) ? resolve(true) : reject(false))
    .then(
        (resolve) => console.log('Big word')
    )
    .catch(
        (reject) = () => console.log('Small Number')
    )

}

lengthChecker('hippopotomonstrosesquippedaliophobia')
lengthChecker('tiny')
