const { assert, test } = require('testzero');
const { doubler } = require ('../src/index.js')

test('works fine', () => {
	assert(doubler(0) == 0);
	assert(doubler(1) == 2);
	assert(doubler(2) == 4);
	assert(doubler(3) == 6);
	assert(doubler(4) == 8);
	assert(doubler(5) == 10);
	assert(doubler(6) == 12);
	assert(doubler(7) == 14);
	assert(doubler(8) == 16);
	assert(doubler(9) == 18);
	assert(doubler(10) == 20);
});

test('works less fine', () => {
	assert(doubler(1) == 1);
});

test('fails', () => {
	assert(doubler(1) == 10);
});

test('fails as well', () => {
	assert(doubler(1) == 10);
});

test('fails more often than not', () => {
	assert(doubler(1) == 10);
});
