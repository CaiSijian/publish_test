window.addEventListener('DOMContentLoaded',() => {
    const input=document.querySelector('input')
    input.addEventListener('keydown',(event) => {
        if(event.code==='Enter'){
            alert(event.code)
        }
    })
})
// @ts-check
window.addEventListener('keydown', (event) => {
    alert(event.code)
})