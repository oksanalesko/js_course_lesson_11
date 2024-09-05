"use strict"
if (confirm("Почати тестування?")) {
	// Крок 0. Введення даних, позначення величин
	function createArr() {
		let arr = []
		for (let r = 0; r < 6; r++) {
			const colNum = Math.floor(Math.random() * 9) + 2
			const columns = []
			for (let c = 0; c < colNum; c++) {
				const element = Math.floor(Math.random() * 101) - 50
				columns.push(element)
			}
			arr.push(columns)
		}
		return arr
	}

	const someArr = createArr()
	console.log(someArr)

	// Крок 1. Обчислення результатів

	// 1) номери рядків від 0 до половини, стовпці від 0 до половини
	function getSumFirstHalfRowFirstHalfCol(arr) {
		let sum = 0
		for (let r = 0; r < Math.floor(arr.length / 2); r++) {
			for (let c = 0; c < Math.floor(arr[r].length / 2); c++) {
				sum += arr[r][c]
			}
		}
		return sum
	}
	let sumFirstHalfRowFirstHalfCol = getSumFirstHalfRowFirstHalfCol(someArr)

	// 2) номери рядків від 0 до половини, стовпці від половини до кінця
	function getSumFirstHalfRowLastHalfCol(arr) {
		let sum = 0
		for (let r = 0; r < Math.floor(arr.length / 2); r++) {
			for (let c = Math.floor(arr[r].length / 2); c < arr[r].length; c++) {
				sum += arr[r][c]
			}
		}
		return sum
	}
	let sumFirstHalfRowLastHalfCol = getSumFirstHalfRowLastHalfCol(someArr)

	// 3) номери рядків від половини до кінця, стовпці від 0 до половини)
	function getSumLastHalfRowFirstHalfCol(arr) {
		let sum = 0
		for (let r = Math.floor(arr.length / 2); r < arr.length; r++) {
			for (let c = 0; c < Math.floor(arr[r].length / 2); c++) {
				sum += arr[r][c]
			}
		}
		return sum
	}
	let sumLastHalfRowFirstHalfCol = getSumLastHalfRowFirstHalfCol(someArr)

	// 4) номери рядків від половини до кінця , стовпці від половини до кінця
	function getSumLastHalfRowLastHalfCol(arr) {
		let sum = 0
		for (let r = Math.floor(arr.length / 2); r < arr.length; r++) {
			for (let c = Math.floor(arr[r].length / 2); c < arr[r].length; c++) {
				sum += arr[r][c]
			}
		}
		return sum
	}
	let sumLastHalfRowLastHalfCol = getSumLastHalfRowLastHalfCol(someArr)

	// 5) Суму парних рядків
	function getSumEvenRows(arr) {
		let sum = 0
		for (let r = 0; r < arr.length; r += 2) {
			for (let c = 0; c < arr[r].length; c++) {
				sum += arr[r][c]
			}
		}
		return sum
	}
	let sumEvenRows = getSumEvenRows(someArr)

	// 6) Суму непарних стовпців
	function getSumOddColumns(arr) {
		let sum = 0
		for (let r = 0; r < arr.length; r++) {
			for (let c = 1; c < arr[r].length; c += 2) {
				sum += arr[r][c]
			}
		}
		return sum
	}
	let sumOddColumns = getSumOddColumns(someArr)

	// 7) У парних рядках – непарні стовпці, у непарних – парні
	function getSumRowsColumns(arr) {
		let sum = 0
		for (let r = 0; r < arr.length; r++) {
			if (r % 2 === 0) {
				for (let c = 1; c < arr[r].length; c += 2) {
					sum += arr[r][c]
				}
			} else {
				for (let c = 0; c < arr[r].length; c += 2) {
					sum += arr[r][c]
				}
			}
		}
		return sum
	}
	let sumRowsColumns = getSumRowsColumns(someArr)

	// крок 2. Виведення результатів

	document.write(`<div class="container">`)
	document.write(`<div>Масив: виведений у консоль</div>`)
	document.write(`<ul class="task-list">`)
	document.write(
		`<li class="task-item">1) Сума номери рядків від 0 до половини, стовпці від 0 до половини: ${sumFirstHalfRowFirstHalfCol}</li>`
	)
	document.write(
		`<li class="task-item">2) Сума номери рядків від 0 до половини, стовпці від половини до кінця: ${sumFirstHalfRowLastHalfCol}</li>`
	)
	document.write(
		`<li class="task-item">3) Сума номери рядків від половини до кінця, стовпці від 0 до половини: ${sumLastHalfRowFirstHalfCol}</li>`
	)
	document.write(
		`<li class="task-item">4) Сума номери рядків від половини до кінця , стовпці від половини до кінця: ${sumLastHalfRowLastHalfCol}</li>`
	)
	document.write(`<li class="task-item">5) Сума парних рядків: ${sumEvenRows}</li>`)
	document.write(`<li class="task-item">6) Сумa непарних стовпців: ${sumOddColumns}</li>`)
	document.write(
		`<li class="task-item">7) Сума у парних рядках – непарні стовпці, у непарних – парні ${sumRowsColumns}</li>`
	)
	document.write(`</ul>`)
	document.write(`</div>`)
}
