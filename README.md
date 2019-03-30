# testzero

test runner without dependencies

### Minimalistic API:

```javascript
const { assert, test, summary } = require('testzero');

test('works fine', () => {
	assert([].length == 0);
});

summary();
```

### Minimalistic output:

`.` for successful tests, `x` for failed tests:

```bash
$ npm test

> example@1.0.0 test /Users/chris/src/testzero/example
> node tests

.xxxx
Successfully ran 1 test(s)
Failed 4 test(s):
	works less fine
	fails
	fails as well
	fails more often than not
npm ERR! Test failed.  See above for more details.
```

## Usage

* define `tests/index.js` to `require` your tests
* optionally: call `summary()`
* write tests in `.test.js` files
* add `npm tests` as a script

Check the [example project](https://github.com/stchris/testzero/blob/master/example/).

