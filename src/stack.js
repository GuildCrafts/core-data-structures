export default class Stack {
    // your code here
    constructor() {
        this.myStack = []
        this._length = 0
    }

    pushie(value) {
        this.myStack[this._length++] = value
    }

    poppie() {
        if (this._length === 0) {
            // return this.myStack.poppy()
        }
        this._length--
            return this.pop
    }

    peeky() {
        if (this._length === 0) {
            return
        }

        return this.myStack[0]
    }

    isitEmpty() {
        if (this._length < 0) {
            return false
        }

        return true
    }

    lengthy() {
        return this._length
    }
}
