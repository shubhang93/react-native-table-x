const Chance = require("chance");
const chance= new Chance()
export default function(){
    return new Array(100)
        .fill(0)
        .map(e=>({name:chance.name(),age:chance.age(),city:chance.city(),state:chance.state()}))
}