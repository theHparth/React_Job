/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const isWeakKey = thing => typeof thing === "object" && thing !== null;

/**
 * @template {any[]} T
 * @template V
 */
class WeakTupleMap {
	constructor() {
		/** @private */
		this.f = 0;
		/** @private @type {any} */
		this.v = undefined;
		/** @private @type {Map<object, WeakTupleMap<T, V>> | undefined} */
		this.m = undefined;
		/** @private @type {WeakMap<object, WeakTupleMap<T, V>> | undefined} */
		this.w = undefined;
	}

	/**
	 * @param {[...T, V]} args tuple
	 * @returns {void}
	 */
	set(...args) {
		/** @type {WeakTupleMap<T, V>} */
		let node = this;
		for (let i = 0; i < args.length - 1; i++) {
			node = node._get(args[i]);
		}
		node._setValue(args[args.length - 1]);
	}

	/**
	 * @param {T} args tuple
	 * @returns {boolean} true, if the tuple is in the Set
	 */
	has(...args) {
		/** @type {WeakTupleMap<T, V>} */
		let node = this;
		for (let i = 0; i < args.length; i++) {
			node = node._peek(args[i]);
			if (node === undefined) return false;
		}
		return node._hasValue();
	}

	/**
	 * @param {T} args tuple
	 * @returns {V} the value
	 */
	get(...args) {
		/** @type {WeakTupleMap<T, V>} */
		let node = this;
		for (let i = 0; i < args.length; i++) {
			node = node._peek(args[i]);
			if (node === undefined) return undefined;
		}
		return node._getValue();
	}

	/**
	 * @param {[...T, function(): V]} args tuple
	 * @returns {V} the value
	 */
	provide(...args) {
		/** @type {WeakTupleMap<T, V>} */
		let node = this;
		for (let i = 0; i < args.length - 1; i++) {
			node = node._get(args[i]);
		}
		if (node._hasValue()) return node._getValue();
		const fn = args[args.length - 1];
		const newValue = fn(...args.slice(0, -1));
		node._setValue(newValue);
		return newValue;
	}

	/**
	 * @param {T} args tuple
	 * @returns {void}
	 */
	delete(...args) {
		/** @type {WeakTupleMap<T, V>} */
		let node = this;
		for (let i = 0; i < args.length; i++) {
			node = node._peek(args[i]);
			if (node === undefined) return;
		}
		node._deleteValue();
	}

	/**
	 * @returns {void}
	 */
	clear() {
		this.f = 0;
		this.v = undefined;
		this.w = undefined;
		this.m = undefined;
	}

	_getValue() {
		return this.v;
	}

	_hasValue() {
		return (this.f & 1) === 1;
	}

	_setValue(v) {
		this.f |= 1;
		this.v = v;
	}

	_deleteValue() {
		this.f &= 6;
		this.v = undefined;
	}

	_peek(thing) {
		if (isWeakKey(thing)) {
			if ((this.f & 4) !== 4) return undefined;
			return this.w.get(thing);
		} else {
			if ((this.f & 2) !== 2) return undefined;
			return this.m.get(thing);
		}
	}

	_get(thing) {
		if (isWeakKey(thing)) {
			if ((this.f & 4) !== 4) {
				const newMap = new WeakMap();
				this.f |= 4;
				const newNode = new WeakTupleMap();
				(this.w = newMap).set(thing, newNode);
				return newNode;
			}
			const entry = this.w.get(thing);
			if (entry !== undefined) {
				return entry;
			}
			const newNode = new WeakTupleMap();
			this.w.set(thing, newNode);
			return newNode;
		} else {
			if ((this.f & 2) !== 2) {
				const newMap = new Map();
				this.f |= 2;
				const newNode = new WeakTupleMap();
				(this.m = newMap).set(thing, newNode);
				return newNode;
			}
			const entry = this.m.get(thing);
			if (entry !== undefined) {
				return entry;
			}
			const newNode = new WeakTupleMap();
			this.m.set(thing, newNode);
			return newNode;
		}
	}
}

module.exports = WeakTupleMap;