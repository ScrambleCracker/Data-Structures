class Queue {
    #storage = [];

    enqueue(...values) {
        this.#storage.push(...values);
    }

    dequeue() {
        return this.size > 0
            ? this.#storage.shift()
            : null;
    }

    get size() {
        return this.#storage.length;
    }
}
