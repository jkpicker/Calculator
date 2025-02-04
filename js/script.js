const buttons = document.querySelectorAll('.btn')
const scoreboard = document.querySelector('.score')

let scorestr = ''
let num = 0
let notzero = 0 * -1

buttons.forEach(button => {
	button.addEventListener('click', () => {
		if (scorestr.length > 11) {
			scoreboard.innerText = 'too many'
			return
		} else {
			if (button.classList.contains('func')) {
				if (button.id === 'reset') {
					scorestr = '0'
					scoreboard.innerText = scorestr
					num = 1
					return
				}
				if (button.id === 'negative') {
					scorestr = parseInt(scorestr * -1)
					scoreboard.innerText = scorestr
					return
				}
				if (button.id === 'delete') {
					if (scorestr === '0') {
						return
					} else {
						scorestr = scorestr.slice(0, -1)
						scoreboard.innerText = scorestr
						num = 0
						return
					}
				}
				if (button.id === 'equal') {
					try {
						scorestr = eval(scorestr)
						scoreboard.innerText = parseFloat(parseFloat(scorestr).toFixed(2)) 
					} catch (e) {
						scoreboard.innerText = 'Error'
						scorestr = '0'
						return
					}
					num = 0
				}
			} else if (button.classList.contains('once')) {
				if (num === 1) {
					scorestr = scorestr.slice(0, -1)
					const currentValue = button.innerText
					scorestr += currentValue
					scoreboard.innerText = scorestr
					return
				} else {
					const currentValue = button.innerText
					scorestr += currentValue
					scoreboard.innerText = scorestr
					num = 1
					return
				}
			} else {
				if (
					scorestr === '0' ||
					scorestr === 'too many' ||
					scorestr === notzero
				) {
					scorestr = ''
					scoreboard.innerText = scorestr
				}
				const currentValue = button.innerText
				scorestr += currentValue
				scoreboard.innerText = scorestr

				num = 0
				return
			}
		}
	})
})
