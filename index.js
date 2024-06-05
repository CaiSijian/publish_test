// @ts-check
/**@type {HTMLDivElement} */
const h1 = document.querySelector('h1')
const h2 = document.querySelector('h2')
h1.innerText='0.1.3'
h2.innerText='current event name'
const input = document.querySelector('input')
const textarea = document.querySelector('textarea')
input.addEventListener('keydown', handler)
window.addEventListener('keydown', handler)
/**
 * 
 * @param {MouseEvent} event 
*/
function handler(event) {
    h2.innerText=this===window ? 'window' :'input'
    const { ctrlKey,shiftKey,altKey,metaKey, code,key,keyCode} = event
    const info={ ctrlKey,shiftKey,altKey,metaKey, code,key,keyCode}
    textarea.value = JSON.stringify(info,undefined,4)
}