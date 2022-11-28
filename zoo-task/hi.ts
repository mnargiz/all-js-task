interface type {
    name:string;
    biome:string;
    reservoir:boolean;
    area:number;
    food:string;
    isHerbivore:boolean
}
interface Animal extends type{
    name:string;
    age:number;
    AmountOfFood:number;
}
interface settlement{
    biome:string;
    reservoir:boolean;
    space:number;
    isHerbivore:boolean;
}

let cat : Animal={
    name:'dumi',
    age:1,
    AmountOfFood:3,
    biome:"backyard or home",
    reservoir:false,
    area: 15,
    food:"meet",
    isHerbivore:false
} 
