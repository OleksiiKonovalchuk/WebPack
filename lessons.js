import './lessons.css'
import { nanoid } from 'nanoid'

const refs = {
	codingInput: document.querySelector('.coding'),
	codingOutput: document.querySelector('.codingOutput'),
	decodingInput: document.querySelector('.decoding'),
	decodingOutput: document.querySelector('.decodingOutput'),
}
// #1

// localStorage.clear()
// refs.codingInput.addEventListener('change', (e) => {
// 	const id = nanoid()
// 	const value = e.target.value
// 	localStorage.setItem(id, JSON.stringify(value))
// 	refs.codingOutput.insertAdjacentHTML('beforeend', `<li><p>${id}</p></li>`)
// })
// refs.decodingInput.addEventListener('change', (e) => {
// 	const obj = JSON.parse(localStorage.getItem(e.target.value))
// 	refs.decodingOutput.insertAdjacentHTML('beforeend', `<li><p>${obj}</p></li>`)
// })

// #2
// function decodingSentences(item) {
// 	// const codingSentences = (item) => {
// 	switch (item) {
// 		case 'ф':
// 			return 'a'
// 		case 'и':
// 			return 'b'
// 		case 'с':
// 			return 'c'
// 		case 'в':
// 			return 'd'
// 		case 'у':
// 			return 'e'
// 		case 'а':
// 			return 'f'
// 		case 'п':
// 			return 'g'
// 		case 'р':
// 			return 'h'
// 		case 'ш':
// 			return 'i'
// 		case 'о':
// 			return 'j'
// 		case 'ш':
// 			return 'k'
// 		case 'д':
// 			return 'l'
// 		case 'ь':
// 			return 'm'
// 		case 'т':
// 			return 'n'
// 		case 'щ':
// 			return 'o'
// 		case 'з':
// 			return 'p'
// 		case 'й':
// 			return 'q'
// 		case 'к':
// 			return 'r'
// 		case 'і':
// 			return 's'
// 		case 'е':
// 			return 't'
// 		case 'г':
// 			return 'u'
// 		case 'м':
// 			return 'v'
// 		case 'ц':
// 			return 'w'
// 		case 'ч':
// 			return 'x'
// 		case 'н':
// 			return 'y'
// 		case 'я':
// 			return 'z'

