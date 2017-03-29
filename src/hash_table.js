class hashNode {
    constructor(key, value) {
        this.key = key
        this.value = value
        this.next = null
    }
}

export default class HashTable {
    constructor() {
        this.currentSize = 0
        this.storageMax = 64
        this.storage = []
    }

    put(key, value) {
        let hash = HashTable.hash(key) % this.storageMax
        this.storage[hash] = new hashNode(key, value)

        this.currentSize += 1
        if (this.currentSize / this.storageMax >= 0.75) {
            this.storageMax *= 2
            this.resize()
        }
    }

    get(key) {
        let hash = HashTable.hash(key) % this.storageMax
        return this.storage[hash].value
    }

    contains(key) {
        let hash = HashTable.hash(key) % this.storageMax
        return this.storage[hash] ? this.storage[hash].key === key : false
    }

    iterate(callback) {
        this.storage.forEach(hashNode => {
            if (hashNode) {
                callback(hashNode.key, hashNode.value)
            }
        })
    }
    remove(key) {
        let hash = HashTable.hash(key) % this.storageMax
        this.storage[hash] = undefined

        this.currentSize -= 1

        if (this.currentSize / this.storageMax <= 0.25) {
            this.storageMax /= 2
            this.resize()
        }
    }
    size() {
        return this.currentSize
    }

    resize() {
        let oldStorage = this.storage.slice()
        this.storage = []

        oldStorage.forEach(hashNode => {
            if (hashNode) {
                let hash = HashTable.hash(hashNode.key) % this.storageMax
                this.storage[hash] = hashNode
            }
        })

    }

}

HashTable.hash = (string) => {
    return hashFunction(string)
}

let hashFunction = (string) => {
    let hash = 0
    let char
    if (string.length === 0) {
        return hash
    }
    let charArray = string.split('')
    charArray.forEach((element) => {
        char = element.charCodeAt(0)
        hash = ((hash << 5) - hash) + char
        hash = hash & hash
    })
    return hash
}
