"use strict";
let chicken = {
    name: "Duman",
    age: 3,
    foodAmount: 4,
    nameOfType: "chicken",
    biome: "backyard",
    reservoir: true,
    area: 30,
    food: "grass",
    IsHerbivore: true,
};
let chicken2 = {
    name: "snowy",
    age: 3,
    foodAmount: 6,
    nameOfType: "chicken",
    biome: "backyard",
    reservoir: true,
    area: 3,
    food: "grass",
    IsHerbivore: true,
};
let cat = {
    name: "Bitter",
    age: 2,
    foodAmount: 3,
    nameOfType: "cat",
    biome: "home",
    reservoir: false,
    area: 32,
    food: "meat",
    IsHerbivore: false,
};
let CageForchicken = {
    animals: [],
    biome: "backyard",
    reservior: true,
    capacity: 3,
    IsForHerbivore: true,
};
function CheckCage(animal, cage) {
    let count = 0;
    if (animal.reservoir == cage.reservior &&
        animal.biome == cage.biome &&
        animal.IsHerbivore == cage.IsForHerbivore) {
        for (let j = 0; j < cage.animals.length; j++) {
            count = count + 1;
        }
        if (cage.capacity > count) {
            cage.animals.push(animal);
        }
        else {
            console.log("not enough space");
        }
    }
    else {
        console.log(`This cage is not avilable for  -${animal.name}-  animal`);
    }
}
function ShowAllNamesInCage(cage) {
    for (let index = 0; index < cage.animals.length; index++) {
        console.log(cage.animals[index].name);
    }
}
CheckCage(chicken, CageForchicken);
CheckCage(chicken2, CageForchicken);
ShowAllNamesInCage(CageForchicken);