const squareNumber = (number) => number * number;

const calculateAverage = (numbers) => {
	if (numbers.length === 0) {
	  return 0;
	}
	const sum = numbers.reduce((acc, num) => acc + num, 0);
	return sum / numbers.length;
  }

  const isEvenOrOdd = (number) => (number % 2 === 0 ? " is even" : " is odd");

  const calculateRectangleArea = (length, width) => length * width;

  const cigarParty = (cigars, isWeekend) => (isWeekend ? cigars >= 40 : cigars >= 40 && cigars <= 60);