export class Stack {
    #storage = [];
    /**
     * @param Iterable initial
     */
    constructor(initial = []) {
        this.#storage = Array.from(initial);
    }

    push(...values) {
        this.#storage.push(...values);
    }

    pop() {
        return this.#storage.pop() ?? null;
    }

    peek() {
        return this.#storage[this.#storage.length - 1] ?? null;
    }
}
