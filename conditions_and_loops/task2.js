let averageGrade = Math.round(Math.random() * 100);
let message = `Середній бал - ${averageGrade}, Ваша оцінка - `;

switch (true) {
	case averageGrade >= 91 && averageGrade <= 100:
		console.log(message + 'Відмінно');
		break;
	case averageGrade >= 81:
		console.log(message + 'Дуже добре');
		break;
	case averageGrade >= 71:
		console.log(message + 'Добре');
		break;
	case averageGrade >= 60:
		console.log(message + 'Задовільно');
		break;
	default:
		console.log(message + 'Незадовільно');
}
