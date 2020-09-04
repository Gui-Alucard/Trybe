const assert = require('assert')

const people = [
    {
        name: "Nicole",
        bornIn: 1992,
        nationality: "Australian"
    },
    {
        name: "Harry",
        bornIn: 2008,
        nationality: "Australian"
    },
    {
        name: "Toby",
        bornIn: 1901,
        nationality: "Australian"
    },
    {
        name: "Frida",
        bornIn: 1960,
        nationality: "Dannish"
    },
    {
        name: "Fernando",
        bornIn: 2001,
        nationality: "Brazilian"
    }
]

/*
Escreva uma função filterPeople que, dada uma lista de pessoas,
retorna todas as pessoas australianas que nasceram no século 20:
escreva filterPeople abaixo
Dica: use object destructuring.
*/

const bornInSec20 = (year) => {
  return year >= 1901 && year <= 2000;
};
const australians = (bornCountry) => {
  return bornCountry === "Australian";
};
const filterPeople = (people) => {
  return people.filter(
    ({ bornIn, nationality }) => bornInSec20(bornIn) && australians(nationality)
  );
};

const filteredPeople = filterPeople(people);
console.table(filteredPeople);

assert.deepEqual(filteredPeople[0], { name: "Nicole", bornIn: 1992, nationality: "Australian" })
assert.deepEqual(filteredPeople[1], { name: "Toby", bornIn: 1901, nationality: "Australian" })