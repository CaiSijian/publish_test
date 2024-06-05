// @ts-check
/**@type {HTMLDivElement} */
const h1 = document.querySelector('h1')
h1.innerText='0.1.2'
const input = document.querySelector('input')
const textarea = document.querySelector('textarea')
input.addEventListener('keydown', (event) => {
    const message = `input event
${event.code}   ${event.key}`
    textarea.value = JSON.stringify(message)
})
window.addEventListener('keydown', (event) => {
    const message = `window event
${event.code}   ${event.key}`
    textarea.value = JSON.stringify(message)
})