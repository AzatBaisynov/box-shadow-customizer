let vertical = document.querySelector('.vertical')
let horizontal = document.querySelector('.horizontal')
let blur = document.querySelector('.blur')
let spread = document.querySelector('.spread')
let color = document.querySelector('#color')
let box = document.querySelector('.box')
let boxShadowCode = document.querySelector('.box-shadow-code')
let sb = document.querySelectorAll('.settings-block')

sb.forEach(el => {
    el.addEventListener('input', () => {
        generateShadow()
    })
})

function generateShadow() {
    const property = `${horizontal.value}px ${vertical.value}px ${blur.value}px ${spread.value}px ${color.value}`
    box.style.boxShadow = property
    boxShadowCode.textContent = `box-shadow: ${property}`
}

generateShadow()