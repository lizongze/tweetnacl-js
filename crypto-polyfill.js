var g = typeof window !== 'undefined' && window.Math === Math
	? window
	: typeof global === 'object'
		? global
		: this;

polyfill(g || {})

function polyfill(g) {
	if (!g.crypto) {
		delete g.crypto;
		g.crypto = {}
	}
	if (!g.crypto.getRandomValues) {
		g.crypto.getRandomValues = require('polyfill-crypto.getrandomvalues');
	}
}
