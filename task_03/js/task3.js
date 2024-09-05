"use strict"
if (confirm("Почати тестування?")) {
	// Крок 0. Введення даних, позначення величин

	const seaWidth = 6
	const seaHeight = 6
	const shotNum = 20
	const shipNumber = 5

	// Крок 1. Обчислення результатів

	// створюємо двовимірний масив (море)
	function createSea(height, width) {
		let array = []
		for (let r = 0; r < height; r++) {
			array[r] = new Array(width).fill(0)
		}
		return array
	}
	let sea = createSea(seaHeight, seaWidth)
	// console.log(sea)

	// рандомно позиціонуємо кораблі
	function createShipPosition(arr, height, width) {
		let row, col
		do {
			row = Math.floor(Math.random() * height)
			col = Math.floor(Math.random() * width)
		} while (arr[row][col] === 1)
		return (arr[row][col] = 1) // місце розташування корабля помічаємо
	}

	// розташовуємо кораблі (5)
	for (let n = 0; n < shipNumber; n++) {
		createShipPosition(sea, seaHeight, seaWidth)
	}
	console.log(sea)
	let msg
	for (let i = shotNum, n = shipNumber; i > 0 && n > 0; ) {
		const userPositionX = parseInt(prompt(`Введіть позицію пострілу по осі X (від 1 до ${seaWidth})`, "1"))
		const userPositionY = parseInt(prompt(`Введіть позицію пострілу по осі Y (від 1 до ${seaHeight})`, "1"))
		// перевірка введених даних
		if (userPositionX < 1 || userPositionX > seaWidth || userPositionY < 1 || userPositionY > seaHeight) {
			alert("Введені неправильні дані, спробуйте ще раз")
		} else {
			if (sea[userPositionY - 1][userPositionX - 1] === 1) {
				n--
				sea[userPositionY - 1][userPositionX - 1] = 0 // очищуємо місце потопленого корабля
				alert(`Ви потопили корабель, залишилось ${n} кораблів та ${i - 1} спроб`)
			} else alert(`Ви не попали, залишилось ${i - 1} спроб та ${n} кораблів`)
			i--
			if (n === 0) { // закінчилися кораблі, завершуємо цикл
				msg = "Ви виграли!"
				break
			} else if (i === 0) { // закінчилися снаряди, завершуємо цикл
				msg = "Ви програли, снаряди закінчилися"
				break
			}
		}
	}

	// крок 2. Виведення результатів

	document.write(`<div class="container" style="text-align:center">`)
	document.write(`<p>${msg}</p>`)
	document.write(`</div>`)
}
