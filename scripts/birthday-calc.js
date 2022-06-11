const year = prompt('Какого ты года рождения?');
const age = new Date().getFullYear() - year;

alert(`Поздравляю! Тебе ${age} лет!`);