// 		default:
// 			return ' '
// 	}
// }
// function codingSentences(item) {
// 	// const codingSentences = (item) => {
// 	switch (item) {
// 		case 'a':
// 			return 'ф'
// 		case 'b':
// 			return 'и'
// 		case 'c':
// 			return 'с'
// 		case 'd':
// 			return 'в'
// 		case 'e':
// 			return 'у'
// 		case 'f':
// 			return 'а'
// 		case 'g':
// 			return 'п'
// 		case 'h':
// 			return 'р'
// 		case 'i':
// 			return 'ш'
// 		case 'j':
// 			return 'о'
// 		case 'k':
// 			return 'ш'
// 		case 'l':
// 			return 'д'
// 		case 'm':
// 			return 'ь'
// 		case 'n':
// 			return 'т'
// 		case 'o':
// 			return 'щ'
// 		case 'p':
// 			return 'з'
// 		case 'q':
// 			return 'й'
// 		case 'r':
// 			return 'к'
// 		case 's':
// 			return 'і'
// 		case 't':
// 			return 'е'
// 		case 'u':
// 			return 'г'
// 		case 'v':
// 			return 'м'
// 		case 'w':
// 			return 'ц'
// 		case 'x':
// 			return 'ч'
// 		case 'y':
// 			return 'н'
// 		case 'z':
// 			return 'я'
// 		default:
// 			return ' '
// 	}
// }
function decodingSentences(item) {
	// const codingSentences = (item) => {

	if (item === 'ф') return 'a'
	if (item === 'и') return 'b'
	if (item === 'с') return 'c'
	if (item === 'в') return 'd'
	if (item === 'у') return 'e'
	if (item === 'а') return 'f'
	if (item === 'п') return 'g'
	if (item === 'р') return 'h'
	if (item === 'ш') return 'i'
	if (item === 'о') return 'j'
	if (item === 'л') return 'k'
	if (item === 'д') return 'l'
	if (item === 'ь') return 'm'
	if (item === 'т') return 'n'
	if (item === 'щ') return 'o'
	if (item === 'з') return 'p'
	if (item === 'й') return 'q'
	if (item === 'к') return 'r'
	if (item === 'і') return 's'
	if (item === 'е') return 't'
	if (item === 'г') return 'u'
	if (item === 'м') return 'v'
	if (item === 'ц') return 'w'
	if (item === 'ч') return 'x'
	if (item === 'н') return 'y'
	if (item === 'я') return 'z'
	if (item === ' ') return ' '
	if (item === '.') return '.'
	if (item === ',') return ','
	if (item === ')') return '0'
	if (item === '(') return '9'
	if (item === '*') return '8'
	if (item === '&') return '7'
	if (item === '^') return '6'
	if (item === '%') return '5'
	if (item === '$') return '4'
	if (item === '#') return '3'
	if (item === '@') return '2'
	if (item === '!') return '1'
}
function codingSentences(item) {
	// const codingSentences = (item) => {
	if (item === 'a') return 'ф'
	if (item === 'b') return 'и'
	if (item === 'c') return 'с'
	if (item === 'd') return 'в'
	if (item === 'e') return 'у'
	if (item === 'f') return 'а'
	if (item === 'g') return 'п'
	if (item === 'h') return 'р'
	if (item === 'i') return 'ш'
	if (item === 'j') return 'о'
	if (item === 'k') return 'л'
	if (item === 'l') return 'д'
	if (item === 'm') return 'ь'
	if (item === 'n') return 'т'
	if (item === 'o') return 'щ'
	if (item === 'p') return 'з'
	if (item === 'q') return 'й'
	if (item === 'r') return 'к'
	if (item === 's') return 'і'
	if (item === 't') return 'е'
	if (item === 'u') return 'г'
	if (item === 'v') return 'м'
	if (item === 'w') return 'ц'
	if (item === 'x') return 'ч'
	if (item === 'y') return 'н'
	if (item === 'z') return 'я'
	if (item === ' ') return ' '
	if (item === '.') return '.'
	if (item === ',') return ','
	if (item === '0') return ')'
	if (item === '9') return '('
	if (item === '8') return '*'
	if (item === '7') return '&'
	if (item === '6') return '^'
	if (item === '5') return '%'
	if (item === '4') return '$'
	if (item === '3') return '#'
	if (item === '2') return '@'
	if (item === '1') return '!'
}
let str = 'Alex is a coding teacher of Dimon'.toLowerCase()
const coded = str.split('').map(codingSentences).join('')
console.log(coded)
console.log(coded.split('').map(decodingSentences).join(''))
console.log(
	str
		.split('')
		.map((item) => {
			if (item === 'a') {
				return '&'
			}
			return item
		})
		.join('')
)
console.log(str)
refs.codingInput.addEventListener('change', (e) => {
	const textinput = e.target.value.toLowerCase().split('').map(codingSentences).join('')
	console.log(textinput.charAt(0))
	refs.codingOutput.insertAdjacentHTML(
		'beforeend',
		`<li><p>${textinput.charAt(0).toUpperCase() + textinput.slice(1)}</p></li>`
	)
})
refs.decodingInput.addEventListener('change', (e) => {
	const textinput = e.target.value.toLowerCase().split('').map(decodingSentences).join('')
	refs.decodingOutput.insertAdjacentHTML(
		'beforeend',
		`<li><p>${textinput.charAt(0).toUpperCase() + textinput.slice(1)}</p></li>`
	)
})
