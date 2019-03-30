const testzero = {};

results = { success: 0, failed: [] };

testzero.assert = (expr) => {
	if (expr) return true;
	throw new Error("Assertion failed");
};

testzero.test = (name, callback) => {
	try {
		callback();
		process.stdout.write('.');
		results.success++;
	} catch (err) {
		process.stdout.write('x');
		results.failed.push(name);
	}
};

testzero.summary = () => {
	console.log();
	console.log(`Successfully ran ${results.success} test(s)`);
	if (results.failed.length > 0) {
		console.log(`Failed ${results.failed.length} test(s):`);
		results.failed.forEach((r) => console.log("\t" + r));
	}
	process.exit(results.failed.length ? 1 : 0);
};

module.exports = testzero;
