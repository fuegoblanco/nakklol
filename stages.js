const stage = [
	['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '+', '+', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
	['-', '+', '+', '+', '+', '-', '+', '+', '+', '+', '+', '-', '+', '+', '-', '+', '+', '+', '+', '+', '-', '+', '+', '+', '+', '-'],
	['-', '+', '*', '*', '+', '-', '+', '*', '*', '*', '+', '-', '+', '+', '-', '+', '*', '*', '*', '+', '-', '+', '*', '*', '+', '-'],
	['-', '+', '+', '+', '+', '-', '+', '+', '+', '+', '+', '-', '+', '+', '-', '+', '+', '+', '+', '+', '-', '+', '+', '+', '+', '-'],
	['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
	['-', '+', '+', '+', '+', '-', '+', '+', '-', '+', '+', '+', '+', '+', '+', '+', '+', '-', '+', '+', '-', '+', '+', '+', '+', '-'],
	['-', '+', '+', '+', '+', '-', '+', '+', '-', '+', '+', '+', '+', '+', '+', '+', '+', '-', '+', '+', '-', '+', '+', '+', '+', '-'],
	['-', '-', '-', '-', '-', '-', '+', '+', '-', '-', '-', '-', '+', '+', '-', '-', '-', '-', '+', '+', '-', '-', '-', '-', '-', 'P'],
	['+', '+', '+', '+', '+', '-', '+', '+', '+', '+', '+', '-', '+', '+', '-', '+', '+', '+', '+', '+', '-', '+', '+', '+', '+', '+'],
	['*', '*', '*', '*', '+', '-', '+', '+', '+', '+', '+', '-', '+', '+', '-', '+', '+', '+', '+', '+', '-', '+', '*', '*', '*', '*'],
	['*', '*', '*', '*', '+', '-', '+', '+', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '+', '+', '-', '+', '*', '*', '*', '*'],
	['*', '*', '*', '*', '+', '-', '+', '+', '-', '+', '+', '+', 'D', 'D', '+', '+', '+', '-', '+', '+', '-', '+', '*', '*', '*', '*'],
	['+', '+', '+', '+', '+', '-', '+', '+', '-', '+', '+', '+', 'G', 'G', '+', '+', '+', '-', '+', '+', '-', '+', '+', '+', '+', '+'],
	['=', '-', '-', '-', '-', '-', '-', '-', '-', '+', '+', '+', 'G', 'G', '+', '+', '+', '-', '-', '-', '-', '-', '-', '-', '-', '='],
	['+', '+', '+', '+', '+', '-', '+', '+', '-', '+', '+', '+', '+', '+', '+', '+', '+', '-', '+', '+', '-', '+', '+', '+', '+', '+'],
	['*', '*', '*', '*', '+', '-', '+', '+', '-', '+', '+', '+', '+', '+', '+', '+', '+', '-', '+', '+', '-', '+', '*', '*', '*', '*'],
	['*', '*', '*', '*', '+', '-', '+', '+', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '+', '+', '-', '+', '*', '*', '*', '*'],
	['*', '*', '*', '*', '+', '-', '+', '+', '-', '+', '+', '+', '+', '+', '+', '+', '+', '-', '+', '+', '-', '+', '*', '*', '*', '*'],
	['+', '+', '+', '+', '+', '-', '+', '+', '-', '+', '+', '+', '+', '+', '+', '+', '+', '-', '+', '+', '-', '+', '+', '+', '+', '+'],
	['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '+', '+', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
	['-', '+', '+', '+', '+', '-', '+', '+', '+', '+', '+', '-', '+', '+', '-', '+', '+', '+', '+', '+', '-', '+', '+', '+', '+', '-'],
	['-', '+', '+', '+', '+', '-', '+', '+', '+', '+', '+', '-', '+', '+', '-', '+', '+', '+', '+', '+', '-', '+', '+', '+', '+', '-'],
	['P', '-', '-', '+', '+', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '+', '+', '-', '-', '-'],
	['+', '+', '-', '+', '+', '-', '+', '+', '-', '+', '+', '+', '+', '+', '+', '+', '+', '-', '+', '+', '-', '+', '+', '-', '+', '+'],
	['+', '+', '-', '+', '+', '-', '+', '+', '-', '+', '+', '+', '+', '+', '+', '+', '+', '-', '+', '+', '-', '+', '+', '-', '+', '+'],
	['-', '-', '-', '-', '-', '-', '+', '+', '-', '-', '-', '-', '+', '+', '-', '-', '-', '-', '+', '+', 'P', '-', '-', '-', '-', '-'],
	['-', '+', '+', '+', '+', '+', '+', '+', '+', '+', '+', '-', '+', '+', '-', '+', '+', '+', '+', '+', '+', '+', '+', '+', '+', '-'],
	['-', '+', '+', '+', '+', '+', '+', '+', '+', '+', '+', '-', '+', '+', '-', '+', '+', '+', '+', '+', '+', '+', '+', '+', '+', '-'],
	['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
];