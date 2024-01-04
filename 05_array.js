const cars = ['Mazda', 'Ford', 'BMW', 'Mercedes']
// const people = [
//     {name: 'Vladilen', budget: 4200},
//     {name: 'Helen', budget: 3500},
//     {name: 'Victoria', budget: 1700}
// ]
const fib = [1, 1, 2, 3, 5, 8, 13]

// Function
function addItemToEnd() {
    
}

// Method
// cars.push('Renault')
// cars.unshift('Fiat')

// const firstCar = cars.shift()
// console.log(firstCar)

// const lastCar = cars.pop()
// console.log(lastCar)

// console.log(cars)

// console.log(cars.reverse()) // Метод .reverse() переворачивает массив (строку) и мутирует его, то есть после с работы с ним, при его вызове последним значение массива будет мутированный вариант; 
// console.log(cars)

// const index = cars.indexOf('BMW')
// cars[index] = 'Porsche'
// console.log(cars)


// Тоже самое с там где *;
// let findedPerson
// for (const person of people) {
//     if (person.budget === 3500) {
//         findedPerson = person
//     }
// }

// console.log(findedPerson)

// Это оно *;
// const person = people.find(function(person) {
//     return person.budget === 3500
// })
// console.log(person)

// А это еще более сокращенная версия *;
// const person = people.find(person => person.budget === 3500)
// console.log(person)


// const index = people.findIndex(function(person) {
//     return person.budget === 3500
// })
// console.log(people[index])


// console.log(cars.includes('Mazda'))

// const upperCaseCars = cars.map(car => {
//     return car.toUpperCase()
// })

// const pow2 = num => num ** 2
// const sqrt = num => Math.sqrt(num)

// const pow2Fib = fib.map(pow2).map(Math.sqrt)
// console.log(pow2Fib)

// console.log(upperCaseCars) // Метод map всегда нам возвращает новый массив
// console.log(cars)


// const pow2 = num => num ** 2
// const pow2Fib = fib.map(pow2)
// const filteredNumbers = pow2Fib.filter(num => num > 20)
// console.log(pow2Fib)
// console.log(filteredNumbers)


// Задача 1
// const text = 'Привет, мы изучаем JavaScript'
// const reverseText = text.split('').reverse().join('')
// console.log(reverseText)


const people = [
    {name: 'Vladilen', budget: 4200},
    {name: 'Helen', budget: 3500},
    {name: 'Victoria', budget: 1700}
]

const allBudget = people
    .filter(person => person.budget > 2000)
    .reduce((acc, person) => {
        acc += person.budget
        return acc
}, 0)

console.log(allBudget)

// const displayItems = allItems.filter(item => item.name.indexOf('phone') !== -1)