// @ts-check
window.addEventListener('DOMContentLoaded', () => {
    const input = document.querySelector('input')
    input.addEventListener('keydown', (event) => {
        const message = `${event.code}  ${event.key}`
        alert(message)
    })
})
window.addEventListener('keydown', (event) => {
    const message = `${event.code}  ${event.key}`
    alert(message)
})