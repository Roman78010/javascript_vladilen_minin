// let firstName = 'Misha'
// const lastName = 'Minin'
// const age = 26
// const isProgrammer = true

// name = 'Vlad'

// console.log(age)

// const _ = 'private'
// const $ = 'some value'
// const withNum5 = '5'

// console.log('Имя человека: ' + firstName + ', а возраст: ' + age.toString())
// alert('Имя человека: ' + firstName + ', а возраст: ' + age.toString())

// const lastName = prompt('Ввведите фамилию')
// alert(firstName + ' ' + lastName)

// let currentYear = 2022
// let birthYear = 1993

// const age =  currentYear + birthYear

// const a = 10
// const b = 5

// let c = 32
// // c = c + a

// c += a

// console.log(a + b)
// console.log(a - b)
// console.log(a * b)
// console.log(a / b)

// console.log(currentYear++)
// console.log(--currentYear)
// console.log(c)

// const isProgrammer = true
// const firstName = 'Vladilen'
// const age = 26
// let x

// console.log(typeof isProgrammer)
// console.log(typeof firstName)
// console.log(typeof age)
// console.log(typeof x)

// const fullAge = 26
// const birthYear = 1993
// const currentYear = 2022

// const isFullAge = currentYear - birthYear >= fullAge

// console.log(isFullAge)

// const courseStatus = 'fail'
// if (courseStatus === 'ready') {
//     console.log('Курс уже готов и его можно проходить')
// } else if (courseStatus === 'pending') {
//     console.log('Курс пока находиться в разработке')
// } else {
//     console.log("Курс не получился")
// }

// const isReady = true

// isReady ? console.log('Все готово') : console.log('Все не готово')

// if (isReady) {
//     console.log('Все готово')
// } else {
//     console.log('Все не готово')
// }

// const num1 = 42
// const num2 = '42'

// console.log(num1 === num2)

// function calculateAge(year) {
//     return 2022 - year
// };

// console.log(calculateAge(1993))
// console.log(calculateAge(1990))
// console.log(calculateAge(2003))

// function logInfoAbout(name, year) {
//     const age = calculateAge(year)
//     if (age > 0) {
//     console.log('Человек по имени ' + name + ' сейчас имеет возраст ' + age)
//     } else {
//         console.log('Вообще-то это уже будущее!')
//     }
// }

// logInfoAbout('Vladilen', 1993)
// logInfoAbout('Helen', 2995)

// const cars = ['Mazda', 'Mercedes', 'Ford']
// const cars = new Array('Mazda', 'Mercedes', 'Ford')
// console.log(cars.length)

// console.log(cars[1])
// console.log(cars[0])
// console.log(cars[2])

// cars[0] = 'Porsche'
// cars[cars.length] = 'Mazda'
// console.log(cars)

// const cars = ['Mazda', 'Mercedes', 'Ford', 'Porsche']
// for (let i = 0; i < cars.length; i++) {
//     const car = cars[i]
//     console.log(car)
// }

// for (let car of cars) {
//     console.log(car)
// }

const person = {
    firstName: 'Vladilen',
    lastName: 'Minin',
    year: 1993,
    languages: ['Ru', 'En', 'De'],
    hasWife: false,
    greet: function() {
        console.log('greet from person')
    }
}

console.log(person.firstName)
console.log(person['lastName'])
const key = 'languages'
console.log(person[key])
person.hasWife = true
person.isProgrammer = true
console.log(person)
person.greet()

for (let i = 0; i < 10; i++) {
    setTimeout(function () {
        console.log(i);
    }, 0);
}

console.log('end');
