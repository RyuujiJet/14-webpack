import x from './x'
import img from '../image/bell.png'

console.log('image', img)
console.log(x)
console.log('~~~')
console.log('>>>')
const div = document.getElementById('app')
div.innerHTML = `
    <img width=200 src="${img}" />
`

const button = document.createElement('button')
button.innerText = '懒加载'
div.appendChild(button)
button.onclick = () => {
    const promise = import('./lazy.js')
    promise.then((module) => {
        const fn = module.default
        fn ()
    }, () => {})
}