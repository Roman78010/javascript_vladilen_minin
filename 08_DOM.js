// window.alert(1)
// window.confirm('Как тебя зовут?')

const heading = document.getElementById('hello')
// const heading2 = document.getElementsByTagName('h2')[0]
// const heading2 = document.getElementsByClassName('h2-class')[0]
// const heading2 = document.querySelector('#sub-hello') // h2 или .h2-class; Этот метод возвращает всегда один элемент, причем первый попавшийся
const heading2 = document.querySelector('h2')

// console.dir(heading2)

// const heading3 = heading2.nextElementSibling
const h2List = document.querySelectorAll('h2')
// console.log(h2List)
// const heading3 = h2List[1]
const heading3 = h2List[h2List.length - 1]
// console.log(heading3)

setTimeout(() => {
    addStylesTo(heading, 'JavaScript')
}, 1500)

const link = heading3.querySelector('a')

link.addEventListener('click', (event) => {
    event.preventDefault()
    console.log('Click on link', event.target.getAttribute('href'))
    const url = event.target.getAttribute('href')

    window.location = url
})

setTimeout(() => {
    addStylesTo(link, 'Практикуйся', 'yellow')
}, 3000)

setTimeout(() => {
    addStylesTo(heading2, 'И все получится!', 'black', '2rem')
}, 4500)

function addStylesTo(node, text, color = 'red', fontSize) {
    node.textContent = text
    node.style.color = color
    node.style.textAlign = 'center'
    node.style.backgroundColor = 'grey'
    node.style.display = 'block'
    node.style.width = '100%'

    // false: '', undefined, null, 0, false
    if (fontSize) {
        node.style.fontSize = fontSize
    }
}

// https://developer.mozilla.org/ru/docs/Web/Events

heading.onclick = () => {
    if (heading.style.color === 'red') {
        heading.style.color = '#000'
        heading.style.backgroundColor = '#fff'
    } else {
        heading.style.color = 'red'
        heading.style.backgroundColor = '#000'
    }
}

heading2.addEventListener('dblclick', () => {
    if (heading2.style.color === 'black') {
        heading2.style.color = '#000'
        heading2.style.backgroundColor = '#fff'
    } else {
        heading2.style.color = 'black'
        heading2.style.backgroundColor = 'grey'
    }
})

// console.dir(heading.textContent)