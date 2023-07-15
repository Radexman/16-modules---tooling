const capitalizeWords = (string) => {
	return string
		.toLowerCase()
		.split(' ')
		.map((word) => word[0].toUpperCase + word.slice(1))
		.join(' ');
};

const makeMoney = (amount) => {
	return `$${amount}`;
};

module.exports = {
	capitalizeWords,
	makeMoney,
};
