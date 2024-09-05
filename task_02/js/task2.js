"use strict"
if (confirm("Почати тестування?")) {
	// Крок 0. Введення даних, позначення величин
	function createStoresWeeklyProfitInfo(stores) {
		let profitInfo = []
		for (let s = 0; s < stores; s++) {
			const weeksProfit = []
			for (let d = 0; d < 7; d++) {
				const dayProfit = Math.floor(Math.random() * 1001)
				weeksProfit.push(dayProfit)
			}
			profitInfo.push(weeksProfit)
		}
		return profitInfo
	}

	const storesNum = parseInt(prompt('Введіть кількість магазинів'))
	const storesWeeklyProfitInfo = createStoresWeeklyProfitInfo(storesNum)
	console.log(storesWeeklyProfitInfo)

	// Крок 1. Обчислення результатів

	// 1) загальний прибуток кожного магазину за тиждень;
	function getTotalStoreWeeklyProfit(arr) {
		let newArr = []
		for (let store = 0; store < arr.length; store++) {
			let totalWeeklyProfit = 0
			for (let d = 0; d < arr[store].length; d++) {
				totalWeeklyProfit += arr[store][d]
			}
			newArr.push(totalWeeklyProfit)
		}
		return newArr
	}
	const totalStoreWeeklyProfit = getTotalStoreWeeklyProfit(storesWeeklyProfitInfo)

	// 2) загальний прибуток усіх магазинів по дням (загальний прибуток усіх магазинів за понеділок, за вівторок, і т.д.);
	function getTotalStoresDayProfit(arr) {
		let dayProfitArr = []
		for (let d = 0; d < 7; d++) {
			let sum = 0
			for (let store = 0; store < arr.length; store++) {
				sum += arr[store][d]
			}
			dayProfitArr.push(sum)
		}
		return dayProfitArr
	}
	let totalStoresDayProfit = getTotalStoresDayProfit(storesWeeklyProfitInfo)

	// 3) загальний прибуток за робочі дні
	function getTotalWorkDaysProfit(arr) {
		let sum = 0
		for (let store = 0; store < arr.length; store++) {
			for (let d = 0; d < 5; d++) {
				sum += arr[store][d]
			}
		}
		return sum
	}
	const totalWorkDaysProfit = getTotalWorkDaysProfit(storesWeeklyProfitInfo)

	// 4) загальний прибуток за вихідні дні
	function getTotalWeekendProfit(arr) {
		let sum = 0
		for (let store = 0; store < arr.length; store++) {
			for (let d = 5; d < 7; d++) {
				sum += arr[store][d]
			}
		}
		return sum
	}
	const totalWeekendProfit = getTotalWeekendProfit(storesWeeklyProfitInfo)

	// 5) Максимальний прибуток за середу
	function getMaxWednesdayProfit(arr) {
		let maxValue = arr[0][2]
		for (let store = 1; store < arr.length; store++) {
			if (arr[store][2] > maxValue) maxValue = arr[store][2]
		}
		return maxValue
	}
	const maxWednesdayProfit = getMaxWednesdayProfit(storesWeeklyProfitInfo)

	// 6) сформувати загальний список (одновимірний масив) зі значенням, які що більші за 200
	function getValuesMoreThan200(arr) {
		return arr.flat(Infinity).filter(el => el > 200)
	}
	let valuesMoreThan200 = getValuesMoreThan200(storesWeeklyProfitInfo)

	// 7) відсортувати кожен тиждень за зростанням
	function sortWeeksInAscend(arr) {
		return arr.map(week => [...week].sort((week1, week2) => week1 - week2))
	}

	// 8) відсортувати тижні (рядки) за спаданням максимального елементи у цьому тижні (рядку), тобто при порівнянні рядків потрібно порівнювати максимальні елементи у кожному з цих рядків
	function findMaxValue(arr) {
		return arr.reduce((maxValue, el) => el > maxValue ? el : maxValue,
		arr[0])
	}
	const weeksInDescendMaxValue = storesWeeklyProfitInfo.map((week) => [...week]).sort((el1, el2) => findMaxValue(el2) - findMaxValue(el1))

	// 9) упорядкувати тижні (рядки) за спаданням суми елементів у рядку (тобто при порівнянні двох рядків треба знайти суму кожного з рядків і порівнювати ці суми, на основі цих сум буде зрозуміло, який з елементів повинен іти раніше).
	function findMaxSum(arr) {
		return arr.reduce((prevSum, el) => prevSum + el)
	}
	const weeksInDescendSum = storesWeeklyProfitInfo.map((week) => [...week]).sort((el1, el2) => findMaxSum(el2) - findMaxSum(el1))


	// крок 2. Виведення результатів

	document.write(`<div class="container">`)
	document.write(`<div>Масив прибутку магазинів: виведений у консоль</div>`)
	document.write(`<ul class="task-list">`)
	document.write(
		`<li class="task-item">1) Загальний прибуток кожного магазину за тиждень: ${totalStoreWeeklyProfit}</li>`
	)
	document.write(
		`<li class="task-item">2) Загальний прибуток усіх магазинів по дням (загальний прибуток усіх магазинів за понеділок, за вівторок, і т.д.);: ${totalStoresDayProfit}</li>`
	)
	document.write(
		`<li class="task-item">3) Загальний прибуток за робочі дні: ${totalWorkDaysProfit}</li>`
	)
	document.write(
		`<li class="task-item">4) загальний прибуток за вихідні дні: ${totalWeekendProfit}</li>`
	)
	document.write(`<li class="task-item">5) Максимальний прибуток за середу: ${maxWednesdayProfit}</li>`)
	document.write(`<li class="task-item">6) Cформувати загальний список (одновимірний масив) зі значенням, які що більші за 200: ${valuesMoreThan200}</li>`)
	document.write(
		`<li class="task-item">7) Відсортувати кожен тиждень за зростанням ${sortWeeksInAscend(storesWeeklyProfitInfo)}</li>`
	)
	document.write(
		`<li class="task-item">8) Відсортувати тижні (рядки) за спаданням максимального елементи у цьому тижні (рядку) ${weeksInDescendMaxValue}</li>`
	)
	document.write(
		`<li class="task-item">9) Упорядкувати тижні (рядки) за спаданням суми елементів у рядку: ${weeksInDescendSum}</li>`
	)
	document.write(`</ul>`)
	document.write(`</div>`)
}