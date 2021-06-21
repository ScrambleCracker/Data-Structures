export class Node {
    constructor(value = null, next = null) {
        this.value = value;
        this.next = next;
    }
}

export class LinkedList {
    head = null;
    tail = null;
    size = 0;

    constructor(head = null) {
        this.head = head;
        let cur = head;
        while (cur) {
            this.size++;
            this.tail = cur;
            cur = cur.next;
        }
    }

    prepend(node) {
        node.next = this.head;
        this.head = node;
        this.size++;
    }

    append(node = null) {
        if (node === null) return;

        if (this.tail !== null) {
            this.tail.next = node;
            this.size++;
            this.append(node.next);
        } else {
            this.prepend(node);
        }
    }

    get(idx) {
        let cur = this.head;
        let curIdx = 0;

        while (curIdx < idx && cur !== null) {
            cur = cur.next;
            curIdx++;
        }

        return cur;
    }

    insert(idx, node) {
        if (idx === 0) return this.prepend(node);
        if (idx === this.size - 1) return this.append(node);

        const prev = this.get(idx - 1);
        if (prev !== null) {
            node.next = prev.next;
            prev.next = node;
            this.size++;
        }
    }

    delete(idx) {
        if (idx > this.size - 1) return;
        if (idx === 0) {
            this.head = this.head.next;
            this.tail = this.size === 1 ? null : this.tail;
            this.size--;

        }
        const prev = this.get(idx - 1);
        prev.next = prev.next?.next ?? null;
    }
}
