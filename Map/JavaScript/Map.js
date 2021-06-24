class Map {
    #keys = {};
    #values = {};

    /** hash method should be much complex to support any type as a key */
    #hash(key) {
        return String(key);
    }

    set(key, value) {
        this.#keys[this.#hash(key)] = key;
        this.#values[this.#hash(key)] = value;
    }

    has(key) {
        return this.#hash(key) in this.#values;
    }

    delete(key) {
        delete this.#keys[this.#hash(key)];
        delete this.#values[this.#hash(key)];
    }

    clear() {
        this.#keys = {};
        this.#values = {};
    }

    entries() {
        return Object.keys(this.#keys)
            .map(hash => [this.#keys[hash], this.#values[hash]]);
    }

    size() {
        return Object.keys(this.#keys).length;
    }
}
