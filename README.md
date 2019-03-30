# testzero

test runner without dependencies

Minimalistic API:
```javascript
	const { assert, test, summary } = require('testzero');

	test('works fine', () => {
		assert([].length == 0);
	});

	summary();
```

Minimalistic output:

```

