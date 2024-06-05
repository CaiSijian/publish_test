// @ts-check
const input = document.querySelector('input')
const textarea=document.querySelector('textarea')
input.addEventListener('keydown', (event) => {
    const message = `${event.code}${event.key}`
    textarea?.value=JSON.stringify(message)
})
window.addEventListener('keydown', (event) => {
    const message = `${event.code}${event.key}`
    textarea?.value=JSON.stringify(message)
})