import { dumpI32, dumpU32, len, loadI32, loadU32 } from "../index.js";

describe("zig", function () {
	function arraysEquals(a, b) {
		var i = a.length;
		if (i != b.length) return false;
		while (i--) {
			if (a[i] !== b[i]) return false;
		}
		return true;
	}

	it("Testing simple compression", function () {
		var array = [10, 100000, 65999, 10, 10, 0, 1, 1, 2000, 0xFFFFFFFF];
		var buf = dumpU32(array);
		if (!len(buf) == array.length) throw "bad count";
		var back = loadU32(buf);
		if (!arraysEquals(array, back)) throw "bad";
	});

	it("Testing simple compression (signed)", function () {
		var array = [10, 100000, 65999, 10, 10, 0, -1, -1, -2000];
		var buf = dumpI32(array);
		if (!len(buf) == array.length) throw "bad count";
		var back = loadI32(buf);
		if (!arraysEquals(array, back)) throw "bad";
	});
});
