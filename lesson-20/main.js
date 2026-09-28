// sole.log('#20. JavaScript homework: замовлення в інтернет-магазині')

/*
 * Загальні умови:
 * - кроки виконуються послідовно, один під одним, у цьому самому файлі;
 * - результат кожного кроку виводьте в консоль через console.log.
 */

/*
 * ЗАВДАННЯ. Замовлення в інтернет-магазині
 *
 * Вихідні дані (скопіюйте собі у файл і далі працюйте з ними):
 *
 * const orderObj = {
 *   id: 1024,
 *   customer: { firstName: 'John', lastName: 'Smith', age: 15 },
 *   priceStr: '1099.99 грн',
 *   quantityStr: '3',
 *   deliveryDay: 3,
 *   tempNote: 'службова нотатка, видалити перед відправкою',}
 

/*
 * Крок 1. Об'єкти
 *
 * Додайте до orderObj властивість city.
 * Виведіть у консоль один рядок у форматі 'John Smith from Київ', де John - orderObj.customer.firstName,
 * Smith - orderObj.customer.lastName.
 */

/*
 * Крок 2. in / delete
 *
 * a) Перевірте через оператор in, чи є в orderObj властивість 'tempNote'.
 * b) Видаліть її через оператор delete і перевірте через in ще раз.
 */

/*
 * Крок 3. Копіювання об'єктів
 *
 * a) Зробіть глибоку копію замовлення - backupOrder.
 *    Змініть у копії backupOrder.customer.firstName на 'Ann' і переконайтесь,
 *    що в оригіналі ім'я не змінилось.
 * b) За допомогою Object.assign() створіть НОВИЙ об'єкт paidOrder - злиття orderObj та { status: 'paid' }.
 *    Переконайтесь, що в orderObj поле status не з'явилось.
 */

/*
 * Крок 4. Перетворення типів
 *
 * a) З рядка orderObj.priceStr отримайте число price.
 * b) З рядка orderObj.quantityStr отримайте число quantity.
 * c) Обчисліть total = price * quantity.
 */

/*
 * Крок 5. Тернарний оператор
 *
 * Обчисліть знижку discount за віком клієнта (orderObj.customer.age):
 * менше 18  - 0.1
 * 18..60    - 0
 * понад 60  - 0.15
 *
 * Дозволений тільки тернарний оператор ?, використання if і switch заборонено.
 * Обчисліть finalTotal - суму зі знижкою.
 */

/*
 * Крок 6. if ... else if ... else
 *
 * За допомогою конструкції if ... else if ... else обчисліть вартість доставки deliveryPrice:
 * finalTotal менше 500   - 100
 * finalTotal 500..1500   - 50
 * finalTotal понад 1500  - 0
 */

/*
 * Крок 7. switch / case / default
 *
 * За номером orderObj.deliveryDay обчисліть змінну deliveryDayName - назву дня тижня
 * (1 - 'Понеділок', ..., 7 - 'Неділя').
 * Якщо в deliveryDay рядок, дробове число або число поза діапазоном 1...7 -
 * deliveryDayName має дорівнювати 'Невідомий день'.
 * Обов'язково використайте switch / case / default.
 *
 * Перевірте роботу коду для значень deliveryDay:
 * 3   → 'Середа'
 * 7   → 'Неділя'
 * 9   → 'Невідомий день'
 * 1.5 → 'Невідомий день'
 * '2' → 'Невідомий день'
 */

/*
 * Крок 8. Цикл for, оператор кома, break / continue
 *
 * Обчисліть bonusSum - бонуси клієнта.
 * У циклі for переберіть числа від 1 до 20 і додавайте кожне з них до bonusSum.
 *
 * Причому:
 * - лічильник i та верхня межа limit оголошуються в одному for через оператор кома,
 * - числа, кратні 3, до суми не додаються (continue),
 * - як тільки bonusSum стає більшою за 50, цикл припиняється (break).
 *
 * Результат: bonusSum → 61
 */


const orderObj = {
	id: 1024,
	customer: { firstName: 'John', lastName: 'Smith', age: 15 },
	priceStr: '1099.99 грн',
	quantityStr: '3',
	deliveryDay: 3,
	tempNote: 'службова нотатка, видалити перед відправкою',
}

orderObj.city = `Київ`;
console.log(
	`${orderObj.customer.firstName} ${orderObj.customer.lastName} from ${orderObj.city}`,
);

console.log(`tempNote` in orderObj);

delete orderObj.tempNote;
console.log(orderObj.tempNote);

let backupOrder = structuredClone(orderObj);
backupOrder.customer.firstName = `Ann`;
console.log(backupOrder);
console.log(orderObj);

let paidOrder = Object.assign({}, orderObj);
paidOrder.status = 'paid';
console.log(paidOrder);

const price = parseFloat(orderObj.priceStr);
console.log(price);
console.log(typeof price);

const quantity = Number(orderObj.quantityStr);
console.log(quantity);
console.log( typeof quantity);

let total = price * quantity;
console.log(total);

const age = orderObj.customer.age;
const discount = age < 18 ? 0.1 
: age <= 60 ? 0 
: 0.15; 
console.log(discount);

const finalTotal = total * (1 -discount);

let deliveryPrice

if (finalTotal < 500) {deliveryPrice = 100}
else if (finalTotal < 1500) {deliveryPrice = 50}
else {deliveryPrice = 0}

console.log(deliveryPrice);

let deliveryDayName = orderObj.deliveryDay

switch (deliveryDayName) {
	case 1:
		console.log('Понеділок')
		break
	case 2:
		console.log('Вівторок')
		break
	case 3:
		console.log(`Середа`)
		break
	case 4:
		console.log(`Четверг`)
		break
	case 5:
		console.log(`П'ятниця`)
		break
	case 6:
		console.log(`Субота`)
		break
	case 7:
		console.log(`Неділя`)
		break
	default:
		console.log(`Невідомий день`)
}

let bonusSum = 0

for (let i = 1, limit = 20; i <= limit; i++) {
    if (i % 3 === 0) {
		continue;
}
console.log(i);
}