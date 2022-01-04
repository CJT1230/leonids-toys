const toys = [
    {
        name: "Fallout 4 Pipboy",
        price: 140,
        instock: true,
        weight: 10,
        id: 1
    },
    {
        name: "Fluffy",
        price: 10,
        instock: true,
        weight: 1.75,
        id: 2
    },
    {
        name: "Wii",
        price: 200,
        instock: false,
        weight: 15,
        id: 3
    }
    ];

    //Adds new id in numerical order after last toy hardcoded in, then pushes the new toy (object) into the toys array
    const addToyToInventory = (toyObject) => {
        const lastIndex = toys.length - 1
        const currentLastToy = toys[lastIndex]
        const maxId = currentLastToy.id
        const idForNewToy = maxId + 1
    
        toyObject.id = idForNewToy
        toys.push(toyObject)
    }
    
const rubberDuck = {
    name: "Jeff",
    price: 5,
    instock: true,
    weight: 0.25
}
const actionFigure = {
    name: "John Cena",
    price: 19.99,
    instock: true,
    weight: 2
}

addToyToInventory(rubberDuck)
addToyToInventory(actionFigure)

for (const toy of toys) {
    toy.price = toy.price * 1.05
    console.log(`The ${toy.name} costs ${toy.price} dollars.`)
}



//const toyToFind = 2

//for (const toy of toys) {
//    if (toy.id === toyToFind) {
//        toy.price = toy.price * 1.05
//        console.log(`The ${toy.name} costs ${toy.price} dollars.`)
//    }
//};
