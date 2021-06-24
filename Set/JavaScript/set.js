const MAX_SIZE = 100;

class Set {
    #storage = new Array(MAX_SIZE);

    constructor(values) {
        for (const value of values) {
            this.add(value);
        }
    }

    /** for the sake of simplicity hashing works for numbers only */
    #hash(value) {
        return value % MAX_SIZE;
    }

    has(value) {
        return this.#storage[this.#hash(value)] !== undefined;
    }

    add(value) {
        this.#storage[this.#hash(value)] = value;
    }

    delete(value) {
        this.#storage[this.#hash(value)] = undefined;
    }

    clear() {
        this.#storage = new Array(MAX_SIZE);
    }

    /** we also can keep track on an internal value */
    get size() {
        return this.values().length;
    }

    values() {
        return this.#storage.filter(val => val !== undefined);
    }
}
